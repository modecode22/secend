import React from 'react'

function NavBar() {
  return (
    <div className="h-12 bg-slate-900 flex items-center justify-between px-4">
      <div className="">
        <button className="bg-sky-500 h-8 rounded-xl w-fit   mx-1   text-white  px-5 duration-300 hover:bg-black hover:text-sky-500 font-bold text-x ">
          بحث
        </button>
        <input type="text" className="h-8 rounded-xl ml-2 p-2 bg-slate-100" />
      </div>
      <div className="text-lg font-bold text-white">قائمة طعام</div>
    </div>
  );
}

export default NavBar
