import { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { AnimatePresence, motion } from 'framer-motion'
import * as Scroll from 'react-scroll';
import About from './About';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {


    return (
        <header id='about' className='h-[100vh] text-tPrimary relative container mx-auto'>
            <Navbar />
            <section className='h-[calc(100%-100px)]'>
                <About />
            </section>
        </header>
    )
}

export default Header