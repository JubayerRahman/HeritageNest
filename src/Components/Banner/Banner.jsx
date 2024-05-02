import "./Banner.css";
import video from "../../assets/bannerBG.mp4";
import { CiSearch } from "react-icons/ci";


const Banner = () => {
  return (
    <div className="mainBanner">
      <div className="relative">
        <video autoPlay loop muted className="w-[100%] object-cover object-top absolute z-[-1] h-[550px]">
            <source src={video} type="video/mp4" />
        </video>
        <div className="bannerTestSection text-white text-center flex flex-col gap-[48px] items-center">
            <h1 className="text-[16px] leading-[24px] font-[500]">Seamlessly connecting you to the heartbeat of India's prime properties.</h1>
            <h1 className="text-[64px] leading-[72px] font-[600] tracking-[-1.28px]">Your Portal to India's <br /> Exquisite Real Estate</h1>
            <button className="bg-[#0059B1] flex items-center gap-[12px] pt-[16px] pb-[16px] pl-[24px] pr-[24px] rounded-md"><span className="text-[24px]"><CiSearch/></span> <span className="text-[18px] font-[500] leading-[24px]">Find Property</span></button>
        </div>
      </div>
    </div>
  )
}

export default Banner
