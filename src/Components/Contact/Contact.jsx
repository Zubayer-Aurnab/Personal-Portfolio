import emailjs from '@emailjs/browser';
import Lottie from "lottie-react";
import contact from '../../../public/contact.json';
import Title from "../Title/Title";
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ContactBtn from '../ContactBtn/ContactBtn';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ecstfoa', 'template_60frdyc', form.current, 'W3qX_l1LAwthtsZhR')
            .then((result) => {
                // console.log(result);
                if (result) {
                    // console.log(result)
                    toast.success('Email sent successfully')
                    form.current.reset()
                }
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className='mt-44'>
            <Toaster position="top-center"
                reverseOrder={false} />
            <Title text={"CONTACT ME"} />
            <div>
                <div>
                    <section className="  flex items-center  ">
                        <div className="py- px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 lg:gap-16 items-center ">
                            <div className="flex flex-col justify-center   p-1 px-10  rounded-lg opacity-95">
                                <Lottie
                                    animationData={contact}
                                />

                            </div>
                            <div>
                                <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8  rounded-lg shadow-xl  bg-gradient-to-r from-primary1 via-primary3 to-primary4">

                                    <form
                                        ref={form} onSubmit={sendEmail}
                                        className="mt-8 space-y-6" action="#">
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                            <input
                                                type="text"
                                                name="user_name"
                                                id=""
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder=" name"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input
                                                type="email"
                                                name="user_email"
                                                id="email"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="@"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Phone </label>
                                            <input
                                                type="number"
                                                name="user_phone"

                                                placeholder="Phones"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Details</label>
                                            <textarea
                                                id="message"
                                                name='message'
                                                rows="4"
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Write your thoughts here..."
                                                required
                                            ></textarea>

                                        </div>

                                        <div className='flex  justify-center   lg:space-y-0'>
                                            <ContactBtn />
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Contact;