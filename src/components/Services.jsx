import { BsWindowSidebar } from 'react-icons/bs'
import { GoServer } from 'react-icons/go'
import { CiMobile3 } from 'react-icons/ci'

const Services = () => {
    return (
        <div id="services" className='h-[100vh] text-tPrimary container mx-auto px-4 flex justify-center items-center'>
            <div className='flex flex-wrap justify-between items-center gap-6'>
                <div className='card flex justify-center items-center'>
                    <div className='w-[320px] sm:w-[350px] lg:w-[700px]'>
                        <img src="/images/services.svg" alt="services" className='w-full' />
                    </div>
                </div>
                <div className='card'>
                    <h2 className='text-2xl lg:text-4xl font-heading font-bold mb-7 '>What <span className='text-tSecondary'>Services</span> I Provde To
                        <span className='mt-2 block'>My Clients In Here.</span>
                    </h2>
                    <p className='text-lg md:text-base lg:text-lg leading-relaxed text-gray-400'>
                        I always want to be able to meet the goals of my clients, I value my services as a developer through my work. You may like my <span className="text-tSecondary font-semibold">
                            services.
                        </span>
                    </p>
                    <div className='flex flex-wrap lg:flex-col gap-4 lg:gap-8 mt-14'>
                        <div className='flex gap-4 '>
                            <div className='flex gap-3 items-center group'>
                                <div
                                    className='flex items-center justify-center p-2 lg:p-3 rounded-full bg-blue-400 group-hover:bg-tSecondary transition-all duration-700'>
                                    <BsWindowSidebar className='text-2xl' />
                                </div>
                                <h3
                                    className='text-lg font-semibold border-b-2 border-transparent group-hover:border-tSecondary py-2 transition-all duration-700'>
                                    Web {''}
                                    <span className="text-tSecondary font-semibold hidden lg:inline">
                                        Development
                                    </span>
                                </h3>
                            </div>

                            <div className='flex gap-3 items-center group'>
                                <div
                                    className='flex items-center justify-center p-2 lg:p-3 rounded-full bg-blue-400 group-hover:bg-tSecondary transition-all duration-700'>
                                    <CiMobile3 className='text-2xl' />
                                </div>
                                <h3
                                    className='text-lg font-semibold border-b-2 border-transparent group-hover:border-tSecondary py-2 transition-all duration-700'>
                                    Mobile {''}
                                    <span className="text-tSecondary font-semibold hidden lg:inline">
                                        Development
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <div className='flex gap-4 '>
                            <div className='flex gap-3 items-center group'>
                                <div
                                    className='flex items-center justify-center p-2 lg:p-3 rounded-full bg-blue-400 group-hover:bg-tSecondary transition-all duration-700'>
                                    <GoServer className='text-2xl' />
                                </div>
                                <h3
                                    className='text-lg font-semibold border-b-2 border-transparent group-hover:border-tSecondary py-2 transition-all duration-700'>
                                    Backend {''}
                                    <span className="text-tSecondary font-semibold hidden lg:inline">
                                        Development
                                    </span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services