import icon1 from "../../assets/img/bathtub.png"
import icon2 from "../../assets/img/bed.png"
import icon3 from "../../assets/img/balcony.png"
import icon4 from "../../assets/img/shelves.png"

const Overview = () => {
  return (
    <div className='bg-[#F9FAFB] p-[24px] border-[1px] border-[#E5E7EB] rounded-lg mt-[20px]'>
      <h1 className='text-[24px] font-[600] leading-7'>Overview</h1>
      <div className="featurebox p-[16px] bg-white shadow-2xl mt-[20px] flex items-center justify-between">
        <div className="flex items-center gap-2">
            <img src={icon1} alt="" />
            <h1 className="buyerFonts text-[16px] leading-6"><span className="font-[700]">2</span> Beds</h1>
        </div>
        <div className="flex items-center gap-2">
            <img src={icon2} alt="" />
            <h1 className="buyerFonts text-[16px] leading-6"><span className="font-[700]">2</span> Bath</h1>
        </div>
        <div className="flex items-center gap-2">
            <img src={icon3} alt="" />
            <h1 className="buyerFonts text-[16px] leading-6"><span className="font-[700]">2</span> Balcony</h1>
        </div>
        <div className="flex items-center gap-2">
            <img src={icon4} alt="" />
            <h1 className="buyerFonts text-[16px] leading-6">Fully Furnished</h1>
        </div>
      </div>
      <div className="ovarAllData mt-[32px] flex justify-between flex-wrap gap-3">
        <div className="w-[90%] grid grid-cols-3 gap-5">
            <div>
                <h1 className="text-[#5C5C5C] text-[16px] leading-5">Carpet Area</h1>
                <h1 className="text-[16px] leading-6 font-[500]">2000 sqft</h1>
                <h1 className="text-[#5C5C5C] text-[14px] leading-4">$ 225/sqft</h1>
            </div>
            <div>
                <h1 className="text-[#5C5C5C] text-[16px] leading-5">Floor</h1>
                <h1 className="text-[16px] leading-6 font-[500]">Second (Out of 6th floor)</h1>
            </div>
            <div>
                <h1 className="text-[#5C5C5C] text-[16px] leading-5">Transaction Type</h1>
                <h1 className="text-[16px] leading-6 font-[500]">Ready to move</h1>
            </div>
            <div>
                <h1 className="text-[#5C5C5C] text-[16px] leading-5">Facing</h1>
                <h1 className="text-[16px] leading-6 font-[500]">North - East</h1>
            </div>
            <div>
                <h1 className="text-[#5C5C5C] text-[16px] leading-5">Additional Rooms</h1>
                <h1 className="text-[16px] leading-6 font-[500]">1 servant room & 1 gust room</h1>
            </div>
            <div>
                <h1 className="text-[#5C5C5C] text-[16px] leading-5">Age of construction</h1>
                <h1 className="text-[16px] leading-6 font-[500]">New Construction</h1>
            </div>
            </div>
        <div>
            <div>
                <h1 className="text-[#5C5C5C] text-[16px] leading-5">Lift</h1>
                <h1 className="text-[16px] leading-6 font-[500]">1</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
