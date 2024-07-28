class ApiResponce {
    constructor(statusCode, data, message="mision successfull"){
        this.statusCode=statusCode;
        this.data=data;
        this.message=message;
        this.success=statusCode<400
    }
}

export {ApiResponce}