import React, {useEffect, useState} from "react"
import deleteIcon from "../../assets/delete.svg"
import {Link} from "react-router-dom"

const StudentList = () => {
  //http://localhost/PHPserver/ListData.php
  const [Students, setStudents] = useState(null)

  //handler delete request

  const getId = (id) => {
    const formdata = new FormData()
    formdata.append("selectedId", id)
    fetch("http://localhost/PHPserver/delete_Student.php", {
      method: "POST",
      body: formdata,
    })
      .then((data) => {
        return data.json()
      })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //handler students data

  useEffect(() => {
    fetch("http://localhost/PHPserver/ListData.php", {
      method: "GET",
    })
      .then((data) => {
        return data.json()
      })
      .then((response) => {
        setStudents(response)
      })
      .catch((err) => {
        console.log(err.message())
      })
    return () => {}
  }, [])

  console.log(Students)
  return (
    <>
      {Students.length === 0 && (
        <p className="text-center text-lg text-black/70">
          No students added yet
          <Link to="/">Add</Link>
        </p>
      )}
      {Students &&
        Students.map((Student) => (
          <div
            key={Math.random().toString()}
            className="w-full flex justify-between items-center gap-1"
          >
            <div className="w-full text-xs text-black/70 p-1 bg-violet-100 rounded-sm">
              SA{Student.id}
            </div>
            <div className="w-full text-xs text-black/70 p-1 bg-violet-100 rounded-sm">
              {Student.fname}
            </div>
            <div className="w-full text-xs text-black/70 p-1 bg-violet-100 rounded-sm">
              {Student.lname}
            </div>
            <div className="w-full text-xs text-black/70 p-1 bg-violet-100 rounded-sm">
              {Student.gender}
            </div>
            <div className="w-full text-xs text-black/70 p-1 bg-violet-100 rounded-sm">
              {Student.age}
            </div>
            <div className="w-full text-xs text-black/70 p-1 bg-violet-100 rounded-sm">
              {Student.departement}
            </div>
            <div className="w-full text-xs text-black/70 p-1 bg-violet-100 rounded-sm">
              {Student.incriptionDate.split(" ")[0]}
            </div>
            <div className="w-full text-xs text-black/70 p-1 bg-violet-100 rounded-sm">
              13
            </div>
            <div className="">
              <button
                onClick={() => {
                  getId(Student.id)
                  alert()
                }}
                className="relative z-50 bg-red-400 text-sm text-white p-1 rounded-sm cursor-pointer hover:bg-red-600"
              >
                <img src={deleteIcon} alt="icon" className="w-56" />
              </button>
            </div>
          </div>
        ))}
    </>
  )
}
export default StudentList
