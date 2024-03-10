import React, {useEffect, useState} from "react"

const Form = () => {
  const [fname, setFname] = useState(null)
  const [lname, setLname] = useState(null)
  const [age, setAge] = useState(null)
  const [gender, setGender] = useState(null)
  const [grade, setGrade] = useState(null)
  const [departement, setDepartement] = useState(null)

  const Form = new FormData()
  Form.append("fname", fname)
  Form.append("lname", lname)
  Form.append("age", age)
  Form.append("gender", gender)
  Form.append("grade", grade)
  Form.append("departement", departement)

  const handlerRegister = () => {
    fetch("http://localhost/PHPserver/server.php", {
      method: "POST",
      body: Form,
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
      })
      .catch((e) => console.log(e.message))
  }
  return (
    <>
      <form className="w-full">
        <div className="w-full flex flex-col gap-8">
          <div className="font-bold text-lg text-violet-400">
            <h1>Register a New Student</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-grow  flex flex-col gap-2">
              <label htmlFor="fname" className="text-small text-black/50">
                Student Firstname
              </label>
              <input
                type="text"
                id="fname"
                className="w-full text-sm outline outline-1 outline-violet-300 px-1 rounded-lg py-2"
                placeholder="Firstname"
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div className="flex-grow  flex flex-col gap-2">
              <label htmlFor="fname" className="text-small text-black/50">
                Student Lastname
              </label>
              <input
                type="text"
                className="w-full text-sm outline outline-1 outline-violet-300 px-1 rounded-lg py-2"
                onChange={(e) => setLname(e.target.value)}
                placeholder="Lastname"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-grow  flex flex-col gap-2">
              <label htmlFor="fname" className="text-small text-black/50">
                Student Gender
              </label>
              <select
                type="text"
                className="w-full text-sm outline outline-1 outline-violet-300 px-1 rounded-lg py-2"
                placeholder="Gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
            <div className="flex-grow  flex flex-col gap-2">
              <label htmlFor="fname" className="text-small text-black/50">
                Student Age
              </label>
              <input
                type="text"
                className="w-full text-sm outline outline-1 outline-violet-300 px-1 rounded-lg py-2"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-grow  flex flex-col gap-2">
              <label htmlFor="fname" className="text-small text-black/50">
                Student Grade
              </label>
              <input
                type="text"
                className="w-full text-sm outline outline-1 outline-violet-300 px-1 rounded-lg py-2"
                placeholder="Grade"
                onChange={(e) => setGrade(e.target.value)}
              />
            </div>
            <div className="flex-grow  flex flex-col gap-2">
              <label htmlFor="fname" className="text-small text-black/50">
                Student Departement
              </label>
              <input
                type="text"
                className="w-full text-sm outline outline-1 outline-violet-300 px-1 rounded-lg py-2"
                placeholder="Departement"
                onChange={(e) => setDepartement(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              className="px-3 py-2 bg-violet-500 rounded-lg text-sm text-white"
              onClick={handlerRegister}
              type="button"
            >
              Register student
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
export default Form
