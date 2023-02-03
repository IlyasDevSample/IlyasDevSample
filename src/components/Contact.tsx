import axios from 'axios'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FiSend } from 'react-icons/fi'
import { AiOutlineLoading } from 'react-icons/ai'
import { RiMailSendLine } from 'react-icons/ri'

const Contact = () => {
    const [isSending, setIsSending] = React.useState(false)

    const handleSubmit = (e) => {

        e.preventDefault()
        if (e.target[0].value.trim() && e.target[1].value.trim() && e.target[2].value.trim()) {
            setIsSending(true)

            const data = {
                name: e.target[0].value,
                email: e.target[1].value,
                message: e.target[2].value
            }
            // const URL =  'https://www.actionforms.io/e/r/ilyaselaissi'
            const URL = 'https://formspree.io/f/meqwewep'

            axios.post(URL, data)
                .then(res => {
                    setIsSending(false)
                    toast.success('Thank you for contacting me XD', {
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                    e.target[0].value = ''
                    e.target[1].value = ''
                    e.target[2].value = ''
                    
                }
                )
                .catch(err => {
                    setIsSending(false)
                    toast.error('Something went wrong', {
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                })


        }
        else {
            toast.error('Please fill all the fields', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    return (
        <div id="contact" className='h-[100vh] text-tPrimary container mx-auto px-4 flex justify-center items-center'>
            <div className='flex flex-wrap-reverse justify-between items-center gap-2 sm:gap-6'>
                <div className="card">
                    <h2 className='text-2xl lg:text-4xl font-heading font-bold mb-4 sm:mb-7 '>
                        <span className='text-tSecondary'>Contact</span> Me.
                    </h2>
                    <p className='text-base md:text-base lg:text-lg leading-relaxed text-gray-400'>
                        If you have a project that you want to get started, think you need my help with something or just fancy saying hello, then get in touch.
                    </p>
                    <form className='flex flex-col gap-5 mt-5 sm:mt-10' onSubmit={handleSubmit}>
                        <div className='relative peer'>
                            <input type="text" placeholder="What's your name?" className='contactInput peer' required />
                            <span className='line'></span>
                        </div>
                        <div className='relative peer'>
                            <input type="email" placeholder='Your email' className='contactInput peer' required />
                            <span className='line'></span>
                        </div>
                        <div className='relative peer'>
                            <input type="text" placeholder='Tel me about your project' className='contactInput peer' required />
                            <span className='line'></span>
                        </div>
                        <button
                            type='submit'
                            className="group bg-tSecondary text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl ease-in-out flex items-center justify-between w-[160px] hover:w-[175px] transition-all duration-1000 sm:mt-2 relative">
                            <p>Send</p>
                            {isSending ? <AiOutlineLoading className='animate-spin ml-2 inline-block text-2xl' /> : <FiSend className='inline-block ml-2 text-xl' />}
                            <div className="absolute group-hover:left-[107px] left-1 w-16 h-10 bg-tPrimary bg-opacity-20 rounded-xl transition-all duration-1000"></div>
                        </button>
                    </form>
                </div>
                <div className='card flex justify-center items-center'>
                    <div className='w-[250px] sm:w-[350px] lg:w-[700px]'>
                        <img src="/images/contactUs.svg" alt="services" className='w-full' />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Contact