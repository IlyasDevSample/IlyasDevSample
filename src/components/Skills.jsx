import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Skills = () => {
    return (
        <div id="skills" className='h-[100vh] text-tPrimary container mx-auto px-4'>
            <div className='  flex flex-wrap justify-center sm:justify-between items-center sm:gap-6 h-full gap-11'>
                <div className='card '>
                    <h2 className='text-2xl lg:text-4xl font-heading font-bold mb-7 capitalize'>
                        As A <span className='text-tSecondary font-semibold'>Developer</span> I Am Good Fit
                        <p className='mt-2'>With some key
                            <span className='text-tSecondary font-semibold'>
                                &nbsp;Skills.
                            </span></p>

                    </h2>
                    <p className='text-lg md:text-base lg:text-lg leading-relaxed text-gray-400'>
                        All Developers have good skills to make sure satisfied their clients, As a <span>developer</span> I am also specialised few
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
                            <a href="/pdf/CV de ILYAS ELAISSI.pdf" download
                                className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                            >
                                Download CV <i className="fas fa-download"></i>
                            </a>
                            <a href="/pdf/CV de ILYAS ELAISSI.pdf" target="_blank"
                                className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                            >
                                Open CV <i className="fas fa-file-pdf"></i>

                            </a>
                        </div>

                    </div>
                </div>
                <div className='card flex justify-center -mt-44 sm:mt-0 gap-2 sm:gap-5 flex-wrap sm:px-10 lg:px-28'>
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
                    <div className='skill bg-gray-100'>
                        <img className='w-full sm:p-2 -mt-2' src="/icons/java-icon.png" alt="java" />
                    </div>
                    <div className='skill bg-green-300'>
                        <img className='w-full p-2 sm:p-3 -mb-1' src="/icons/mongodb-icon.png" alt="mongodb" />
                    </div>
                    <div className='skill bg-red-100'>
                        <img className='w-full sm:p-2' src="/icons/git-icon.png" alt="git" />
                    </div>
                    <div className='skill bg-gray-50 cursor-pointer'>
                        <a href="" className='animate-pulse'>
                            <img className='w-full sm:p-2' src="/icons/dots-icon.png" alt="explore more" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills