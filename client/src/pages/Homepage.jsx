import Footer from "../components/footer";
import { useState } from "react";
import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import panda from "../assets/image/panda.gif";
import config from "../assets/image/config.png";
import cooking from "../assets/image/cooking.gif";
import cookingsound from "../assets/sound/cookingsound.mp3";
import trumpet from "../assets/sound/trumpet.mp3";
import breakfastData from "../data/breakfastData";
import lunchData from "../data/lunchData";
import dinnerData from "../data/dinnerData";

import confetti from "canvas-confetti";

const Homepage = () => {
  const [breakfast, setBreakfast] = useState();
  const [lunch, setLunch] = useState();
  const [dinner, setDinner] = useState();
  const [foods, setFoods] = useState(false);

  const [checkBreakfast, setCheckBreakfast] = useState(true);
  const [checkLunch, setCheckLunch] = useState(true);
  const [checkDinner, setCheckDinner] = useState(true);

  const [notRepete, setNotRepete] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [openConfig, setOpenConfig] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);

  const cookingSound = new Audio(cookingsound);
  const trumpetSound = new Audio(trumpet);

  const playCookingSound = () => {
    if (!isSoundOn) {
      return;
    }

    cookingSound.play();
    setTimeout(() => {
      cookingSound.pause();
      cookingSound.currentTime = 0;
      trumpetSound.play();
    }, 2500);
  };

  const randomAll = () => {
    setFoods(null);
    setIsLoading(true);
    const random1 = Math.floor(Math.random() * breakfastData.length);
    const random2 = Math.floor(Math.random() * lunchData.length);
    const random3 = Math.floor(Math.random() * dinnerData.length);
    playCookingSound();
    setTimeout(() => {
      setBreakfast(breakfastData[random1]);
      setLunch(lunchData[random2]);
      setDinner(dinnerData[random3]);
      setFoods(true);
      setIsLoading(false);

      //confetti config
      var duration = 3 * 1000;
      var animationEnd = Date.now() + duration;
      var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);
      //confetti config
    }, 2500);
  };

  const handleBreakfast = () => {
    let random = Math.floor(Math.random() * breakfastData.length);

    while (random === notRepete) {
      random = Math.floor(Math.random() * breakfastData.length);
    }
    console.log(breakfastData.length);
    console.log(random);
    setBreakfast(breakfastData[random]);
    setNotRepete(random);
  };
  const handleLunch = () => {
    let random = Math.floor(Math.random() * lunchData.length);

    while (random === notRepete) {
      random = Math.floor(Math.random() * lunchData.length);
    }

    setLunch(lunchData[random]);
    setNotRepete(random);
  };
  const handleDinner = () => {
    let random = Math.floor(Math.random() * dinnerData.length);

    while (random === notRepete) {
      random = Math.floor(Math.random() * dinnerData.length);
    }

    setDinner(dinnerData[random]);
    setNotRepete(random);
  };

  {
    isLoading && (
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <img src={cooking} className="h-[200px] mt-[50px] mb-[15px]" />
          <div className="text-[1.5rem] text-customRed">รอสักครู่~</div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <div className="min-h-[86vh] font-notoSansThai bg-[#F6FDC3]">
        <div className="absolute cursor-pointer w-[30px] sm:w-[50px] right-[0] m-[1.5rem] sm:m-[5rem]">
          <div>
            <div className="relative">
              <img src={config} onClick={() => setOpenConfig(!openConfig)} />
            </div>
            {openConfig && (
              <div
                className={`absolute flex flex-col right-[0] drop-shadow-lg m-[15px] w-[300px] sm:w-[400px]`}>
                <div className="flex items-center justify-center bg-[white] h-[50px] gap-[5px]">
                  เสียง :
                  <input
                    type="radio"
                    name="sound"
                    checked={isSoundOn}
                    onChange={() => setIsSoundOn(true)}
                  />
                  เปิด
                  <input
                    type="radio"
                    name="sound"
                    checked={!isSoundOn}
                    onChange={() => setIsSoundOn(false)}
                  />
                  ปิด
                </div>
                <div className="h-[1px] w-[100%] bg-[#ebeaea]"></div>
                <div className="flex items-center justify-center bg-[white] h-[50px] ">
                  <input
                    className="m-[5px]"
                    type="checkbox"
                    name="meal"
                    checked={checkBreakfast}
                    onChange={() => setCheckBreakfast(!checkBreakfast)}
                    disabled={!checkDinner && !checkLunch}
                  />
                  มื้อเช้า
                  <input
                    className="m-[5px]"
                    type="checkbox"
                    name="meal"
                    checked={checkLunch}
                    onChange={() => setCheckLunch(!checkLunch)}
                    disabled={!checkDinner && !checkBreakfast}
                  />
                  มื้อกลางวัน
                  <input
                    className="m-[5px]"
                    type="checkbox"
                    name="meal"
                    checked={checkDinner}
                    onChange={() => setCheckDinner(!checkDinner)}
                    disabled={!checkLunch && !checkBreakfast}
                  />
                  มื้อเย็น
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className=" text-[3rem] text-customRed font-bold mt-[100px]">
            <span className="text-[4rem] text-customPurple ">กินไร</span>
            ดีนะ?
          </div>
          <button
            onClick={randomAll}
            disabled={isLoading}
            className="my-[30px] text-[1.5rem] hover:bg-[#4b88f9] active:bg-[#025ed7] text-white w-[220px] cursor-pointer bg-customBlue p-[15px] rounded-[30px] ">
            สุ่มเลย! 🎲
          </button>
          {isLoading && (
            <div className="">
              <div className="flex flex-col items-center justify-center">
                <img src={cooking} className="h-[200px] mt-[50px] mb-[15px]" />
                <div className="text-[1.5rem] text-customRed">รอสักครู่~</div>
              </div>
            </div>
          )}
          {foods ? (
            <div className="flex flex-wrap items-center justify-center gap-[100px]">
              {checkBreakfast && (
                <div className="flex gap-[100px] ">
                  <FoodCard
                    meal="breakfast"
                    img={breakfast?.img}
                    menu={breakfast?.menu}
                    description={breakfast?.description}
                    cal={breakfast?.cal}
                    link={breakfast?.link}
                    handle={handleBreakfast}
                  />
                </div>
              )}
              {checkLunch && (
                <div className="flex gap-[100px] ">
                  <FoodCard
                    meal="lunch"
                    img={lunch?.img}
                    menu={lunch?.menu}
                    description={lunch?.description}
                    cal={lunch?.cal}
                    link={lunch?.link}
                    handle={handleLunch}
                  />
                </div>
              )}
              {checkDinner && (
                <div className="flex gap-[100px]">
                  <FoodCard
                    meal="dinner"
                    img={dinner?.img}
                    menu={dinner?.menu}
                    description={dinner?.description}
                    cal={dinner?.cal}
                    link={dinner?.link}
                    handle={handleDinner}
                  />
                </div>
              )}
            </div>
          ) : (
            !isLoading && (
              <div className="">
                <div className="flex flex-col items-center justify-center">
                  <img src={panda} className="h-[200px] mt-[50px] mb-[15px]" />
                  <div className="text-[1.5rem] text-customRed">
                    ไม่รู้กินอะไร เดี๋ยวสุ่มให้นะ~
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
