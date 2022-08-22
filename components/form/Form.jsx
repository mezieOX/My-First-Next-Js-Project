import React from 'react';
import Button from '../ui/button/Button';

function Form() {
  return (
    <div className="flex-[2] w-full bg-white flex justify-center items-end md:items-center  text-black md:w-80">
      <form className="md:ml-20 lg:ml-40 sm:ml-4">
        <div className="flex flex-col ">
          <label
            htmlFor="name"
            className="uppercase text-gray-700 font-bold font-mono"
          >
            cardholder name
          </label>
          <input
            className="border-[1px] border-gray-200 rounded pl-4 h-11 focus:bg-white bg:gray-100 placeholder:text-xs text-sm leading-tight outline-none appearance-none shadow focus:shadow-lg focus:border-gray-300 text-gray-800 placeholder:text-gray-400"
            type="text"
            id="name"
            placeholder="e.g Zeze Appleaseed"
            required
          />
        </div>
        <div className="flex flex-col mt-4">
          <label
            htmlFor="name"
            className="uppercase text-gray-700 font-bold font-mono"
          >
            card number
          </label>
          <input
            type="text"
            className="border-[1px] border-gray-200 rounded pl-4 h-11 focus:bg-white bg:gray-100 placeholder:text-xs text-sm leading-tight outline-none appearance-none shadow focus:shadow-lg focus:border-gray-300 text-gray-800 placeholder:text-gray-400"
            placeholder="e.g 1234 5678 9123 0000"
            required
          />
        </div>
        <div className="flex item-center gap-14">
          <div className="flex flex-col mt-4">
            <label
              htmlFor="expire-date"
              className="uppercase text-gray-700 font-bold font-mono"
            >
              exp. date (mm/yy)
            </label>
            <div className="flex gap-10">
              <input
                type="text"
                className="border-[1px] border-gray-200 rounded pl-4 h-11 focus:bg-white bg:gray-100 placeholder:text-xs text-sm w-14  placeholder:uppercase leading-tight outline-none appearance-none shadow focus:shadow-lg focus:border-gray-300 text-gray-800 placeholder:text-gray-400"
                placeholder="mm"
                required
              />
              <input
                type="text"
                className="border-[1px] border-gray-200 rounded pl-4 h-11 focus:bg-white bg:gray-100 placeholder:text-xs text-sm w-14  placeholder:uppercase leading-tight outline-none appearance-none shadow focus:shadow-lg focus:border-gray-300 text-gray-800 placeholder:text-gray-400"
                placeholder="yy"
                required
              />
            </div>
          </div>
          <div className="mt-4 flex flex-col">
            <div>
              <label
                htmlFor="name"
                className="uppercase text-gray-700 font-bold font-mono"
              >
                cvc
              </label>
            </div>
            <input
              type="text"
              placeholder="e.g. 123"
              className="border-[1px] border-gray-200 rounded pl-4 h-11 focus:bg-white bg:gray-100 placeholder:text-xs text-sm leading-tight outline-none appearance-none shadow focus:shadow-lg focus:border-gray-300 w-60 text-gray-800 placeholder:text-gray-400"
              required
            />
          </div>
        </div>
        <div className="my-10 w-full text-center">
          <Button link={'/'}>confirm</Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
