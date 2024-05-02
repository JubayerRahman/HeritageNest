import buyer from "../../assets/img/buyer.jpeg"
import location from "../../assets/img/fi-bs-marker.png"
import property from "../../assets/img/fi-bs-home-location.png"
import Dollar from "../../assets/img/Dollar Minimalistic.png"
import { CiSearch } from "react-icons/ci";

const BuyerSearch = () => {
  return (
    <div>
        <img className="w-full h-[309px] object-cover mb-[200px]" src={buyer} alt="" />
        <div className="buyerSearchBox">
        <div className='w-[920px] flex flex-col items-start gap-[32px] p-[32px] rounded-[8px] mx-auto buyerFonts bg-white absolute top-[150px] left-[15%] right-[15%] shadow-lg'>
        <div className="catagories flex items-center gap-[32px]">
            <h1 className='font-[500] text-[16px] text-[#0059B1] leading-[24px] border-b-2 border-[#0059B1] w-fit'>Buy</h1>
            <h1 className='font-[500] text-[16px] text-[#4B5563] leading-[24px] w-fit'>Rent</h1>
            <h1 className='font-[500] text-[16px] text-[#4B5563] leading-[24px] w-fit'>PG</h1>
            <h1 className='font-[500] text-[16px] text-[#4B5563] leading-[24px] w-fit'>Plot</h1>
            <h1 className='font-[500] text-[16px] text-[#4B5563] leading-[24px] w-fit'>Commercial</h1>
        </div>
        <input className="border-2 border-[#E5E7EB] pl-[16px] pr-[16px] pt-[12px] pb-[12px] rounded-[4px] w-full" type="text" placeholder="Search properties" />
        <div className="flex items-start gap-[32px] w-full justify-evenly">
            <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[8px]">
                    <img src={location} alt="" />
                    <h1 className="text-[18px] font-[600] leading-[24px]">Your Location</h1>
                </div>
                <select className="w-[250px] bg-[#ECF5FF] rounded p-[12px] outline-none" name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[8px]">
                    <img src={property} alt="" />
                    <h1 className="text-[18px] font-[600] leading-[24px]">Property Type</h1>
                </div>
                <select className="w-[250px] bg-[#ECF5FF] rounded p-[12px] outline-none" name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[8px]">
                    <img src={Dollar} alt="" />
                    <h1 className="text-[18px] font-[600] leading-[24px]">Budget</h1>
                </div>
                <select className="w-[250px] bg-[#ECF5FF] rounded p-[12px] outline-none" name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
        </div>
        <button className="bg-[#0059B1] flex items-center justify-center gap-[12px] pt-[16px] pb-[16px] pl-[24px] pr-[24px] rounded-md w-full"><span className="text-[24px] text-white"><CiSearch/></span> <span className="text-[18px] font-[500] leading-[24px] text-white">Find Property</span></button>
        </div>
        </div>
    </div>
  )
}

export default BuyerSearch
