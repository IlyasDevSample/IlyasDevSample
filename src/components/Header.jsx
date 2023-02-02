import { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { AnimatePresence, motion } from 'framer-motion'
import * as Scroll from 'react-scroll';
import About from './About';

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const [toggleHover, setToggleHover] = useState(false)


    return (
        <header id='about' className='h-[100vh] text-tPrimary relative container mx-auto'>
            <div className='flex justify-center gap-16 items-center h-[100px] text-sm bg-primary'>
                <div className="logo z-10">
                    <a href="/">
                        <h1><span className='font-bold'>Ilyas</span> Elaissi</h1>
                        <i className="fa-regular fa-hand-pointer absolute -bottom-3 -right-2 -rotate-12"></i>
                    </a>
                </div>
                <div className="lg:flex justify-between items-center hidden gap-8 -ml-28">
                    <p>Call me <span className='hover:text-tSecondary transition-colors cursor-pointer tracking-widest '>(+212) 6 34029817</span></p>
                    <span className='select-none text-lg'>/</span>
                    <p>
                        <a href="mailto:elaissiilyas@gmail.com " className='hover:text-tSecondary transition-colors '>
                            elaissiilyas@gmail.com
                        </a>
                    </p>
                </div>
                <div className="flex justify-between items-center gap-14">
                    <a href="#" className='text-base animate-bounce hidden md:flex gap-3 items-center justify-center hover:text-tSecondary transition-colors font-semibold'>
                        Download CV
                        <i className="fa-solid fa-download"></i>
                    </a>
                    <div className='flex justify-between items-center gap-14 fixed right-10 z-40'>
                        <p className=' font-semibold text-base sm:flex items-center justify-center gap-3 hidden'>
                            <span className='hover:text-tSecondary transition-colors cursor-pointer '>
                                Let's Chats
                            </span>
                            <button
                                className='bg-tPrimary w-[34px] h-[34px] rounded-sm'
                            >
                                <i className="fa-brands fa-rocketchat text-primary"></i>
                            </button>
                        </p>

                        <div className="text-2xl cursor-pointer">
                            <button onClick={() => setToggle(!toggle)} 
                                className='flex flex-col justify-center items-end gap-[5px] max-w-6 w-6 '>

                                <motion.span
                                    initial={{ width: '100%' }}
                                    animate={{ width: toggle ? '0%' : '100%' }}
                                    exit={{ width: '100%' }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                    className={`block w-6 h-[3px] rounded-sm bg-tPrimary transition-all duration-300 ease-in-out`}></motion.span>
                                <motion.span
                                    initial={{ width: '65%' }}
                                    animate={{ width: toggle ? '0%' : '65%' }}
                                    exit={{ width: '65%' }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                    className={`block w-6 h-[3px] rounded-sm bg-tPrimary transition-all duration-300 ease-in-out`}></motion.span>
                                <motion.span
                                    initial={{ width: '100%' }}
                                    animate={{ width: toggle ? '0%' : '100%' }}
                                    exit={{ width: '100%' }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                    className={`block w-6 h-[3px] rounded-sm bg-tPrimary transition-all duration-300 ease-in-out`}></motion.span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {toggle && (
                    <nav
                        className='top-0 right-0 bottom-0 left-0 fixed  flex justify-end z-50'
                    >

                        <motion.div
                            initial={{ background: 'rgba(0,0,0,0)' }}
                            animate={{ background: 'rgba(0,0,0,0.65)' }}
                            exit={{ background: 'rgba(0,0,0,0)' }}
                            transition={{ duration: 0.4 }}

                            className='bg-tNav w-full relative'
                            onClick={() => setToggle(!toggle)}
                        >
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                onClick={(e) => e.stopPropagation()}
                                className='bg-tPrimary w-full sm:w-[400px] flex flex-col justify-start items-end p-16 absolute top-0 right-0 bottom-0'>

                                <div className='z-10 text-primary cursor-pointer -mt-6 -mr-6 relative'>
                                    <button
                                        onClick={() => setToggle(!toggle)}
                                        className='absolute right-0 -top-2 cursor-pointer  w-7 h-7 '
                                    >
                                        <motion.span
                                            initial={{ rotate: '0deg' }}
                                            animate={{ rotate: '-45deg' }}
                                            exit={{ rotate: '0deg' }}
                                            transition={{ duration: 0.3, ease: 'easeOut' }}
                                            className='rotate-[135deg] absolute right-0 bottom-3  block w-8 h-[3px] rounded bg-primary transition-all duration-300 ease-in-out'></motion.span>
                                        <motion.span
                                            initial={{ rotate: '0deg' }}
                                            animate={{ rotate: '45deg' }}
                                            exit={{ rotate: '0deg' }}
                                            transition={{ duration: 0.3, ease: 'easeOut' }}
                                            className='rotate-45 absolute right-0 bottom-3 block w-8 h-[3px] rounded bg-primary transition-all duration-300 ease-in-out'></motion.span>
                                    </button>
                                </div>

                                <motion.ul
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 40 }}
                                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
                                    

                                    className='flex flex-col items-start justify-center w-full art gap-10 pt-16'>
                                    <li>
                                        <Scroll.Link activeClass="active-link" spy={true} to='about' smooth={true} duration={500} className='nav-link' onClick={() => setToggle(!toggle)}>About<span className='text-2xl hidden point'>.</span></Scroll.Link>
                                    </li>
                                    <li>
                                        <Scroll.Link activeClass="active-link" spy={true} to='services' smooth={true} duration={500} className='nav-link' onClick={() => setToggle(!toggle)}>Services<span className='text-2xl hidden point'>.</span></Scroll.Link>
                                    </li>
                                    <li>
                                        <Scroll.Link activeClass="active-link" spy={true} to='skills' smooth={true} duration={500} className='nav-link' onClick={() => setToggle(!toggle)}>Skills<span className='text-2xl hidden point'>.</span></Scroll.Link>
                                    </li>
                                    <li>
                                        <Scroll.Link activeClass="active-link" spy={true} to='projects' smooth={true} duration={500} className='nav-link' onClick={() => setToggle(!toggle)}>Projects<span className='text-2xl hidden point'>.</span></Scroll.Link>
                                    </li>
                                    <li>
                                        <Scroll.Link activeClass="active-link" spy={true} to='contact' smooth={true} duration={500} className='nav-link' onClick={() => setToggle(!toggle)}>Contact<span className='text-2xl hidden point'>.</span></Scroll.Link>
                                    </li>
                                </motion.ul>
                            </motion.div>

                        </motion.div>


                    </nav>
                )}

            </AnimatePresence>
            <section className='h-[calc(100%-100px)]'>
                    <About />
            </section>
        </header>
    )
}

export default Header