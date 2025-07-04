import Instructors from '@/components/about/Instructors'
import Welcome from '@/components/about/Welcome'
import PageHeader from '@/components/common/PageHeader'
import Spacer from '@/components/common/Spacer'
import React from 'react'

export const metadata = {
  title: 'About Us',
   description: 'Learn more about our mission, vision, and the team behind our educational platform.'
}

const Page = () => {
  return (
    <>
    <PageHeader title="About Us" />
    <Spacer />
    <Welcome />
    <Spacer />
    <Instructors />
    <Spacer />
    </>
  )
}

export default Page