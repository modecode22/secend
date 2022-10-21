import React from 'react'

function Output() {
  return (
    <div className="my-2 flex items-center justify-center">
      <div className="text-white w-11/12 h-36 bg-slate-900 rounded-xl flex flex-row-reverse">
        <img
          src="chicken.jpg"
          className=" h-full bg-cover bg-center rounded-md"
          alt=""
        />
        <div className="flex flex-col items-end m-2 justify-between">
          <h1 className="text-xl font-bold">دجاج على الجمر</h1>
          <h2 className=" text-xl font-thin">للفطور</h2>
          <p className='mb-10'>طاب مع ال9 خطراكش لي طيبه يعرف يطيب لازم تاكله </p>
        </div>
      </div>
    </div>
  );
}

export default Output
