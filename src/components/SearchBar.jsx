import React from "react"
import { FaSearch } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-80 flex items-center px-4 bg-slate-800 text-white rounded-md shadow-md shadow-black/20">
      <input
        type="text"
        placeholder="Search Notes..."
        className="w-full  text-xs text-blue-100 bg-transparent py-[11px] outline-none"
        value={value}
        onChange={onChange}
      />

      {value && (
        <IoMdClose
          className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3"
          onClick={onClearSearch}
        />
      )}

      <FaSearch
        className="text-slate-400 cursor-pointer hover:text-black"
        onClick={handleSearch}
      />
    </div>
  )
}

export default SearchBar