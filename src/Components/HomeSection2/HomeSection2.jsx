import img1 from "../../assets/img/HomeSection2Img1.jpg"
import img2 from "../../assets/img/HomeSection2Img2.png"
import img3 from "../../assets/img/HomeSection2Img3.jpg"
import img4 from "../../assets/img/HomeSection2Img4.png"
import img5 from "../../assets/img/HomeSection2Img5.jpg"
import img6 from "../../assets/img/HomeSection2Img6.jpeg"
import icon from "../../assets/img/HomeSection2Icon.png"
import { CiSearch } from "react-icons/ci";

const HomeSection2 = () => {
  return (
    <div className="container mx-auto pt-[50px] pb-[150px] flex flex-col gap-[250px]">
      <div className="section1 flex items-start gap-5">
        <div className="w-[45%]">
            <img className="w-[458px] h-[400px]" src={img1} alt="" />
            <img className=" mt-[-30%] ml-[10%]" src={img2} alt="" />
            <img className=" mt-[-47%] ml-[70%]" src={icon} alt="" />
        </div>
        <div className="flex flex-col gap-[16px]">
            <div className="dialong">
                <div className="divider bg-[#F06711] h-[3px] rounded-md w-[55px] mb-[-13px]"></div>
                <p className="text-[18px] text-[#F06711] font-[600] lading-[21px] specialFont">Property buying</p>
            </div>
            <h1 className="text-[#101828] text-[40px] font-[700] leading-[48px]">Efficient and Transparent 
                <br />
                Home Buying Solutions
            </h1>
            <p className="text-[16px] font-[500] leading-[24px]">It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. </p>
            <button className="bg-[#ECF5FF] text-[#0059B1] flex items-center gap-[12px] pt-[16px] pb-[16px] pl-[24px] pr-[24px] rounded-[4px] w-fit"><span className="text-[24px]"><CiSearch/></span> <span className="text-[18px] font-[500] leading-[24px]">Find Property</span></button>
        </div>
        <div></div>
      </div>
      <div className="section2 flex items-start gap-5 mt-[100px]">
      <div className=" w-[50%] flex flex-col gap-[16px]">
            <div className="dialong">
                <div className="divider bg-[#F06711] h-[3px] rounded-md w-[55px] mb-[-13px]"></div>
                <p className="text-[18px] text-[#F06711] font-[600] lading-[21px] specialFont">Property buying</p>
            </div>
            <h1 className="text-[#101828] text-[40px] font-[700] leading-[48px]">Efficient and Transparent 
                <br />
                Home Buying Solutions
            </h1>
            <p className="text-[16px] font-[500] leading-[24px]">It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. </p>
            <button className="bg-[#ECF5FF] text-[#0059B1] flex items-center gap-[12px] pt-[16px] pb-[16px] pl-[24px] pr-[24px] rounded-[4px] w-fit"><span className="text-[24px]"><CiSearch/></span> <span className="text-[18px] font-[500] leading-[24px]">Find Property</span></button>
        </div>
        <div className="w-[45%]">
            <img className="w-[458px] h-[400px]" src={img3} alt="" />
            <img className=" mt-[-90%] ml-[14%]" src={img4} alt="" />
            <img className=" mt-[-42%] ml-[10%]" src={icon} alt="" />
        </div>
      </div>
      <div className="section3 flex items-start gap-5">
        <div className="w-[45%]">
            <img className="w-[458px] h-[400px]" src={img5} alt="" />
            <img className=" mt-[-30%] ml-[15%] w-[452px] h-[240px]  rounded-[8px]" src={img6} alt="" />
            <img className=" mt-[-47%] ml-[70%]" src={icon} alt="" />
        </div>
        <div className="flex flex-col gap-[16px]">
            <div className="dialong">
                <div className="divider bg-[#F06711] h-[3px] rounded-md w-[55px] mb-[-13px]"></div>
                <p className="text-[18px] text-[#F06711] font-[600] lading-[21px]specialFont">Property buying</p>
            </div>
            <h1 className="text-[#101828] text-[40px] font-[700] leading-[48px]">Efficient and Transparent 
                <br />
                Home Buying Solutions
            </h1>
            <p className="text-[16px] font-[500] leading-[24px]">It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout. </p>
            <button className="bg-[#ECF5FF] text-[#0059B1] flex items-center gap-[12px] pt-[16px] pb-[16px] pl-[24px] pr-[24px] rounded-[4px] w-fit"><span className="text-[24px]"><CiSearch/></span> <span className="text-[18px] font-[500] leading-[24px]">Find Property</span></button>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default HomeSection2
