import React, { ReactNode } from 'react'
import NavBar from '../../components/NavBar'

interface LayoutProps {
  children: ReactNode
}
const layout = ({ children }: Readonly<LayoutProps>) => {
  return (
    <main className='font-sans'>
      <NavBar />
      {children}
    </main>
  )
}

export default layout
