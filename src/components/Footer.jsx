import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='min-h-[100px] bg-tSecondary flex flex-col justify-center items-center'>
            <div className="flex text-2xl justify-center items-center gap-8 text-tSecondary ">
                <a className="transition-colors bg-primary p-2 rounded-full hover:text-tPrimary" href="https://www.instagram.com/ilias_iit" target="_blank" rel="noreferrer">
                    <BsInstagram />
                </a>
                <a className="transition-colors bg-primary p-2 rounded-full hover:text-tPrimary" href="https://github.com/IlyasDevSample" target="_blank" rel="noreferrer">
                    <BsGithub />
                </a>
                <a className="transition-colors bg-primary p-2 rounded-full hover:text-tPrimary" href="https://www.linkedin.com/in/ilyaselaissi" target="_blank" rel="noreferrer">
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <p className="text-primary text-center mt-1 font-semibold">© 2023 Ilyas El Aissi</p>
            </div>
        </div>
    )
}

export default Footer