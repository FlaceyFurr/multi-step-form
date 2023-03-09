const StepFormSuccess = () => {
  const checkmark: string =
    require("./../../images/icon-thank-you.svg").default;

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
      <div className="ml-20% w-3/6 text-center mt-36">
        <img src={checkmark} alt="checkmark" className="mx-auto" />
        <h2 className="font-bold text-marineBlue text-4xl mt-8">Thank you!</h2>
        <p className="mt-4">
          Thanks for confirming your subscription! We hope ou have fun using our
          platform. If you ever need support, please feel free to email us at
          support@loremgaming.com.
        </p>
      </div>
    </>
  );
};

export default StepFormSuccess;
