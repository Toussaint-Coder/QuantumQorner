import React from "react"

const FlexDiv = ({className, children}) => {
  return <div className={`${className} flex items-center`}>{children}</div>
}
export default FlexDiv
