type Props = {
  onClick?: () => void;
};

const PrevButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className="mt-28 font-medium text-marineBlue" onClick={onClick}>
      Go back
    </button>
  );
};

export default PrevButton;
