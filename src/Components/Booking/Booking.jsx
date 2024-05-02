import Book from "../../assets/img/book.jpeg"

const Booking = () => {
  return (
    <div className='container mx-auto my-[100px] flex gap-[80px]'>
      <div className="w-[60%]">
            <div className="title flex gap-3 items-center ">
                    <div className="divider bg-[#E61] rounded-[4px] h-[4px] w-[50px]"></div>
                    <h1 className=" text-[18px] text-[#E61] font-[600] leading-[21.6px]">Meet the Team For Book Consultation</h1>
            </div>
            <h1 className='text-[40px] font-[600] leading-[48px] mt-[16px]'>Meet the stewards of your heritage journey</h1>
            <p  className='text-[16px] font-[500] leading-[24px] mt-[24px]'>each member an embodiment of expertise and warmth, dedicated to guiding you home, every step of the way.</p>
            <button className='text-[white] text-[18px] font-[600] leading-[21px] bg-[#0059B1] p-[16px] mt-[48px]'>Book Consultation Now</button>
      </div>
      <img className="w-[386px]" src={Book} alt="" />
    </div>
  )
}

export default Booking
