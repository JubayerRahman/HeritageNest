import React from 'react'
import AboutBanner from '../../Components/AboutBanner/AboutBanner'
import AboutBoxs from '../../Components/AboutBoxs/AboutBoxs'
import Testimonials from '../../Components/Testimonials/Testimonials'
import BuyerSearch from '../../Components/BuyerSearch/BuyerSearch'
import LatestProducts from '../../Components/LatestProducts/LatestProducts'
import ProductSlider from '../../Components/ProductSlider/ProductSlider'
import PopularProperties from '../../Components/Popular Properties/Popular Properties'

const BuyerScreen = () => {
  return (
    <div>
      <BuyerSearch/>
      <AboutBoxs/>
      <PopularProperties/>
      <ProductSlider/>
      <LatestProducts/>
      <ProductSlider/>
      <Testimonials/>
    </div>
  )
}

export default BuyerScreen
