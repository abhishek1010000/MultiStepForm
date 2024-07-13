// import React from 'react';

const Input4 = ({ formData, setFormData }) => {
    return (
      <div>
        <h2>Password</h2>
        <input
          type="password"
          value={formData.input4}
          onChange={(e) => setFormData({ ...formData, input4: e.target.value })}
        />
      </div>
    );
  };
  
  export default Input4;
  