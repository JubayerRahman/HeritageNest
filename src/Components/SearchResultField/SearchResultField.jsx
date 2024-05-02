import React from 'react'
import HouseBoxs from './HouseBoxs'

const SearchResultField = () => {
  return (
    <div className='container mx-auto'>
      <div className="filters flex items-start gap-8 my-[16px]">
        <h1 className='bg-[#0059B1] p-[10px] rounded buyerFonts text-[#F9FAFB] text-[18px] font-[500] leading-6'>properties (400)</h1>
        <h1 className='bg-[#ECF5FF] p-[10px] rounded buyerFonts text-[#4B5563] text-[18px] font-[500] leading-6'>New Projects (400)</h1>
        <h1 className='bg-[#ECF5FF] p-[10px] rounded buyerFonts text-[#4B5563] text-[18px] font-[500] leading-6'>Pre-launch offers</h1>
      </div>
      <h1 className='buyerFonts text-[24px] font-[500] leading-8 mb-8'>400 results for rental property</h1>
      <HouseBoxs/>
      <HouseBoxs/>
      <HouseBoxs/>
      <HouseBoxs/>
      <HouseBoxs/>
      <div className="divider w-[800px] h-[2px] rounded bg-[#959595] mb-[24px]"></div>
      <div className="filters flex items-start gap-2 my-[16px]">
        <h1 className='bg-[#0059B1] p-[10px] rounded buyerFonts text-[#F9FAFB] text-[18px] font-[500] leading-6'>01</h1>
        <h1 className='bg-[#ECF5FF] p-[10px] rounded buyerFonts text-[#4B5563] text-[18px] font-[500] leading-6'>02</h1>
        <h1 className='bg-[#ECF5FF] p-[10px] rounded buyerFonts text-[#4B5563] text-[18px] font-[500] leading-6'>Next</h1>
      </div>
    </div>
  )
}

export default SearchResultField
