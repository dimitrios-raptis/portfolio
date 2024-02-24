'use client';

import { useRef, useState } from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);


  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_email: "",
      user_name: "",
      message: ""
    },
  });
  // const onSubmit = (data) => console.log(data)
  const form = useRef<HTMLFormElement>(null);

  const onSubmit = () => {
    setSubmitSuccess(false);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current!, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitSuccess(true);
          reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSubmitSuccess(false);
        },
      );
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} ref={form}>
        <div className="relative z-0 w-full mb-8 group">
          <Controller
            name="user_email"
            control={control}
            render={({ field }) => {
              // sending integer instead of string.
              return (
                <>
                  <input {...field} type="email" name="user_email" id="user_email" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:text-gray-900 peer" placeholder=" " required />
                  <label htmlFor="user_email" className="peer-focus:font-medium absolute text-xl text-gray-700 duration-300 transform -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 tl:peer-focus:left-auto  peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9">Email address</label>
                </>
              );
            }}
            rules={{
              required: { value: true, message: "Required field" },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
            }}
          />
          <ErrorMessage render={({ message }) => <p className="text-red-500 mt-1"><b> {message} </b></p>} errors={errors} name="user_email" />


        </div>
        <div className="relative z-0 w-full mb-8 group">
          <Controller
            name="user_name"
            control={control}
            render={({ field }) => {
              // sending integer instead of string.
              return (
                <>
                  <input {...field} type="text" name="user_name" id="user_name" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:text-gray-900 peer" placeholder=" " required />
                  <label htmlFor="user_name" className="peer-focus:font-medium absolute text-xl text-gray-700  duration-300 transform -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9">Name</label>
                </>
              );
            }}
            rules={{
              required: { value: true, message: "Required field" },
              minLength: {
                value: 6,
                message: "You need to write more than 6 characters",
              },
            }}
          />
          <ErrorMessage render={({ message }) => <p className="text-red-500 mt-1"><b> {message} </b></p>} errors={errors} name="user_name" />
        </div>

        <div className="relative z-0 w-full mb-8 group">
          <Controller
            name="message"
            control={control}
            render={({ field }) => {
              // sending integer instead of string.
              return (
                <>
                  <textarea {...field} name="message" id="message" className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:text-gray-900 peer" placeholder=" " required />
                  <label htmlFor="message" className="peer-focus:font-medium absolute text-xl text-gray-700 duration-300 transform -translate-y-9 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 eer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9">Message</label>
                </>
              );
            }}
            rules={{
              required: { value: true, message: "Required field" },
              minLength: { value: 50, message: "You need to write more than 50 characters" },

            }}
          />
          <ErrorMessage render={({ message }) => <p className="text-red-500 mt-1"><b> {message} </b></p>} errors={errors} name="message" />

        </div>

        <button type="submit" className="text-xl hover:bg-gray-800 transition-all hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Submit</button>
      </form >
      {submitSuccess && (
        <p className='text-green-500 text-xl inline-block border-green-500 border-2 p-2 mt-7 bg-black bg-opacity-60'>Your message was sent successfully!</p>
      )}
    </>
  );
};

export default ContactForm;