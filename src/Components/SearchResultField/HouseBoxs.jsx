import searchedHouse from "../../assets/img/searchedHouse.png"
import LocationIcon from "../../assets/img/fi-bs-marker.png"
import AreaIcon from "../../assets/img/AreaIcon.svg"
import StatusIcon from "../../assets/img/StatusIcon.svg"
import totalArea from "../../assets/img/totalArea.svg"

const HouseBoxs = () => {
  return (
    <div   className='bg-[#F9FAFB] p-[24px] w-[800px] rounded-lg flex items-start gap-8 mb-[24px]'>
      <img className="w-[152px] h-[184px] object-cover rounded" src={searchedHouse} alt="" />
      <div>
        <div className="flex gap-2 justify-between">
          <h1 className="text-[18px] font-[600] leading-[24px] w-[75%]">3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</h1>
          <h1 className="text-[24px] font-[700] leading-[28px]">$ 300000</h1>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
                <img src={LocationIcon} alt="" />
                <h1 className="specialFont text-[#6B7280] text-[16px] leading-[24px]">Meadowshire Park, Greenfield, USA</h1>
            </div>
            <h1 className="text-[#363636] text-[16px] font-[500] leading-6 border-2 text-center border-[#000] pl-[16px] pr-[16px] pt-[8px] pb-[8px] rounded">Bid Property</h1>
        </div>
        <div className="flex items-center gap-1">
          <h1 className="text-[16px] font-[500] leading-[20px] w-[30%]">Property details</h1>
          <div className="divider bg-[#E3E3E3] h-[3px] w-full rounded"></div>
        </div>
        <div className="flex justify-between mt-[16px]">
          <div className="flex items-center gap-3">
            <div className="icon bg-[#E61] h-[40px] w-[40px] rounded flex items-center justify-center">
              <img className="mx-auto" src={AreaIcon} alt="" />
            </div>
            <div>
              <h1 className="specialFont text-[16px] font-[500] leading-5">Total Area</h1>
              <p className="specialFont text-[16px] font-[400] leading-5 text-[#535353]">891 sqft</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="icon bg-[#E61] h-[40px] w-[40px] rounded flex items-center justify-center">
              <img className="mx-auto" src={StatusIcon} alt="" />
            </div>
            <div>
              <h1 className="specialFont text-[16px] font-[500] leading-5">Status</h1>
              <p className="specialFont text-[16px] font-[400] leading-5 text-[#535353]">Ready to move</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="icon bg-[#E61] h-[40px] w-[40px] rounded flex items-center justify-center">
              <img className="mx-auto" src={totalArea} alt="" />
            </div>
            <div>
              <h1 className="specialFont text-[16px] font-[500] leading-5">Total Area</h1>
              <p className="specialFont text-[16px] font-[400] leading-5 text-[#535353]">891 sqft</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HouseBoxs
