import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import thank from "../assets/image/thank.gif";
import qr from "../assets/image/qr.jpg";

const DonatePage = () => {
  return (
    <div className="font-notoSansThai bg-[#F6FDC3]">
      <Navbar />
      <div className="h-[100vh] flex flex-col items-center justify-center">
        <div className="flex items-center gap-[10px] mb-[35px]">
          <img
            src={thank}
            alt="panda thankyou"
            className="h-[200px] object-fit"
          />
          <img src={qr} className="h-[150px]" />
        </div>

        <div className="text-center text-[1.5rem] sm:text-[2rem] text-customBlue font-bold ">
          <div>
            <span className="text-customPurple">เลขบัญชี :</span> 408-235-6358
          </div>
          <div>
            <span className="text-customPurple">ชื่อบัญชี :</span> ศราวุธ
            นางแย้ม
          </div>
          <div className="text-customPurple">ธนาคารไทยพาณิชย์</div>
        </div>
        <div className="text-customRed text-[1.5rem]">ขอบคุณมากฮับ~ </div>
      </div>

      <Footer />
    </div>
  );
};

export default DonatePage;
