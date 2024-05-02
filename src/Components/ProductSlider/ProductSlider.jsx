import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// images
import Produt1 from "../../assets/img/product1.jpeg"
import Produt2 from "../../assets/img/product2.jpeg"
import Produt3 from "../../assets/img/product3.jpeg"
import GalleryIcon from "../../assets/img/Gallery.svg"
import LocationIcon from "../../assets/img/fi-bs-marker.png"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ProductSlider = () => {
  return (
    <div className='container mx-auto my-[50px]'>
      <Carousel
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div className="mx-[16px]">
    <div className="relative">
        <img className="w-full h-[200px] object-cover" src={Produt1} alt="" />
        <div className="flex gap-2 p-[4px] bg-[#FDF0E7] rounded w-fit absolute bottom-[16px] left-4">
            <img src={GalleryIcon} alt="" />
            <p className="text-[#101010] text-[14px] font-[600] leading-[20px] buyerFonts">20</p>
        </div>
    </div>
        <div className="bg-[#F9FAFB] p-[16px]">
            <div className="flex items-center justify-between">
                <h1 className="specialFont text-[14px] leading-[16px] text-[#00254A] bg-[#C5E2FF] p-[8px] rounded">Apartment</h1>
                <div className="flex gap-2 items-center">
                    <div className="squair w-2 h-2 bg-[#E61]"></div>
                    <h1 className="text-[16px] font-[500] leading-6">Ready to Move</h1>
                </div>
            </div>
            <h1 className="text-[#111827] text-[20px] font-[600] leading-8">SunnySlope Suites</h1>
            <div className="flex gap-2 items-center">
                <img src={LocationIcon} alt="" />
                <h1 className="specialFont text-[#6B7280] text-[16px] leading-[24px]">Meadowshire Park, Greenfield, USA</h1>
            </div>
            <h1 className="text-[#111827] text-[24px] mt-[24px] font-[600] leading-7">$ 250000</h1>
    </div>
  </div>
  <div className="mx-[16px]">
    <div className="relative">
        <img className="w-full h-[200px] object-cover" src={Produt2} alt="" />
        <div className="flex gap-2 p-[4px] bg-[#FDF0E7] rounded w-fit absolute bottom-[16px] left-4">
            <img src={GalleryIcon} alt="" />
            <p className="text-[#101010] text-[14px] font-[600] leading-[20px] buyerFonts">20</p>
        </div>
    </div>
        <div className="bg-[#F9FAFB] p-[16px]">
            <div className="flex items-center justify-between">
                <h1 className="specialFont text-[14px] leading-[16px] text-[#00254A] bg-[#C5E2FF] p-[8px] rounded">Apartment</h1>
                <div className="flex gap-2 items-center">
                    <div className="squair w-2 h-2 bg-[#E61]"></div>
                    <h1 className="text-[16px] font-[500] leading-6">Ready to Move</h1>
                </div>
            </div>
            <h1 className="text-[#111827] text-[20px] font-[600] leading-8">SunnySlope Suites</h1>
            <div className="flex gap-2 items-center">
                <img src={LocationIcon} alt="" />
                <h1 className="specialFont text-[#6B7280] text-[16px] leading-[24px]">Meadowshire Park, Greenfield, USA</h1>
            </div>
            <h1 className="text-[#111827] text-[24px] mt-[24px] font-[600] leading-7">$ 250000</h1>
    </div>
  </div>
  <div className="mx-[16px]">
    <div className="relative">
        <img className="w-full h-[200px] object-cover" src={Produt3} alt="" />
        <div className="flex gap-2 p-[4px] bg-[#FDF0E7] rounded w-fit absolute bottom-[16px] left-4">
            <img src={GalleryIcon} alt="" />
            <p className="text-[#101010] text-[14px] font-[600] leading-[20px] buyerFonts">20</p>
        </div>
    </div>
        <div className="bg-[#F9FAFB] p-[16px]">
            <div className="flex items-center justify-between">
                <h1 className="specialFont text-[14px] leading-[16px] text-[#00254A] bg-[#C5E2FF] p-[8px] rounded">Apartment</h1>
                <div className="flex gap-2 items-center">
                    <div className="squair w-2 h-2 bg-[#E61]"></div>
                    <h1 className="text-[16px] font-[500] leading-6">Ready to Move</h1>
                </div>
            </div>
            <h1 className="text-[#111827] text-[20px] font-[600] leading-8">SunnySlope Suites</h1>
            <div className="flex gap-2 items-center">
                <img src={LocationIcon} alt="" />
                <h1 className="specialFont text-[#6B7280] text-[16px] leading-[24px]">Meadowshire Park, Greenfield, USA</h1>
            </div>
            <h1 className="text-[#111827] text-[24px] mt-[24px] font-[600] leading-7">$ 250000</h1>
    </div>
  </div>
</Carousel>
    </div>
  )
}

export default ProductSlider
