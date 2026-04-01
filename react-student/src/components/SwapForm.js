import React, { useState } from 'react';

function SwapForm({ setStatus }) {

  const [name, setName] = useState('');
  const [reason, setReason] = useState('');

  const submitForm = () => {
    // Default: Pending
    setStatus("Pending");

    // Simulate faculty response after 3 sec
    setTimeout(() => {
      const result = Math.random() > 0.5 ? "Approved" : "Rejected";
      setStatus(result);
    }, 3000);
  };

  return (
    <div className="form-box">

      <h2>Swap Request</h2>

      <input
        type="text"
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Reason"
        onChange={(e) => setReason(e.target.value)}
      />

      <button onClick={submitForm}>Submit Request</button>

    </div>
  );
}

export default SwapForm;