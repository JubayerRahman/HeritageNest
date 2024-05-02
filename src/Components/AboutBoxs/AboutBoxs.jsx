import { IoArrowDownCircleOutline } from "react-icons/io5";


const AboutBoxs = () => {
  return (
    <div className='container mx-auto my-[50px] grid grid-cols-4 gap-5'>
      <div className="box1 p-[24px] bg-[#FDF0E7]">
        <h1 className="text-[40px] font-[700] text-[#D95D0F]">2k+</h1>
        <h1 className="specialFont text-[16px] leading-[24px]">New Flat Listed</h1>
        <div className="flex justify-between mt-[32px]">
            <h1 className="specialFont text-[16px] leading-[24px] underline text-[#D95D0F]">View all</h1>
            <h1 className="text-[#D95D0F] text-[24px]"><IoArrowDownCircleOutline/></h1>
        </div>
      </div>
      <div className="box2 p-[24px] bg-[#ECF5FF]">
        <h1 className="text-[40px] font-[700] text-[#0051A1]">2k+</h1>
        <h1 className="specialFont text-[16px] leading-[24px]">New Flat Listed</h1>
        <div className="flex justify-between mt-[32px]">
            <h1 className="specialFont text-[16px] leading-[24px] underline text-[#0051A1]">View all</h1>
            <h1 className="text-[#0051A1] text-[24px]"><IoArrowDownCircleOutline/></h1>
        </div>
      </div>
      <div className="box3 p-[24px] bg-[#FDF0E7]">
        <h1 className="text-[40px] font-[700] text-[#D95D0F]">2k+</h1>
        <h1 className="specialFont text-[16px] leading-[24px]">New Flat Listed</h1>
        <div className="flex justify-between mt-[32px]">
            <h1 className="specialFont text-[16px] leading-[24px] underline text-[#D95D0F]">View all</h1>
            <h1 className="text-[#D95D0F] text-[24px]"><IoArrowDownCircleOutline/></h1>
        </div>
      </div>
      <div className="box4 p-[24px] bg-[#ECF5FF]">
        <h1 className="text-[40px] font-[700] text-[#0051A1]">2k+</h1>
        <h1 className="specialFont text-[16px] leading-[24px]">New Flat Listed</h1>
        <div className="flex items-center justify-between mt-[32px]">
            <h1 className="specialFont text-[16px] leading-[24px] underline text-[#0051A1]">View all</h1>
            <h1 className="text-[#0051A1] text-[24px]"><IoArrowDownCircleOutline/></h1>
        </div>
      </div>
    </div>
  )
}

export default AboutBoxs
