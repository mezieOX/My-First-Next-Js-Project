import React from 'react';
import Button from '../ui/button/Button';
import { useForm } from 'react-hook-form';

function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ name, cardNumber, expDate, year, cvc }) => {};

  return (
    <div className="bg-white sm:items-center sm:mb-40 flex-[2] sm:flex-[3] flex mt-40 px-8 sm:mx-auto sm:ml-10">
      <div className="flex-grow">
        <form
          className="space-y-10 max-w-[350px] mx-auto"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="flex flex-col gap-4 w-full">
            <label htmlFor="name" className="uppercase text-gray-700 text-sm">
              CardHolder Name
            </label>
            <input
              {...register('name', { required: 'please enter your name' })}
              type="text"
              id="name"
              placeholder="e.g Jane Appleseed"
              className="outline-none border focus:shadow-xl shadow p-2 flex-1 sm:mr-9 rounded-lg pl-2"
            />
            {errors.name && (
              <div className="text-red-500">{errors.name.message}</div>
            )}
          </div>
          <div className="flex flex-col gap-4 w-full">
            <label htmlFor="name" className="uppercase text-gray-700 text-sm">
              Card Number
            </label>
            <input
              {...register('cardNumber', {
                required: 'please enter card number',
                minLength: {
                  value: 16,
                  message: 'card number is more than 20 chars',
                },
                maxLength: {
                  value: 16, message: "card number is more than 16 chars",
                }
              })}
              type="number"
              id="number"
              placeholder="e.g  1234 5678 9123 0000"
              className="outline-none border focus:shadow-xl shadow sm:mr-9 p-2 flex-1 rounded-lg pl-2"
            />
             {errors.cardNumber && (
              <div className="text-red-500">{errors.cardNumber.message}</div>
            )}
          </div>
          <div className="flex items-center justify-between sm:-ml-5sm:justify-center w-full space-x-8 overflow-x-scroll scrollbar-hide">
            <div className=" ">
              <label htmlFor="name" className="uppercase text-gray-700 text-sm">
                exp. date (mm/yy)
              </label>
              <div className="flex items-center gap-4 mt-3 ">
                <div className="flex flex-col gap-2 w-full">
                  <input
                    {...register("expDate", {
                      required: "please exp. month",
                      maxLength: {
                        value: 2,
                        message: "number is more than 4 chars",
                      }
                    })}
                    type="text"
                    id="month"
                    placeholder="MM"
                    className="outline-none border p-2 w-14 rounded-lg focus:shadow-xl shadow text-center"
                  />
                   {errors.expDate && (
              <div className="text-red-500">{errors.expDate.message}</div>
            )}
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <input
                    {...register("year", {
                      required: "please enter exp. year",
                      maxLength: {
                        value: 2,
                        message: "number is more than 5 chars",
                      }
                    })}
                    type="text"
                    id="year"
                    placeholder="YY"
                    className="outline-none border p-2 w-14 rounded-lg focus:shadow-xl shadow text-center"
                  />
                  {errors.year && (
                    <div className="text-red-500">{errors.year.message}</div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-20 sm:w-40">
              <label htmlFor="name" className="uppercase text-gray-700 text-sm">
                cvc
              </label>
              <input
                {...register("cvc", {
                  required: "please enter your card cvc",
                  maxLength: {
                    value: 2,
                    message: "number is more than 5 chars",
                  }
                })}
                type="text"
                id="month"
                placeholder="e.g. 123"
                className="outline-none border p-2 rounded-lg pl-2 focus:shadow-xl sm:mr-9 shadow flex-1"
              />
              {errors.cvc && (
                <div className="text-red-500">{errors.cvc.message}</div>
              )}
            </div>
          </div>
          <div className="">
            <input type="submit" value="confirm" className='text-white capitalize border-2 hover:bg-gray-800 active:scale-90 border-white rounded-lg font-bold font-mono px-[40%] py-3 transition duration-150 ease-out bg-gray-700 hover:shadow-xl' />
          </div>
          <div className='h-2'></div>
        </form>
      </div>
    </div>
  );
}

export default Form;
