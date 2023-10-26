"use client";

import { useState } from "react";
import { Content, OpenerButton } from ".";


export default function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <OpenerButton openMenu={openMenu} />
      {isMenuOpen && <Content closeMenu={closeMenu} />}
    </div>
  );
}