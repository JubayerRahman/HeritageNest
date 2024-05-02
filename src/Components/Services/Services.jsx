import icon from "../../assets/img/HomeIcon.png"

const Services = () => {
  return (
    <div className='mt-[100px] mb-[25px] container mx-auto'>
      <h1 className='text-center text-[40px] font-[700] leading-[48px]'>Our Services</h1>
      <div className="boxs mt-[50px] grid grid-cols-3 gap-[32px]">
            <div className="box bg-[#ECF5FF] flex items-start gap-[20px] p-[24px]">
                <img className="w-[48px] h-[48px] object-cover" src={icon} alt="" />
                <div>
                    <h1 className="text-[24px] font-[600] leading-[32px] text-[#111827]">Advanced Property Search</h1>
                    <p className="specialFont text-[16px] font-[500] leading-[24px] text-[#6B7280]">Effortlessly find your dream property with advanced search filters.</p>
                </div>
            </div>
            <div className="box bg-[#ECF5FF] flex items-start gap-[20px] p-[24px]">
                <img className="w-[48px] h-[48px] object-cover" src={icon} alt="" />
                <div>
                    <h1 className="text-[24px] font-[600] leading-[32px] text-[#111827]">Virtual Tours and Multimedia</h1>
                    <p className="specialFont text-[16px] font-[500] leading-[24px] text-[#6B7280]">Explore properties through immersive virtual tours and HD photos.</p>
                </div>
            </div>
            <div className="box bg-[#ECF5FF] flex items-start gap-[20px] p-[24px]">
                <img className="w-[48px] h-[48px] object-cover" src={icon} alt="" />
                <div>
                    <h1 className="text-[24px] font-[600] leading-[32px] text-[#111827]">Secure Online Transactions</h1>
                    <p className="specialFont text-[16px] font-[500] leading-[24px] text-[#6B7280]">Ensure secure transactions and e-sign documents seamlessly online.</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Services
