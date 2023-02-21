import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MdOutlineLoop } from 'react-icons/md'

const Project = () => {
    const { projectName } = useParams()
    const [URL , setURL] = React.useState('')
    const navigate = useNavigate();


    useEffect(() => {
        if (projectName === 'tikitaka') {
            window.location.href = 'https://tikitaka.ilyaselaissi.me'
            setURL('https://tikitaka.ilyaselaissi.me')
        }
        else if (projectName === 'travelcompanion') {
            window.location.href = 'https://ilyasdevsample.github.io/travel_companion'
            setURL('https://ilyasdevsample.github.io/travel_companion')
        }
        else{
            navigate('/')

        }
    }, [projectName])

    return (
        <div className='h-screen text-tPrimary flex flex-col justify-center items-center'>
            <h1 className='text-base md:text-4xl font-bold text-center flex justify-center items-center gap-2'>
                Redirecting to <span className='text-tSecondary'>{projectName}</span>

                <div class="typing flex justify-center items-center mt-2">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </h1>
            <div
                className='flex flex-col justify-center items-center gap-2 mt-4'
            >

                <p className='flex gap-2 text-sm md:text-base flex-wrap'>
                    If you are not redirected automatically, please 
                    <a href={URL}
                        className='text-tSecondary underline'
                    >
                        Click here.
                    </a>
                </p>
                <MdOutlineLoop className='text-4xl text-tSecondary animate-spin' />

            </div>

        </div >
    )
}

export default Project