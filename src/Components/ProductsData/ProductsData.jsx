import LocationIcon from "../../assets/img/fi-bs-marker.png"
import img1 from "../../assets/img/ProductsDataImg1.jpeg"
import img2 from "../../assets/img/ProductsDataImg2.jpeg"
import img3 from "../../assets/img/ProductsDataImg3.jpeg"
import img4 from "../../assets/img/ProductsDataImg4.jpeg"
import map from "../../assets/img/map.png"
import Overview from "../Overview/Overview"

const ProductsData = () => {
  return (
    <div className="container mx-auto flex gap-8 mt-[50px]">
      <div className="w-[800px]">
        {/* products Name */}
      <div className="flex gap-2 justify-between">
          <h1 className="text-[18px] font-[600] leading-[24px] w-[75%]">3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</h1>
          <h1 className="text-[24px] font-[700] leading-[28px]">$ 300000</h1>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
                <img src={LocationIcon} alt="" />
                <h1 className="specialFont text-[#6B7280] text-[16px] leading-[24px]">Meadowshire Park, Greenfield, USA</h1>
            </div>
        </div>
        <div className="divider w-[800px] h-[2px] rounded bg-[#959595] my-[24px]"></div>
        {/* ending of products Name */}
        {/* Images */}
        <div className="images">
            <img className="w-[800px] h-[400px] object-cover" src={img1} alt="" />
            <div className="smallImages mt-[16px] flex items-center gap-4">
                <img className="w-[290px] h-[160px]" src={img2} alt="" />
                <img className="w-[290px] h-[160px]" src={img3} alt="" />
                <div className="relative w-[290px] h-[160px]">
                <img className="w-full h-full" src={img4} alt="" />
                <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center absolute top-0">
                    <h1 className="text-white text-[20px] font-[600] leading-7">View more</h1>
                </div>
                </div>
            </div>
        </div>
        {/* images ends */}
        <Overview/>
      </div>
      {/* property value */}
      <div className="flex flex-col items-center gap-5">
      <div className="bg-[#ECF5FF] w-[384px] p-[24px] rounded-xl h-fit mt-[100px]">
        <p className="specialFont text-[16px] font-[400] leading-[20px] text-[#6B7280]">property value</p>
        <p className="text-[#252323] text-[24px] font-[700] leading-[32px]">$ 300k - $ 310k</p>
        <p className="specialFont text-[16px] font-[500] leading-[20px] text-[#6B7280]">Your bid can not be than 10% of the property Minimum value</p>
        <h1 className="specialFont text-[14px] font-[400] leading-[20px] mt-[32px]">Min</h1>
        <h1 className="buyerFonts text-[16px] font-[400] leading-[20px] bg-white rounded p-[12px] my-[10px]">$ 280k</h1>
        <h1 className="specialFont text-[14px] font-[400] leading-[20px]">Max</h1>
        <h1 className="buyerFonts text-[16px] font-[400] leading-[20px] bg-white rounded p-[12px] my-[10px]">$ 305k</h1>
        <div className="flex items-center justify-between mt-[20px]">
            <div className="flex flex-col items-center">
                <div className="bg-[#E61] w-[24px] h-[24px] rounded-full"></div>
                <h1 className="buyerFonts text-[16px] font-[400] leading-[20px] my-[10px]">$ 280k</h1>
            </div>
            <div className="flex flex-col items-center">
                <div className="bg-[#E61] w-[24px] h-[24px] rounded-full"></div>
                <h1 className="buyerFonts text-[16px] font-[400] leading-[20px] my-[10px]">$ 305k</h1>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <button className="items-center bg-[#0059B1] pt-[12px] pb-[12px] pl-[24px] pr-[24px] rounded text-white text-[18px] font-[600] leading-[24px]">Bid Property</button>
        </div>
      </div>
      <img className="w-[384px] h-[422px] rounded-lg object-cover" src={map} alt="" />
      </div>
    </div>
  )
}

export default ProductsData
