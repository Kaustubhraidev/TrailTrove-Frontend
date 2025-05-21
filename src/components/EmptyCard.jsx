import React from "react"

const EmptyCard = ({ imgSrc, message, setOpenAddEditModal }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 mx-auto p-8 bg-gray-100 rounded-lg bg-gradient-to-tl from-blue-200 via-purple-400 to-pink-300 border -rotate-3 border-black shadow-2xl shadow-cyan-200 max-w-sm">
      <div className="bg-white p-4 rounded-full shadow">
        <img src={imgSrc} alt="image" className="w-32 h-32 object-contain" />
      </div>

      <p className="text-[16px] font-semibold text-gray-800 text-center mt-6">
        {message}
      </p>

      <button
        className="mt-4 px-5 py-2 bg-amber-200 rotate-12 text-black text-sm font-medium  rounded-full shadow-md hover:bg-blue-600 transition-all"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null })
        }}
      >
        Create New
      </button>
    </div>
  )
}

export default EmptyCard