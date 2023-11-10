export const CarrouselItem = ({ number }: { number: string }) => (
  <li
    className={`h-full w-screen bg-black text-white text-7xl flex justify-center items-center border-2 border-white`}
  >
    {number}
  </li>
);
