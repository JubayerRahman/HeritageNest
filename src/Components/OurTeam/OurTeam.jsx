import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../assets/img/teamImage1.jpeg"
import img2 from "../../assets/img/teamImage2.jpeg"
import img3 from "../../assets/img/teamImage3.jpeg"

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const OurTeam = () => {
  return (
    <div className='container mx-auto'>
      <div className="title flex gap-3 items-center">
                    <div className="divider bg-[#E61] rounded-[4px] h-[4px] w-[50px]"></div>
                    <h1 className=" text-[18px] text-[#E61] font-[600] leading-[21.6px]">Our Team</h1>
     </div>
     <h1 className='text-[40px] font-[700] leading-[48px] text-[#111827] mb-[50px]'>Discover the Faces Behind Our Success</h1>

     <Carousel
  swipeable={true}
  draggable={true}
  responsive={responsive}
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
    <img className="w-[384px] h-[417px] object-cover" src={img1} alt="" />
    <img className="w-[384px] h-[417px] object-cover" src={img2} alt="" />
    <img className="w-[384px] h-[417px] object-cover" src={img3} alt="" />
    <img className="w-[384px] h-[417px] object-cover" src={img1} alt="" />
    <img className="w-[384px] h-[417px] object-cover" src={img2} alt="" />
    <img className="w-[384px] h-[417px] object-cover" src={img3} alt="" />
</Carousel>
    </div>
  )
}

export default OurTeam
