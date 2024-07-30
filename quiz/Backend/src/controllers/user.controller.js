import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponce } from "../utils/ApiResponce.js";

const generateAccessTokenRefereshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const refreshToken = user.generateRefreshToken();
    const accessToken = user.generateAccessToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { refreshToken, accessToken };
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "something went wrong");
  }
};

const signupUser = asyncHandler(async (req, res) => {
  const { username, email, fullname, password, role} = req.body;
  if (
    [username, email, fullname, password, role].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(400, "the user already exist");
  }

  
  const ProfilePicPath = req.files?.profilepic[0]?.path;
  if (!ProfilePicPath) {
    throw new ApiError(405, "ProfilePic file is required");
  }
  console.log(ProfilePicPath); 
  const ProfilePic = await uploadOnCloudinary(ProfilePicPath);
  console.log(ProfilePic)
  if (!ProfilePic) {
    throw new ApiError(408, "ProfilePic file is required");
  }

  const user = await User.create({
    username: username.toLowerCase(),
    email,
    fullname,
    password,
    profilepic: ProfilePic.url,
    role
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "somhing went wrong while creating user");
  }
  return res
    .status(200)
    .json(new ApiResponce(200, createdUser, "User registered Successfully"));
});


const loginUser = asyncHandler(async (req, res) => { 
  const { email, username, password } = req.body;

  if (!email && !username) {
    throw new ApiError(400, "username or email must be required");
  }

  const user = await User.findOne({
    $or: [{ email }, { username }],
  });
  if (!user) {
    throw new ApiError(404, "user does not exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "password is not correct");
  }

  const { refreshToken, accessToken } = await generateAccessTokenRefereshToken(
    user._id
  );

  const loggedinUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .json(
      new ApiResponce(
        200,
        {
          user: loggedinUser,
          accessToken,
          refreshToken,
        },
        "User logedin successfully"
      )
    );
});


export {signupUser, loginUser};