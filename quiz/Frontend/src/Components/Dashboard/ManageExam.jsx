import React, { useEffect, useState } from "react";
import './ManageExam.css';
import axios from 'axios';

function ManageExam() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/exams');
        setExams(response.data);
      } catch (error) {
        console.error("Error fetching exam data:", error);
      }
    };

    fetchExams();
  }, []);

  return (
    <div className="managexam">
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
