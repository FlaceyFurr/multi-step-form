import React, { useState } from "react";
import StepFormOne from "../components/stepFormOne/StepFormOne";
import StepFormTwo from "../components/stepFormTwo/StepFormTwo";
import StepFormThree from "../components/stepFormThree/StepFormThree";
import StepFormFour from "../components/stepFormFour/StepFormFour";
import StepFormSuccess from "../components/stepFormSuccess/StepFormSuccess";

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="w-2/4 h-card bg-white m-auto rounded-3xl">
      <div className="bg-sidebar-desktop flex bg-no-repeat h-sidebar m-5 rounded-xl">
        {currentStep === 1 && <StepFormOne nextStep={nextStep} />}
        {currentStep === 2 && (
          <StepFormTwo nextStep={nextStep} prevStep={prevStep} />
        )}
        {currentStep === 3 && (
          <StepFormThree nextStep={nextStep} prevStep={prevStep} />
        )}
        {currentStep === 4 && (
          <StepFormFour nextStep={nextStep} prevStep={prevStep} />
        )}
        {currentStep === 5 && <StepFormSuccess />}
      </div>
    </div>
  );
};

export default StepForm;
