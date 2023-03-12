type Props = {
    onClick?: () => void;
}

const NextButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      type="submit"
      className="bg-marineBlue text-white rounded-lg px-6 py-3 mt-20 float-right hover:bg-purplishBlue transition-all duration-300 ease-in"
      onClick={onClick}
    >
      Next Step
    </button>
  );
};

export default NextButton;
