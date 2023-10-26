import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
  handleClick: () => void;
}

export function CloserButton({ handleClick }: Props) {
  return (
    <button className="w-16 h-16 bg-white" onClick={handleClick}>
      <RxHamburgerMenu className="w-full h-full" />
    </button>
  );
}
