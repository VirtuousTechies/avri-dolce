import React from 'react'
import { About, Footer, NavBar, Ceo, KnowUs, Testimonials } from '../Components'

export default function AboutPage() {
  return (
    <section className='flex flex-col space-y-10'>
      <NavBar about={true}/>
      <About />
      <KnowUs />
      <Ceo />
      <Testimonials />
      <Footer />
    </section>
  )
}
