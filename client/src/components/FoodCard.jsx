import PropTypes from "prop-types";

const FoodCard = (props) => {
  const checkMeal = (input) => {
    if (input === "breakfast") {
      return "มื้อเช้า 🍳";
    } else if (input === "lunch") {
      return "มื้อกลางวัน 🍕";
    } else if (input === "dinner") {
      return "มื้อเย็น 🥗";
    }
  };

  FoodCard.propTypes = {
    img: PropTypes.string.isRequired,
    meal: PropTypes.string.isRequired,
    menu: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cal: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    handle: PropTypes.func.isRequired,
  };

  return (
    <div className="flex flex-col items-center justify-center mt-[180px] mb-[30px]">
      <div className="relative flex flex-col w-[380px] bg-customBrown p-[25px] rounded-[40px] font-bold">
        <div className="absolute top-[-150px] left-[100px] flex justify-center items-center">
          <img
            src={props.img}
            className="object-cover w-[170px] h-[170px] rounded-full bg-customPurple"></img>
        </div>

        <div className="text-center text-customPurple text-[1.5rem]">
          {checkMeal(props.meal)}
        </div>
        <div className="text-customBlue">
          <span className="text-customPurple">เมนู : </span>
          <span className="text-[1.2rem] font-bold">{props.menu}</span>
        </div>
        <div className="text-customBlue  font-normal">{props.description}</div>
        <div className="text-customBlue">
          <span className="text-customPurple ">แคลลอรี่ : </span>
          {props.cal} Cal
        </div>
        <div className="text-customBlue">
          <span className="text-customPurple ">ร้านดังแนะนำ : </span>
          <a href={props.link} target="_blank" rel="noreferrer">
            จิ้มได้ที่นี่เลยย!
          </a>
        </div>
      </div>
      <button
        onClick={props.handle}
        className="mt-[10px] hover:bg-[#de97f2] active:bg-[#ac3cca]  bg-customPurple text-white w-[100px] cursor-pointer bg-customBlue p-[5px] rounded-[30px] ">
        สุ่มใหม่! 🎲
      </button>
    </div>
  );
};

export default FoodCard;
