import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import yellowStar from "../../assets/img/YellowStar.svg"
import whiteStar from "../../assets/img/whiteStar.svg"
import reviewer from "../../assets/img/reviewImage1.jpeg"
import reviewer2 from "../../assets/img/reviewImage2.jpeg"

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
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

const Testimonials = () => {
  return (
    <div className="my-[100px] container mx-auto">
      <h1 className="text-center text-[40px] font-[700] leading-[48px] text-[#181818]">Testimonials</h1>
    <Carousel
    swipeable={true}
    draggable={true}
    showDots={true}
    responsive={responsive}
    infinite={true}
    autoPlay={true }
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px">
        <div className="bg-[#ECF5FF] p-[32px] flex flex-col gap-4 items-center m-[20px]">
            <div className="stars flex gap-1 items-center">
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={whiteStar} alt="" />
            </div>
            <p className="text-[#818181] text-[18px] leading-[23px] text-center">
            "The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for."
            </p>
            <div className="flex flex-col items-center mt-[35px]">
                <img className="w-[48px] h-[48px] rounded-full object-cover" src={reviewer} alt="" />
                <h1 className="text-center text-[20px] font-[600] leading-[28px] text-[#111827]">Tony Stark</h1>
                <p className="text-[16px] leading-[22px] text-[#6B7280]">Marketing manager, XYZ</p>
            </div>
        </div>
        <div className="bg-[#ECF5FF] p-[32px] flex flex-col gap-4 items-center m-[20px]">
            <div className="stars flex gap-1 items-center">
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={yellowStar} alt="" />
                <img src={whiteStar} alt="" />
            </div>
            <p className="text-[#818181] text-[18px] leading-[23px] text-center">
            "The level of security provided by CypherPlay is unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace of mind I was looking for."
            </p>
            <div className="flex flex-col items-center mt-[35px]">
                <img className="w-[48px] h-[48px] rounded-full object-cover" src={reviewer2} alt="" />
                <h1 className="text-center text-[20px] font-[600] leading-[28px] text-[#111827]">Tony Stark</h1>
                <p className="text-[16px] leading-[22px] text-[#6B7280]">Marketing manager, XYZ</p>
            </div>
        </div>
    </Carousel>
    </div>
  )
}

export default Testimonials
