import ToggleButton from "../toggleButton/ToggleButton";

const StepFormTwo = () => {
  const arcade: string = require("./../../images/icon-arcade.svg").default;
  const advanced: string = require("./../../images/icon-advanced.svg").default;
  const pro: string = require("./../../images/icon-pro.svg").default;

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
          <span className="text-base flex justify-center items-center h-stepButton w-stepButton text-marineBlue bg-lightBlue font-bold rounded-full">
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
          Select your plan
        </h2>
        <p className="text-coolGray text-lg">
          You have the option of monthly or yearly billing.
        </p>
        <form className="grid grid-cols-3 gap-5 mt-8">
          <label
            htmlFor="tariff1"
            className="block border border-lightGray rounded-lg cursor-pointer"
          >
            <img src={arcade} alt="arcade" className="mx-3 my-3" />
            <h3 className="mt-10 ml-3 font-medium text-marineBlue">Arcade</h3>
            <p className="ml-3 mb-4">$9/mo</p>
            <input
              type="radio"
              name="tariff"
              id="tariff1"
              value="9"
              className="hidden"
            />
          </label>
          <label
            htmlFor="tariff2"
            className="block border border-lightGray rounded-lg cursor-pointer"
          >
            <img src={advanced} alt="arcade" className="mx-3 my-3" />
            <h3 className="mt-10 ml-3 font-medium text-marineBlue">Advanced</h3>
            <p className="ml-3 mb-4">$12/mo</p>
            <input
              type="radio"
              name="tariff"
              id="tariff2"
              value="12"
              className="hidden"
            />
          </label>
          <label
            htmlFor="tariff3"
            className="block border border-lightGray rounded-lg cursor-pointer"
          >
            <img src={pro} alt="arcade" className="mx-3 my-3" />
            <h3 className="mt-10 ml-3 font-medium text-marineBlue">Pro</h3>
            <p className="ml-3 mb-4">$15/mo</p>
            <input
              type="radio"
              name="tariff"
              id="tariff3"
              value="15"
              className="hidden"
            />
          </label>
        </form>
        <ToggleButton />
        <button className="mt-28 font-medium text-marineBlue">Go back</button>
        <button
            type="submit"
            className="bg-marineBlue text-white rounded-lg px-6 py-3 mt-24 float-right hover:bg-purplishBlue transition-all duration-300 ease-in"
          >
            Next Step
          </button>
      </div>
    </>
  );
};

export default StepFormTwo;
