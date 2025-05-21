import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Profile from "./Profile"
import axiosInstance from "../utils/axiosInstance"
import { signOutSuccess } from "../redux/slice/userSlice"
import { useDispatch } from "react-redux"
import SearchBar from "./SearchBar"

const Navbar = ({
  searchQuery,
  setSearchQuery,
  onSearchNote,
  handleClearSearch,
}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogout = async () => {
    try {
      const response = await axiosInstance.post("/user/signout")

      if (response.data) {
        dispatch(signOutSuccess())

        navigate("/login")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery)
    }
  }

  const onClearSearch = () => {
    handleClearSearch()
    setSearchQuery("")
  }

  return (
    <div className="bg-orange-200 flex items-center justify-between px-10 py-2.5  drop-shadow shadow-slate-300 shadow-2xs sticky top-0 z-10">
      <Link to={"/"}>
        <h1 className="font-bold text-2xl sm:text-2xl flex flex-wrap">
          <span className="text-gray-500  rotate-6 animate-bounce">Trail</span>
          <span className="text-blue-800 -rotate-6 animate-bounce">Trove</span>
        </h1>
      </Link>

      <SearchBar
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value)
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />

      <Profile onLogout={onLogout} />
    </div>
  )
}

export default Navbar