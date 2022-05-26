import React from 'react'
import Banners from '../components/Banners';
import ProductsCard from '../components/ProductsCard';
import CTA from '../components/CTA';
import HotProducts from '../components/HotProducts';
import Newsletter from '../components/Newsletter';

function Home() {
  return (
    <>
        <CTA/>
        <Banners/>
        <ProductsCard/>
        <CTA/>
        <HotProducts/>
        <Newsletter/>
    </>
  )
}

export default Home