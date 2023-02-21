import { motion } from "framer-motion"
import { RiMailSendLine } from 'react-icons/ri'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { TypeAnimation } from 'react-type-animation'
import * as Scroll from 'react-scroll';

const About = () => {
    return (
        <div className='h-full flex justify-center items-center sm:items-center'>
            <div className="hidden social-links sm:flex flex-col justify-center items-center gap-8 text-2xl text-tPrimary">
                <a className="hover:text-tSecondary transition-colors" href="https://www.linkedin.com/in/ilyaselaissi" target="_blank" rel="noreferrer">
                    <BsLinkedin />
                </a>
                <a className="hover:text-tSecondary transition-colors" href="https://github.com/IlyasDevSample" target="_blank" rel="noreferrer">
                    <BsGithub />
                </a>
                <a className="hover:text-tSecondary transition-colors" href="https://www.instagram.com/ilias_iit" target="_blank" rel="noreferrer">
                    <BsInstagram />
                </a>
            </div>

            <div className="flex flex-wrap-reverse justify-center items-center ">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="px-4 w-full sm:w-[370px] xl:w-[670px] lg:w-[570px] md:w-[420px] flex flex-col justify-center items-start gap-3 md:gap-5 lg:pl-28">
                    <motion.h1
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="font-heading text-3xl lg:text-5xl font-extrabold leading-tight">
                        <span className="block mb-1">Hi,</span>
                        I'm {''}
                        <TypeAnimation
                            sequence={[
                                'ILYAS',
                                1000,
                                'Ilyas Elaissi',
                            ]}
                            speed={10}
                            wrapper="span"
                            className="text-tSecondary"
                        />

                    </motion.h1>

                    <motion.h2
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-xl lg:text-3xl font-extrabold leading-tight text-tPrimary">
                        <span className="text-tSecondary">I'm a</span> Full Stack Developer
                    </motion.h2>
                    <motion.p
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="text-lg leading-relaxed text-gray-400">
                        Hey, are looking for Developer to build your <span className="text-tSecondary font-semibold">Brand and grow your business?</span> let's shake hands with me.
                    </motion.p>
                    <Scroll.Link to="contact" smooth={true} duration={1000}>
                        <motion.button
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className="group bg-tSecondary text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl ease-in-out flex items-center justify-between w-[160px] hover:w-[175px] transition-all duration-1000 mt-3 lg:mt-8 relative">
                            <p>Say Hello</p>
                            <RiMailSendLine className="text-lg" />
                            <div className="absolute group-hover:left-[123px] left-1 w-12 h-12 bg-tPrimary bg-opacity-20 rounded-xl transition-all duration-1000"></div>
                        </motion.button>
                    </Scroll.Link>
                </motion.div>
                <div className="px-4 xl:w-[470px] lg:w-[400px] md:w-[300px] w-[250px] flex justify-center items-center mb-10 -mt-10 md:mt-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className='profile__pic animate-profile '>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About