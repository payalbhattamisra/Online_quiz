import React from "react";

function ManageExam() {
  return (
    <>
      <div className="managexam">
        <div className="meTitle">
          <p>Title</p>
          <button>Add new</button>
        </div>
        <div className="meDetails">
          <p>Show</p>
          <input
            type="number"
            placeholder="x10"
            step="10"
            min="0"
            max="100"
            id="number"
          />
          <p>Entries</p>
          <p>Search:</p>

          <div>
            <input type="search" id="mySearch" name="q" />
            <button>Search</button>
          </div>
        </div>
        <div>
        <table>
  <thead>
    <tr>
      <th>Sl no.</th>
      <th>Title</th>
      <th>Category</th>
      <th>Exam date</th>
      <th>Status</th>
      <th>Actons</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01</td>
      <td>knowledge</td>
      <td>General Knowledge</td>
      <td>26-06-2019</td>
      <td>ok</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
        <button>Add Question</button>
      </td>
    </tr>
  </tbody>
</table>
        </div>
      </div>
    </>
  );
}

export default ManageExam;

