import React, { useEffect, useState } from "react";
import axios from 'axios';
import './ManageExam.css';

function ManageExam() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/exams')
      .then(responsse => {
        console.log('API response data:', responsse.data);
        if (Array.isArray(responsse.data)) {
          setExams(responsse.data);
        } else if (responsse.data.exams && Array.isArray(responsse.data.exams)) {
          setExams(responsse.data.exams);
        } else if (Array.isArray(responsse.data.data)) {
          setExams(responsse.data.data);
        } else if (responsse.data.questions && Array.isArray(responsse.data.questions)) { // Handle questions key
          setExams(responsse.data.questions);
        } else {
          console.error('Unexpected response data format:', responsse.data);
        }
      })
      .catch(error => {
        console.error('Error fetching exam data:', error);
      });
  }, []);

  return (
    <div className="manage-exam">
      <div className="heading">
        <h1>Manage Exam</h1>
      </div>
      <div className="meTitle">
        <h3>Title</h3>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, index) => (
              <tr key={exam._id}>
                <td>{index + 1}</td>
                <td>{exam.title}</td>
                <td>{exam.category}</td>
                <td>{new Date(exam.examDate).toLocaleDateString()}</td>
                <td>{exam.status}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                  <button>Add Question</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageExam;
