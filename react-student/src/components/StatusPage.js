import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

function StatusPage() {

  const user = JSON.parse(localStorage.getItem("user"));

  const [data, setData] = useState({
    student: "",
    batch: "",
    status: ""
  });

  useEffect(() => {

    axios.get(` https://batch-swap.onrender.com/api/status/${user.username}`)
      .then(res => {

        setData({
          student: user.username,
          batch: res.data.requestedClass || "N/A",
          status: res.data.status || "No Request"
        });

      })
      .catch(() => {
        console.log("Error fetching status");
      });

  }, []);

  return (
    <div className="status-container">

      <div className="status-card">

      <center><h2>Student Status</h2></center>  

        <div className="row">
          <label>Student :</label>
          <span>{data.student}</span>
        </div>

        <div className="row">
          <label>Batch :</label>
          <span>{data.batch}</span>
        </div>

        <div className="row">
          <label>Status :</label>
          <span className={data.status.toLowerCase()}>
            {data.status}
          </span>
        </div>

      </div>

    </div>
  );
}

export default StatusPage;