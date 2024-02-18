import React from 'react'
import RegisterItemCard from './RegisterItemCard'
import MessageSvg from '../../public/assets/messages.svg'
import EditSvg from '../../public/assets/edit-2.svg'
import SMSTrackingSvg from '../../public/assets/sms-tracking.svg'

type Props = {}

const RegisteringMethods = (props: Props) => {
  return (
    <div className='md:flex md:justify-center md:items-center md:flex-col md:mb-6'>
        <p className='text-center'>Three steps, three minutes.</p>

            {/* Title Caption */}
            <h1 className='text-5xl font-medium py-3  text-gray-500'>Everything should be this easy.</h1>

            {/* Register Item Cards */}
        <div className='grid md:grid-cols-3 gap-8 md:my-3  mx-auto  '> 
            <RegisterItemCard title='Answer questions' color='#58BF52' src={MessageSvg} msg='' />
            <RegisterItemCard title='Select a quote' color='#FF791A' src={SMSTrackingSvg} msg=''/>
            <RegisterItemCard title='Get registered' color='#3741B5' src={EditSvg} msg=''/>

        </div>
    </div>
  )
}

export default RegisteringMethods