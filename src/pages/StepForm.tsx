import StepFormOne from "../components/stepFormOne/StepFormOne";
import StepFormTwo from "../components/stepFormTwo/StepFormTwo";
import StepFormThree from "../components/stepFormThree/StepFormThree";
import StepFormFour from "../components/stepFormFour/StepFormFour";
import StepFormSuccess from "../components/stepFormSuccess/StepFormSuccess";

const StepForm = () => {
  return (
    <div className="w-2/4 h-card bg-white m-auto rounded-3xl">
      <div className="bg-sidebar-desktop flex bg-no-repeat h-sidebar m-5 rounded-xl">
        {/* <StepFormOne /> */}
        {/* <StepFormTwo /> */}
        {/* <StepFormThree /> */}
        {/* <StepFormFour /> */}
        <StepFormSuccess />
      </div>
    </div>
  );
};

export default StepForm;
