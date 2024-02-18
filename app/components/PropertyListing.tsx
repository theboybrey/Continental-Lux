import React from 'react'
import Image from 'next/image'
import PropertyListingCard from './PropertyListingCard'

type Props = {}

const PropertyListing = (props: Props) => {
  return (
    <div className='md:flex md:justify-center md:items-center md:flex-col md:mb-16 md:h-[600px]'>
        <h2 className='text-5xl font-medium'>Featured Properties</h2>

        {/* Property Listing */}

        <PropertyListingCard/>
    </div>
  )
}

export default PropertyListing