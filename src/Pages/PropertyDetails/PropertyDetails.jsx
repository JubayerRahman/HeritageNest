import React from 'react'
import Services from '../../Components/Services/Services'
import ProductSlider from '../../Components/ProductSlider/ProductSlider'
import OthersNearbyProperties from '../../Components/Popular Properties/OthersNearbyProperties'
import Amenities from '../../Components/Amenities/Amenities'
import ProductsData from '../../Components/ProductsData/ProductsData'

const PropertyDetails = () => {
  return (
    <div>
      <ProductsData/>
      <Amenities/>
      <Services/>
      <OthersNearbyProperties/>
      <ProductSlider/>
    </div>
  )
}

export default PropertyDetails
