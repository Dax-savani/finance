import React from 'react'
import Herosection from '../../components/Home/Herosection'
import ServiceProvide from '../../components/Home/ServiceProvide'
import WhyChooseUS from '../../components/Home/WhyChooseUS'
import Schemes from '../../components/Home/Schemes'
import GoldCalc from '../../components/global/GoldCalc'
import NewsMedia from '../../components/Home/NewsMedia'

const Home = () => {
  return (
      <>
      <Herosection />
      <ServiceProvide />
      <WhyChooseUS />
      <Schemes />
      <GoldCalc />
      <NewsMedia />
    </>
  )
}

export default Home