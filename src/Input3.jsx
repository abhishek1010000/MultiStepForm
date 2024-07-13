// import React from 'react';

const Input3 = ({ formData, setFormData }) => {
    return (
      <div>
        <h2>DOB</h2>
        <input
          type="date"
          value={formData.input3}
          onChange={(e) => setFormData({ ...formData, input3: e.target.value })}
        />
      </div>
    );
  };
  
  export default Input3;
  