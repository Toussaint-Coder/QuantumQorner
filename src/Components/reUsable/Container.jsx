import React from "react"

const Container = ({className, children}) => {
  return <div className={`${className} mx-auto max-w-6xl p-8`}>{children}</div>
}
export default Container
