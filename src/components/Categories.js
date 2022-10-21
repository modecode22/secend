import React from 'react'

function Categories() {
  return (
    <div className="flex justify-center items-center">
      <button className='mx-1 my-4 bg-sky-500 text-white rounded-lg h-10 w-fitt px-5 duration-300 hover:bg-black hover:text-sky-500 font-bold text-x '>الكل</button>
      <button className='mx-1 my-4 bg-sky-500 text-white rounded-lg h-10 w-fitt px-5 duration-300 hover:bg-black hover:text-sky-500 font-bold text-x '>قطور الصباح</button>
      <button className='mx-1 my-4 bg-sky-500 text-white rounded-lg h-10 w-fitt px-5 duration-300 hover:bg-black hover:text-sky-500 font-bold text-x '>الفطور</button>
      <button className='mx-1 my-4 bg-sky-500 text-white rounded-lg h-10 w-fitt px-5 duration-300 hover:bg-black hover:text-sky-500 font-bold text-x '>العشاء</button>
    </div>
  );
}

export default Categories
