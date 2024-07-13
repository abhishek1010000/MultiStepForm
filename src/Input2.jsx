// import React from 'react';

const Input2 = ({ formData, setFormData }) => {
    return (
      <div>
        <h2>Email</h2>
        <input
          type="email"
          value={formData.input2}
          onChange={(e) => setFormData({ ...formData, input2: e.target.value })}
        />
      </div>
    );
  };
  
  export default Input2;
  