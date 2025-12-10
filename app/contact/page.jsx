import BannerSection from '@/components/layout/BannerSection'
import Contact from '@/components/page/contact/contact'
import React from 'react'

function page() {
  return (
    <div>
        <div>
        <BannerSection Title="Contact Us" />
      </div>
      <div className="">
        <Contact />
      </div>
    </div>
  )
}

export default page