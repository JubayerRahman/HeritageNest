import img1 from "../../assets/img/aboutSec3Img1.jpeg"
import img2 from "../../assets/img/aboutSec3Img2.jpeg"

const AboutSction3 = () => {
  return (
    <div className="container mx-auto">
        <div className="mb-[350px] relative">
            <img className="w-[904px] h-[455px] mb-[-10%]" src={img1} alt="" />
            <div className="p-[32px] bg-[#ECF5FF] w-[592px] left-[35%] absolute">
                <div className="title flex gap-3 items-center  bg-[#ECF5FF]">
                    <div className="divider bg-[#E61] rounded-[4px] h-[4px] w-[50px]"></div>
                    <h1 className=" text-[18px] text-[#E61] font-[600] leading-[21.6px]">Our Story</h1>
                </div>
                <h1 className="text-[#1F2937] text-[36px] font-[700] leading-[48px] mt-[16px]">Efficient and Transparent <br /> Home Buying Solutions</h1>
                <p className="text-[#6B7280] text-[16px] font-[500] leading-[24px] mt-[24px]">In the symphony of bustling markets and serene landscapes, Heritage-Nest was born—a vision to</p>
            </div>
        </div>
        <div className="mb-[400px] relative">
            <img className="w-[710px] h-[455px] ml-[35%] mb-[-10%]" src={img2} alt="" />
            <div className="p-[32px] bg-[#ECF5FF] left-[10%] w-[592px] absolute">
                <div className="title flex gap-3 items-center  bg-[#ECF5FF]">
                    <div className="divider bg-[#E61] rounded-[4px] h-[4px] w-[50px]"></div>
                    <h1 className=" text-[18px] text-[#E61] font-[600] leading-[21.6px]">Mission Statement</h1>
                </div>
                <h1 className="text-[#1F2937] text-[36px] font-[700] leading-[48px] mt-[16px]">Efficient and Transparent  <br />
Home Buying Solutions</h1>
                <p className="text-[#6B7280] text-[16px] font-[500] leading-[24px] mt-[24px]">To bridge the miles with smiles, Heritage-Nest pledges to be the golden thread connecting NRIs to their homeland, through trust, transparency, and tailored real estate solutions.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutSction3
