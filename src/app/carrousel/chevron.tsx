import { useRef } from "react";

interface ChevronSideProps {
  handleClick: (swipeSide: "left" | "right") => void;
}

export const ChevronLeft = (props: ChevronSideProps) => (
  <Chevron sign="<" position="left" {...props} />
);
export const ChevronRight = (props: ChevronSideProps) => (
  <Chevron sign=">" position="right" {...props} />
);

interface ChevronProps extends ChevronSideProps {
  sign: "<" | ">";
  position: "left" | "right";
}
const Chevron = ({ sign, position, handleClick }: ChevronProps) => {
  const chevronRef = useRef<HTMLDivElement>(null);

  const handleClickHere = () => {
    chevronRef.current!.style.pointerEvents = "none";
    setTimeout(() => {
      chevronRef.current!.style.pointerEvents = "all";
    }, 500);
    handleClick(position);
  };

  return (
    <div
      ref={chevronRef}
      className={`absolute top-[50%] h-10 w-10 flex justify-center items-center z-10 bg-white hover:cursor-pointer select-none`}
      style={{ [position]: "0" }}
      onClick={handleClickHere}
    >
      {sign}
    </div>
  );
};
