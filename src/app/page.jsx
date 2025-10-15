import AboutOne from '@/components/sections/about/aboutOne'
import Brand from '@/components/sections/brands/brand'
import Features from '@/components/sections/features/features'
import HeroOne from '@/components/sections/heros/heroOne'
import PriceOne from '@/components/sections/pricing/priceOne'
import TestimonialOne from '@/components/sections/testimonial/testimonialOne'
import React from 'react'

const Home = () => {
    return (
        <>
            <HeroOne />
            <Features />
            <AboutOne />
            <Brand className={"pb-100"}/>
            <TestimonialOne />
            <PriceOne isVideoAnimationShow={true}/>
        </>
    )
}

export default Home