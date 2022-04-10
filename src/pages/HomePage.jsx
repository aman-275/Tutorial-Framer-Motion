import React from 'react'
import Clients from '../components/Clients'
import Content from '../components/Content'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { heroOne, heroTwo, heroThree, heroFour } from '../data/HeroData';
import { Heading } from '../globalStyle'

export default function HomePage() {
  return (
    <>
    <Hero/>
    <Features/>
    <Clients/>
			<Heading id="projects">Our Projects</Heading>
    <Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Content {...heroFour} />
      <Footer/>
    </>
  )
}
