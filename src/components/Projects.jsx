import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Projects = () => {

    return (
        <div id="projects" className='h-[100vh] cbg text-tPrimary container mx-auto px-4 flex flex-col items-center justify-center'>
            <h2 className='text-2xl lg:text-4xl font-heading font-bold mb-16 capitalize text-center'>
                Latest <span className='text-tSecondary'>Projects</span>
            </h2>
            <div className='w-full md:w-[630px] lg:w-[1000px]'>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={
                        {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}>
                    <SwiperSlide className='flex justify-center'>
                        <div className='project-card'>
                            <div>
                                <div className='relative '>
                                    <a href="https://tikitaka-iota.vercel.app/" target='_blank'><img src="images/tikitaka.png" className='w-full h-[150px] rounded-t-lg
                            object-cover object-center
                            ' alt="Project Image" />
                                    </a>
                                    <span className='absolute bottom-0 right-1/2 
                            transform translate-x-1/2 bg-gray-100 text-primary rounded-t-lg px-2 py-1 text-xs font-semibold'>Web App</span>
                                </div>
                                <div className='mt-4'>
                                    <h3 className='text-2xl font-extrabold mb-2 capitalize'>TIKI TAKA</h3>
                                    <p className='text-sm mb-2'>
                                    This is a social media app similar to 'TikTok' that allows users to create an account, login, and post short videos. Users can also like and comment . . .
                                    </p>

                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <a href="https://github.com/IlyasDevSample/social_media_app" target='_blank' className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">View Code</a>
                                <a href="https://tikitaka-iota.vercel.app/" target='_blank' className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-0 mb-2">View Project</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center'>
                        <div className='project-card'>
                            <div>
                                <div className='relative '>
                                    <a href="https://ilyasdevsample.github.io/travel_companion/" target='_blank'><img src="images/travelCompanionImage.png" className='w-full h-[150px] rounded-t-lg
                            object-cover object-center
                            ' alt="Project Image" />
                                    </a>
                                    <span className='absolute bottom-0 right-1/2 
                            transform translate-x-1/2 bg-gray-100 text-primary rounded-t-lg px-2 py-1 text-xs font-semibold'>Web App</span>
                                </div>
                                <div className='mt-4'>
                                    <h3 className='text-2xl font-extrabold mb-2 capitalize'>Travel Companion</h3>
                                    <p className='text-sm mb-2'>
                                    Travel Companion is an application that accompanies travelers It provides them with restaurants, hotels and attractions around them.
                                    </p>

                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <a href="https://github.com/IlyasDevSample/travel_companion" target='_blank' className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">View Code</a>
                                <a href="https://ilyasdevsample.github.io/travel_companion/" target='_blank' className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-0 mb-2">View Project</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center'>
                        <div className='project-card'>
                            <div>
                                <div className='relative '>
                                    <a href="https://ilyasdevsample.github.io/ArtistPortfolio/" target='_blank'><img src="images/artistportfolio.png" className='w-full h-[150px] rounded-t-lg
                            object-cover object-center
                            ' alt="Project Image" />
                                    </a>
                                    <span className='absolute bottom-0 right-1/2 
                            transform translate-x-1/2 bg-gray-100 text-primary rounded-t-lg px-2 py-1 text-xs font-semibold'>
                                        Theme
                                    </span>
                                </div>
                                <div className='mt-4'>
                                    <h3 className='text-2xl font-extrabold mb-2 capitalize'>Artist Portfolio</h3>
                                    <p className='text-sm mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>

                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <a href="https://github.com/IlyasDevSample/ArtistPortfolio" target='_blank' className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">View Code</a>
                                <a href="https://ilyasdevsample.github.io/ArtistPortfolio/" target='_blank' className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-0 mb-2">View Project</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center'>
                        <div className='project-card'>
                            <div>
                                <div className='relative '>
                                    <a href="https://ilyasdevsample.github.io/bootstrapPortfolio/" target='_blank'><img src="images/bootstrapportfolio.png" className='w-full h-[150px] rounded-t-lg
                            object-cover object-center
                            ' alt="Project Image" />
                                    </a>
                                    <span className='absolute bottom-0 right-1/2 transform translate-x-1/2 bg-gray-100 text-primary rounded-t-lg px-2 py-1 text-xs font-semibold'>
                                        Theme
                                    </span>
                                </div>
                                <div className='mt-4'>
                                    <h3 className='text-2xl font-extrabold mb-2 capitalize'>Bootstrap Portfolio</h3>
                                    <p className='text-sm mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>

                                </div>
                            </div>
                            <div className='flex justify-between items-center'>
                                <a href="https://github.com/IlyasDevSample/bootstrapPortfolio" target='_blank' className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">View Code</a>
                                <a href="https://ilyasdevsample.github.io/bootstrapPortfolio/" target='_blank' className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-0 mb-2">View Project</a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Projects