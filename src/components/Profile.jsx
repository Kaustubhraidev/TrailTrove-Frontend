import React from "react"
import { useSelector } from "react-redux"
import { getInitials } from "../utils/helper"

const Profile = ({ onLogout }) => {
  const { currentUser } = useSelector((state) => state.user)

  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium animate-pulse bg-pink-200 shadow-2xl shadow-slate-600">
        {getInitials(currentUser?.username)}
      </div>

      <div className="bg-fuchsia-300 rounded-tr-4xl rounded-bl-4xl shadow-2xs shadow-slate-300 p-2">
        <p className="text-lg  font-medium">{currentUser.username || ""}

        <button className="text-sm cursor-pointer text-teal-900 m-1 underline bg-red-300 p-1 rounded-t-2xl" onClick={onLogout}>
          Logout
        </button></p>
      </div>
    </div>
  )
}

export default Profile