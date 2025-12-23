import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard
          id = "123"
          name = "Neura the Brainy explorer"
          topic = "Neural Network of the Brain"
          subject = "science"
          duration = {45}
          color = "#E5D0FF"
        />
        <CompanionCard
          id = "456"
          name = "Countsy the Number Wizard"
          topic = "Derivatives & Integrals"
          subject = "sMaths"
          duration = {30}
          color = "#ffda6e"
        /><CompanionCard
          id = "789"
          name = "Verba the Vocabulary Builder"
          topic = "English Literature"
          subject = "Language"
          duration = {30}
          color = "#BDE7FF"
        />
      </section>

      <section className='home-section'>
        <CompanionList/>
        <CTA/>
      </section>
    </main>
  )
}

export default Page