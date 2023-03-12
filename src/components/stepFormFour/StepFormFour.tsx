import NextButton from "../nextButton/NextButton";
import PrevButton from "../prevButton/PrevButton";

type StepFormFourProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const StepFormFour = ({ nextStep, prevStep }: StepFormFourProps) => {
  return (
    <>
      <div className="pl-5 pt-10">
        <div className="flex mb-6">
          <span className="text-base flex justify-center items-center h-stepButton w-stepButton text-alabaster font-bold border rounded-full">
            1
          </span>
          <div className="ml-4">
            <p className="text-sm text-lightGray opacity-80 uppercase tracking-wider">
              Step 1
            </p>
            <h3 className="text-sm text-alabaster font-medium uppercase tracking-wider">
              Your Info
            </h3>
          </div>
        </div>
        <div className="flex mb-6">
          <span className="text-base flex justify-center items-center h-stepButton w-stepButton text-alabaster font-bold border rounded-full">
            2
          </span>
          <div className="ml-4">
            <p className="text-sm text-lightGray opacity-80 uppercase tracking-wider">
              Step 2
            </p>
            <h3 className="text-sm text-alabaster font-medium uppercase tracking-wider">
              Select Plan
            </h3>
          </div>
        </div>
        <div className="flex mb-6">
          <span className="text-base flex justify-center items-center h-stepButton w-stepButton text-alabaster font-bold border rounded-full">
            3
          </span>
          <div className="ml-4">
            <p className="text-sm text-lightGray opacity-80 uppercase tracking-wider">
              Step 3
            </p>
            <h3 className="text-sm text-alabaster font-medium uppercase tracking-wider">
              Add-ons
            </h3>
          </div>
        </div>
        <div className="flex">
          <span className="text-base flex justify-center items-center h-stepButton w-stepButton text-marineBlue bg-lightBlue font-bold rounded-full">
            4
          </span>
          <div className="ml-4">
            <p className="text-sm text-lightGray opacity-80 uppercase tracking-wider">
              Step 4
            </p>
            <h3 className="text-sm text-alabaster font-medium uppercase tracking-wider">
              Summary
            </h3>
          </div>
        </div>
      </div>
      <div className="ml-20% mt-8 w-3/6">
        <h2 className="text-marineBlue text-4xl font-bold mb-3">
          Finishing up
        </h2>
        <p className="text-coolGray text-lg">
          Double-check everything looks OK before confirming.
        </p>
        <div className="mt-8 bg-alabaster rounded-lg">
          <div className="flex justify-between">
            <div className="ml-4 my-4">
              <h3 className="font-medium text-marineBlue">Arcade (Monthly)</h3>
              <a
                href=""
                className="underline underline-offset-2 text-purplishBlue"
              >
                Change
              </a>
            </div>
            <span className="mr-4 my-7 font-bold text-marineBlue">$9/mo</span>
          </div>
          <hr className="w-11/12 mx-auto mt-1 mb-5 bg-lightGray border-none h-px" />
          <div className="pb-4">
            <div className="flex justify-between mb-2 mx-4">
              <h3 className="text-coolGray">Online service</h3>
              <span className="font-medium text-marineBlue">+$1/mo</span>
            </div>
            <div className="flex justify-between mb-2 mx-4">
              <h3 className="text-coolGray">Larger storage</h3>
              <span className="font-medium text-marineBlue">+$2/mo</span>
            </div>
          </div>
        </div>
        <div className="mt-4 mx-4 flex justify-between">
          <h3 className="text-coolGray">
            Total <span>(per month)</span>
          </h3>
          <span className="font-bold text-purplishBlue text-xl">+$12/mo</span>
        </div>
        <PrevButton onClick={prevStep} />
        <NextButton onClick={nextStep} />
      </div>
    </>
  );
};

export default StepFormFour;
