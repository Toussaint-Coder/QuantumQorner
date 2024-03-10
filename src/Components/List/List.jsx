import React from "react"
import InfoBar from "./InfoBar"
import StudentList from "./StudentList"

const List = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-8 overflow-y-scroll p-2 scroll">
        <div className="font-bold text-lg text-violet-400">
          <h1>Registed Students</h1>
        </div>
        <div className="w-full">
          <div>
            <input
              type="text"
              placeholder="search a student"
              className="w-full rounded-lg bg-violet-100 p-2 outline outline-1 outline-violet-300"
            />
          </div>
        </div>
        <InfoBar />
        <StudentList />
      </div>
    </>
  )
}
export default List
