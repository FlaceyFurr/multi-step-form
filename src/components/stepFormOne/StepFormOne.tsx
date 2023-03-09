const StepFormOne = () => {
  return (
    <>
      <div className="pl-5 pt-10">
        <div className="flex mb-6">
          <span className="text-base flex justify-center items-center h-stepButton w-stepButton text-marineBlue bg-lightBlue font-bold rounded-full">
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
          Personal info
        </h2>
        <p className="text-coolGray text-lg">
          Please provide your name, email adress, and phone number.
        </p>
        <form className="mt-8">
          <label htmlFor="name" className="block text-marineBlue font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            className="w-full border border-lightGray rounded-lg mt-1 "
            required
          />
          <label
            htmlFor="email"
            className="block text-marineBlue font-medium mt-5"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            className="w-full border border-lightGray rounded-lg mt-1"
            required
          />
          <label
            htmlFor="phone"
            className="block text-marineBlue font-medium mt-5"
          >
            Phone Number
          </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            className="w-full border border-lightGray rounded-lg mt-1 px-3 py-2.5"
            required
          />
          <button
            type="submit"
            className="bg-marineBlue text-white rounded-lg px-6 py-3 mt-24 float-right hover:bg-purplishBlue transition-all duration-300 ease-in"
          >
            Next Step
          </button>
        </form>
      </div>
    </>
  );
};

export default StepFormOne;
