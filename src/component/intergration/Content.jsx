import React from 'react'

const Content = () => {
  return (
    <div  className='flex px-8   py-6'>
        <div className='lg:w-1/2 hidden md:flex  relative'  >
            <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/circles/circle_4.png" 
            alt="" 
            className='w-[88rem] hidden lg:flex absolute -left-[36rem]   top-36'
            />
            <img src="https://riseusercontent.com/assets/rise/assets/marketing-images/illos/airplane-moon.svg" 
            alt="" 
            className=' absolute hidden  lg:flex left-20  top-56'
            />
        </div>

        <div className='lg:w-1/2 w-full  lg:py-20  '>
            <span>
                <svg fill="none" viewBox="0 0 61 50"   className='w-14 h-14 '><g clip-path="url(#integrations-data_svg__integrations-data_svg__clip0)"><path stroke="#F16622" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.25" d="M54.1 9.3l-6.3 5.5-3-3-5.8 5.9"></path><path stroke="#F16622" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.25" d="M49.5 8.3H55v5.5"></path><path fill="#BFBFBF" d="M27.8 6.8c-3.5 0-6.3 2.8-6.3 6.3s2.8 6.3 6.3 6.3 6.3-2.8 6.3-6.3h-6.3V6.8z"></path><path fill="#FF6602" d="M29.1 5.5c3.5 0 6.3 2.8 6.3 6.3h-6.3V5.5z"></path><path fill="#BFBFBF" d="M43.5 46.8c-3.4-.8-6.1-3.5-7-6.9-4.1.1-8.4-.4-12.4-.1-.8 3.5-3.5 6.2-7 7-1.2.3-2.1 1.4-2.1 2.6v.4h30.5v-.4c.1-1.3-.7-2.4-2-2.6z"></path><path fill="#8D8D8E" d="M40.5 45.4c-1.9-1.3-3.4-3.2-3.9-5.6-4.1.1-8.4-.4-12.4-.1-.2.8-.5 1.6-.9 2.3l17.2 3.4z" opacity="0.45"></path><path stroke="#393633" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.25" d="M1.196 39.572h58.3v-38.4h-58.3v38.4z"></path><path stroke="#BFBFBF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.25" d="M16.7 5v30.8"></path><path stroke="#8D8D8E" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.25" d="M5.3 7.7h7.1"></path><path stroke="#BFBFBF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.25" d="M8.4 11.5h4m-4 3.9h4"></path><path stroke="#8D8D8E" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.25" d="M5.3 19.2h7.1"></path><path stroke="#BFBFBF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.25" d="M8.4 23h2.4m-5.5 3.9h7.1"></path><path stroke="#F16622" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.25" d="M23.2 33.6V28"></path><path stroke="#8D8D8E" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.25" d="M28.5 33.6v-4m10.5 4v-10"></path><path stroke="#F16622" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.25" d="M33.8 33.6V22.8m10.5 10.8v-6.8"></path><path stroke="#8D8D8E" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.25" d="M49.5 33.6v-2"></path><path stroke="#F16622" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.25" d="M54.8 33.6V22.8"></path></g><defs><clipPath id="integrations-data_svg__integrations-data_svg__clip0"><path fill="#fff" d="M0 0h60.6v49.8H0z"></path></clipPath></defs></svg>
            </span>
            <p className='lg:text-6xl text-4xl py-2.5 font-nunito  '>The Rise API</p>
            <p className='text-lg  py-2 '>The Rise API opens up endless integration possibilities</p>
            <div className='flex gap-12 flex-wrap lg:flex-nowrap '>
                <div className='lg:py-9 py-3'>
                    <p className='text-lg  font-semibold py-2'>Provision and manage people</p>
                    <p>Using the API, you can invite people <br /> to Rise when they’re added to <br /> another business system, such as <br />  your HRIS or CRM, or when they <br /> sign up through a custom <br /> registration page.</p>
                </div>
                <div className='lg:py-9 py-1'>
                    <p className='text-lg  font-semibold py-2'>Give easy access to training</p>
                    <p>With the Rise API, learners can <br /> easily see their training progress <br />  and quickly navigate to Rise right <br />  from within the systems they use <br />  most </p>
                </div>
            </div>
            <div className='flex gap-12  flex-wrap lg:flex-nowrap '>
                <div className='lg:py-9 py-3'>
                    <p className='text-lg  font-semibold py-2'>Manage groups</p>
                    <p>Automate group management with <br /> the Rise API. Easily add or remove <br /> users from Rise groups based on <br />  information or actions in other <br /> business systems.</p>
                </div>
                <div className='lg:py-9 py-3'>
                    <p className='text-lg  font-semibold py-2'>Track learner activity</p>
                    <p>Sync learner activity to your data <br />  warehouse and combine it with <br /> other organizational KPIs to identify  <br /> professional development <br />   opportunities, see the status of <br />  compliance training, and measure the  <br /> of training on your business.</p>
                </div>
            </div>
            <div className='flex gap-12 flex-wrap lg:flex-nowrap   '>
                <div className='lg:py-9 py-3'>
                    <p className='text-lg  font-semibold py-2'>Enroll learners in training</p>
                    <p>Using the API, you can invite people <br /> to Rise when they’re added to <br /> another business system, such as <br />  your HRIS or CRM, or when they <br /> sign up through a custom <br /> registration page.</p>
                </div>
                <div className='lg:py-9 py-3'>
                    <p className='text-lg  font-semibold py-2'>Integrate Rise with your <br /> communication tools</p>
                    <p>Using the API, you can invite people <br /> to Rise when they’re added to <br /> another business system, such as <br />  your HRIS or CRM, or when they <br /> sign up through a custom <br /> registration page.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Content