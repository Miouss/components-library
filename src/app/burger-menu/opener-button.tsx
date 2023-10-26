import { RxHamburgerMenu } from "react-icons/rx";

interface Props {
  openMenu: () => void;
}

export function OpenerButton({ openMenu }: Props) {
  return (
    <button className="absolute w-16 h-16 sm:p-4 sm:w-24 sm:h-24" onClick={openMenu}>
      <RxHamburgerMenu className="w-full h-full" />
    </button>
  );
}
