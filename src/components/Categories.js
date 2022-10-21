import React from 'react'
function Categories({ filterByCategories, allCategories }) {
  const onFilter = (cat) => {
    filterByCategories(cat);
  };
  return (
    <div className="flex justify-center items-center">
      {allCategories.length >= 1 ? (
        allCategories.map((catt) => {
          return (
            <div key={Math.random()} className="flex justify-center items-center">
              <button
                onClick={() => onFilter(catt)}
                className="mx-1 my-4 bg-sky-500 text-white rounded-lg h-10 w-fitt px-5 duration-300 hover:bg-black hover:text-sky-500 font-bold text-x "
              >
                {catt}
              </button>
            </div>
          );
        })
      ) : (
        <h1>No Categories</h1>
      )}
    </div>
  );
}

export default Categories
