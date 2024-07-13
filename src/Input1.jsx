// import React from 'react';

const Input1 = ({ formData, setFormData }) => {
  return (
    <div>
      <h2>Name</h2>
      <input
        type="text"
        value={formData.input1}
        onChange={(e) => setFormData({ ...formData, input1: e.target.value })}
      />
    </div>
  );
};

export default Input1;
