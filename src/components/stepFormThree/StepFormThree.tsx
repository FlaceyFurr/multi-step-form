import { useState } from "react";
import NextButton from "../nextButton/NextButton";
import PrevButton from "../prevButton/PrevButton";

type StepFormThreeProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const StepFormThree = ({ nextStep, prevStep }: StepFormThreeProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    nextStep();
  };

  const [onlineServiceActive, setOnlineServiceActive] = useState(false);
  const [largerStorageActive, setLargerStorageActive] = useState(false);
  const [customizableProfileActive, setCustomizableProfileActive] =
    useState(false);

  const toggleOnlineServiceActive = () => {
    setOnlineServiceActive(!onlineServiceActive);
  };
  const togglelargerStorageActive = () => {
    setLargerStorageActive(!largerStorageActive);
  };
  const toggleCustomizableProfileActive = () => {
    setCustomizableProfileActive(!customizableProfileActive);
  };

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
          <span className="text-base flex justify-center items-center h-stepButton w-stepButton text-marineBlue bg-lightBlue font-bold rounded-full">
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
          <span className="text-base flex justify-center items-center h-stepButton w-stepButton text-alabaster font-bold border rounded-full">
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
          Pick add-ons
        </h2>
        <p className="text-coolGray text-lg">
          Add-ons help enhance your gaming experience.
        </p>
        <form className="mt-8" onSubmit={handleSubmit}>
          <label
            htmlFor="add-ons1"
            className={`flex border ${
              onlineServiceActive
                ? "border-purplishBlue bg-magnolia"
                : "border-lightGray"
            } rounded-lg mb-3 cursor-pointer`}
          >
            <input
              type="checkbox"
              className="mx-4 my-7 rounded"
              value="1"
              id="add-ons1"
              onChange={toggleOnlineServiceActive}
            />
            <div className="flex my-3 w-full justify-between">
              <div>
                <h3 className="font-medium text-marineBlue">Online service</h3>
                <p className="text-coolGray">Access to multiplayer games</p>
              </div>
              <span className="my-3 mr-4 text-purplishBlue font-medium">
                +1$/mo
              </span>
            </div>
          </label>
          <label
            htmlFor="add-ons2"
            className={`flex border ${
              largerStorageActive
                ? "border-purplishBlue bg-magnolia"
                : "border-lightGray"
            } rounded-lg mb-3 cursor-pointer`}
          >
            <input
              type="checkbox"
              className="mx-4 my-7 rounded"
              value="2"
              id="add-ons2"
              onChange={togglelargerStorageActive}
            />
            <div className="flex my-3 w-full justify-between">
              <div>
                <h3 className="font-medium text-marineBlue">Larger storage</h3>
                <p className="text-coolGray">Extra 1TB of cloud save</p>
              </div>
              <span className="my-3 mr-4 text-purplishBlue font-medium">
                +2$/mo
              </span>
            </div>
          </label>
          <label
            htmlFor="add-ons3"
            className={`flex border ${
              customizableProfileActive
                ? "border-purplishBlue bg-magnolia"
                : "border-lightGray"
            } rounded-lg mb-3 cursor-pointer`}
          >
            <input
              type="checkbox"
              className="mx-4 my-7 rounded"
              value="2"
              id="add-ons3"
              onChange={toggleCustomizableProfileActive}
            />
            <div className="flex my-3 w-full justify-between">
              <div>
                <h3 className="font-medium text-marineBlue">
                  Customizable Profile
                </h3>
                <p className="text-coolGray">Custom theme on your profile</p>
              </div>
              <span className="my-3 mr-4 text-purplishBlue font-medium">
                +2$/mo
              </span>
            </div>
          </label>
          <PrevButton onClick={prevStep} />
          <NextButton />
        </form>
      </div>
    </>
  );
};

export default StepFormThree;
