import React from 'react'

const HomeLoan = () => {
  return (
    <div className='w-[945px] mx-auto bg-[#ECF5FF] rounded-lg p-[32px] flex items-center gap-[32px]'>
      <div>
        <h1 className='text-[#010101] text-[28px] font-[600]'>Need a Home Loan?</h1>
        <p className='texy-[#535353] text-[16px] roboto'>Select How much Home loan you can take</p>
      </div>
      <div className='w-[65%] flex flex-col gap-3'>
        <div className='relative flex items-center'>
            <div className=" divider bg-[#8AB3DB] h-[10px] w-full rounded-[10px]"></div>
            <div className="points absolute flex items-center justify-between w-full">
                <div className="circle bg-[#0051A1] w-[17px] h-[19px] rounded-full"></div>
                <div className="line bg-[#ECF5FF] w-[1px] h-[17px]"></div>
                <div className="line bg-[#ECF5FF] w-[1px] h-[17px]"></div>
                <div className="line bg-[#ECF5FF] w-[1px] h-[17px]"></div>
                <div className="line bg-[#ECF5FF] w-[1px] h-[17px]"></div>
                <div className="line bg-[#ECF5FF] w-[1px] h-[17px]"></div>
            </div>
        </div>
        <div className='flex items-center justify-between'>
            <h1 className='text-[16px] font-[500] buyerFonts text-[#535353]'></h1>
            <h1 className='text-[16px] font-[500] buyerFonts text-[#535353]'>$20K</h1>
            <h1 className='text-[16px] font-[500] buyerFonts text-[#535353]'>$30K</h1>
            <h1 className='text-[16px] font-[500] buyerFonts text-[#535353]'>$40K</h1>
            <h1 className='text-[16px] font-[500] buyerFonts text-[#535353]'>$50K</h1>
            <h1 className='text-[16px] font-[500] buyerFonts text-[#535353]'>$60K</h1>
        </div>
      </div>
    </div>
  )
}

export default HomeLoan
