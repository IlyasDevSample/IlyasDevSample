import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const cvSRC = '/pdf/CV de ILYAS ELAISSI.pdf'

const Skills = () => {
    return (
        <div id="skills" className='min-h-[100vh] text-tPrimary container mx-auto px-4 flex items-center'>
            <div className='flex flex-wrap justify-center sm:justify-between items-center sm:gap-6 h-full gap-20'>
                <div className='card '>
                    <h2 className='text-2xl lg:text-4xl font-heading font-bold mb-7 capitalize'>
                        As A <span className='text-tSecondary font-semibold'>Developer</span> I Am Good Fit
                        <p className='mt-2'>With some key
                            <span className='text-tSecondary font-semibold'>
                                &nbsp;Skills.
                            </span></p>

                    </h2>
                    <p className='text-lg md:text-base lg:text-lg leading-relaxed text-gray-400'>
                        All Developers have good skills to make sure they satisfy their clients, As a developer, I am also specialized in a few
                        <span className='text-tSecondary font-semibold'>
                            &nbsp;Skills.
                        </span>
                    </p>
                    <div>
                        <div className="flex items-center justify-start gap-8 text-2xl text-gray-200 mt-8 ">
                            <a className="hover:text-tSecondary transition-colors" href="https://www.instagram.com/ilias_iit" target="_blank" rel="noreferrer">
                                <BsInstagram />
                            </a>
                            <a className="hover:text-tSecondary transition-colors" href="https://github.com/IlyasDevSample" target="_blank" rel="noreferrer">
                                <BsGithub />
                            </a>
                            <a className="hover:text-tSecondary transition-colors" href="https://www.linkedin.com/in/ilyaselaissi" target="_blank" rel="noreferrer">
                                <BsLinkedin />
                            </a>
                        </div>
                        <div className='mt-8'>
                            <a href={cvSRC} download
                                className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                            >
                                Download CV <i className="fas fa-download"></i>
                            </a>
                            <a href={cvSRC} target="_blank"
                                className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                            >
                                View CV <i className="fas fa-file-pdf"></i>

                            </a>
                        </div>

                    </div>
                </div>
                {/* className='card md:pl-5 flex justify-center md:justify-start sm:mt-0 gap-2 sm:gap-4 xl:gap-5 flex-wrap lg:pl-10 xl:pl-28' */}
                <div className='card lg:pr-10 md:pl-5 flex justify-center md:justify-start lg:justify-end sm:mt-0 gap-2 sm:gap-4 xl:gap-5 flex-wrap lg:pl-10 xl:pl-28'>
                    <div className='skill bg-blue-50'>
                        <img className='w-full' src="/icons/react.png" alt="reactJs" />
                    </div>
                    <div className='skill bg-white'>
                        <img className='w-full' src="/icons/nextjs-icon.png" alt="nextJs" />
                    </div>
                    <div className='skill bg-blue-100'>
                        <img className='w-full sm:p-2 -ml-2' src="/icons/flutter-icon.png" alt="flutter" />
                    </div>
                    <div className='skill bg-green-100'>
                        <img className='w-full sm:p-2' src="/icons/node-js-icon.png" alt="nodeJs" />
                    </div>
                    <div className='skill bg-blue-50'>
                        <img className='w-full sm:p-2' src="/icons/tailwind-css-icon.png" alt="tailwind" />
                    </div>
                    <div className='skill bg-red-50'>
                        <img className='w-full sm:p-2' src="/icons/html-icon.png" alt="html" />
                    </div>
                    <div className='skill bg-rose-100'>
                        <img className='w-full sm:p-2' src="/icons/graphql-icon.png" alt="graphql" />
                    </div>
                    <div className='skill bg-blue-300'>
                        <img className='w-full sm:p-2' src="/icons/typescript-icon.png" alt="typescript" />
                    </div>
                    <div className='skill bg-purple-100'>
                        <img className='w-full sm:p-2' src="/icons/redux.svg" alt="redux" />
                    </div>
                    <div className='skill bg-gray-100'>
                        <img className='w-full sm:p-2 -mt-2' src="/icons/java-icon.png" alt="java" />
                    </div>
                    <div className='skill bg-purple-200'>
                        <img className='w-full sm:p-2' src="/icons/c--4.svg" alt="csharp" />
                    </div>
                    <div className='skill bg-green-300'>
                        <img className='w-full p-2 sm:p-3 -mb-1' src="/icons/mongodb-icon.png" alt="mongodb" />
                    </div>
                    <div className='skill bg-green-100'>
                        <img className='w-full sm:p-2' src="/icons/spring-3.svg" alt="spring-boot" />
                    </div>
                    <div className='skill bg-red-100'>
                        <img className='w-full sm:p-2' src="/icons/git-icon.png" alt="git" />
                    </div>
                    <div className='skill bg-gray-50 cursor-pointer'>
                        <a href={cvSRC} target='_blank' className='animate-pulse'>
                            <img className='w-full sm:p-2' src="/icons/dots-icon.png" alt="explore more" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills