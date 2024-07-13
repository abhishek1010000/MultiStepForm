import { useState } from 'react';
import Input1 from './Input1';
import Input2 from './Input2';
import Input3 from './Input3';
import Input4 from './Input4';


const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    setCurrentStep(5)
    setSubmitted(true);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Input1 formData={formData} setFormData={setFormData} />;
      case 2:
        return <Input2 formData={formData} setFormData={setFormData} />;
      case 3:
        return <Input3 formData={formData} setFormData={setFormData} />;
      case 4:
        return <Input4 formData={formData} setFormData={setFormData} />;
      case 5:
        return ''
      default:
        return <div>Invalid Step</div>;
    }
  };

  return (
    <div>
      {renderStep()}
      <div>
        {(currentStep > 1 && currentStep==4) && <button onClick={prevStep}>Back</button>}
        {currentStep < 4 && <button onClick={nextStep}>Next</button>}
        {currentStep === 4 && <button onClick={handleSubmit}>Submit</button>}
      </div>
      {submitted && (
        <div>
          <h1>Success</h1><hr />
          <p>Name: {formData.input1}</p>
          <p>Email: {formData.input2}</p>
          <p>DOB: {formData.input3}</p>
          <p>Password: {formData.input4}</p>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
