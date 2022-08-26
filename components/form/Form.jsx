import React from 'react';
import Button from '../ui/button/Button';

function Form() {
  return (
    <div className="bg-white sm:items-center sm:mb-40 flex-[2] sm:flex-[3] flex mt-40 px-8 sm:mx-auto sm:ml-10">
      <div className="flex-grow">
        <form className="space-y-10 max-w-[350px] mx-auto">
          <div className="flex flex-col gap-4 w-full">
            <label htmlFor="name" className="uppercase text-gray-700 text-sm">
              CardHolder Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="e.g Jane Appleseed"
              className="outline-none border focus:shadow-xl shadow p-2 flex-1 sm:mr-9 rounded-lg pl-2"
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <label htmlFor="name" className="uppercase text-gray-700 text-sm">
              Card Number
            </label>
            <input
              type="number"
              id="number"
              placeholder="e.g  1234 5678 9123 0000"
              className="outline-none border focus:shadow-xl shadow sm:mr-9 p-2 flex-1 rounded-lg pl-2"
            />
          </div>
          <div className="flex items-center justify-between sm:-ml-5sm:justify-center w-full space-x-8 overflow-x-scroll scrollbar-hide">
            <div className=' '>
            <label  htmlFor="name" className="uppercase text-gray-700 text-sm">exp. date (mm/yy)</label>
            <div className="flex items-center gap-4 mt-3 ">
              <div className="flex flex-col gap-2 w-full">
                <input
                  type="text"
                  id="month"
                  placeholder="MM"
                  className="outline-none border p-2 w-14 rounded-lg focus:shadow-xl shadow text-center"
                />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <input
                  type="text"
                  id="year"
                  placeholder="YY"
                  className="outline-none border p-2 w-14 rounded-lg focus:shadow-xl shadow text-center"
                />
              </div>
              </div>
              </div>
            <div className="flex flex-col gap-4 w-20 sm:w-40">
              <label htmlFor="name" className="uppercase text-gray-700 text-sm">
                cvc
              </label>
              <input
                type="text"
                id="month"
                placeholder="e.g. 123"
                className="outline-none border p-2 rounded-lg pl-2 focus:shadow-xl sm:mr-9 shadow flex-1"
              />
            </div>
          </div>
          <Button link={""}>confirm</Button>
        </form>
      </div>
    </div>
  );
}

export default Form;
