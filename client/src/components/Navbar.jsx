import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hamburger from "../assets/image/hamburger.png";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex font-notoSansThai items-center justify-between h-[80px] sm:h-[100px] px-[45px] sm:px-[100px] bg-customGreen font-bold">
        <div
          className="text-[1rem] sm:text-[2rem]  text-customRed cursor-pointer whitespace-nowrap"
          onClick={() => navigate("/")}>
          <span className="text-[2rem] sm:text-[3rem]  text-customPurple ">
            กินไร
          </span>
          ดีนะ?
        </div>
        <div className="flex items-center gap-[5rem] text-[1.2rem] text-customBlue ">
          <div className="cursor-pointer hover:text-[#005ff7] hidden lg:inline-block  ">
            ติดต่อ / แนะนำเมนูใหม่
          </div>
          <button
            onClick={() => navigate("/donate")}
            className="hover:bg-[#de97f2] active:bg-[#ac3cca] text-white w-[150px] cursor-pointer bg-customPurple p-[15px] rounded-[30px]  hidden lg:inline-block">
            ให้ค่าขนม
          </button>
          <button
            className="w-[25px] lg:hidden"
            onClick={() => setOpenNav(!openNav)}>
            <img src={hamburger} alt="menu button" />
          </button>
        </div>
      </div>
      {
        <div
          className={`nav-menu font-notoSansThai ${
            openNav ? "open" : ""
          } lg:hidden drop-shadow-lg	`}>
          <div className="nav-menu-item">
            <div className="h-[80px] flex justify-center items-center bg-[#2bc8b6] text-[white] ">
              <div className="cursor-pointer">ติดต่อ / แนะนำเมนูใหม่</div>
            </div>
          </div>
          <div className="nav-menu-item">
            <div className="h-[80px] flex justify-center items-center bg-[#07b6a1] text-[white]">
              ให้ค่าขนม
              <div className="cursor-pointer"> ให้ค่าขนม</div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Navbar;
