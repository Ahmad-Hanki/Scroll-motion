'use client'

import { ReactNode, RefObject } from "react"

const SectionLayout = ({children, ref}:{ref?:RefObject<HTMLDivElement>, children:ReactNode}) => {
  return (
    <div className="p-20">
        {children}
    </div>
  )
}

export default SectionLayout