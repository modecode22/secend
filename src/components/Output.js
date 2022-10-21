import React from 'react'

function Output({ itemsData }) {
  return (
    <div>
      {itemsData.length >= 1 ? (
        itemsData.map((item) => {
          console.log(item.id)
          return (
            <div key={item.id} className="my-2 flex items-center justify-center">
              <div className="text-white w-11/12 h-36 bg-slate-900 rounded-xl flex flex-row-reverse">
                <img
                  src={item.image}
                  className=" h-full bg-cover bg-center rounded-md"
                  alt=""
                />
                <div className="flex flex-col items-end m-2 justify-between">
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  <h2 className=" text-xl font-thin">{item.category}</h2>
                  <p className="mb-10">{item.description} </p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h3>هذه الوجبة غير موجودة</h3>
      )}
    </div>
  );
}

export default Output
