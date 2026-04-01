import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';   // ✅ ADD THIS
import './styles.css';

function Dashboard() {

  const navigate = useNavigate();   // ✅ ADD THIS

  const user = JSON.parse(localStorage.getItem("user")); // get logged user

 const [name] = useState(user?.username || '');
  const [currentBatch, setCurrentBatch] = useState('');
  const [newBatch, setNewBatch] = useState('');
  const [notification, setNotification] = useState('');

  const API_URL = "http://localhost:5000/api/swap";

  const handleSubmit = () => {

    if (name === '' || currentBatch === '' || newBatch === '') {
      setNotification("❌ Please fill all fields");
      return;
    }

    axios.post(API_URL, {
      student: name,
      currentClass: currentBatch,
      requestedClass: newBatch,
      status: "pending"
    })
    .then(() => {

      setNotification("✅ Request Submitted Successfully!");

      // clear form
      setCurrentBatch('');
      setNewBatch('');

      // ✅ REDIRECT TO STATUS PAGE AFTER 1 SECOND
      setTimeout(() => {
        navigate("/status");   // ⭐ THIS IS THE LINE YOU ASKED
      }, 1000);

    })
    .catch(() => {
      setNotification("❌ Failed to send request");
    });

    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  return (
    <div className="dashboard">

      <div className="card">

        <h2>Student Form</h2>

        {notification && (
          <div className="notification">{notification}</div>
        )}

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          readOnly   // ✅ auto-filled from login
        />

        <input
          type="text"
          placeholder="Current Batch"
          value={currentBatch}
          onChange={(e) => setCurrentBatch(e.target.value)}
        />

        <select value={newBatch} onChange={(e) => setNewBatch(e.target.value)}>
          <option value="">Select New Batch</option>
          <option value="N">N</option>
          <option value="P">P</option>
          <option value="Q">Q</option>
        </select>

        <button onClick={handleSubmit}>Submit</button>

      </div>

    </div>
  );
}

export default Dashboard;