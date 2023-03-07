import StepFormOne from "../components/stepFormOne/StepFormOne";

const StepForm = () => {
  return (
    <div className="w-2/4 h-card bg-white m-auto rounded-3xl">
      <div className="bg-sidebar-desktop flex bg-no-repeat h-sidebar m-5 rounded-xl">
        <StepFormOne />
      </div>
    </div>
  );
};

export default StepForm;
