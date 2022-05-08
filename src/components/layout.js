import dynamic from 'next/dynamic'
import {createContext} from 'react'
import useTheme from './useTheme'

const NavBar = dynamic(
  () => import('./Navbar'),
  {
    ssr: false,
  }
)

export const ThemeContext = createContext()
export default function Layout(props) {
  const {children} = props

  return (
    <ThemeContext.Provider value={useTheme()}>
      <NavBar />
      <main>{children}</main>
    </ThemeContext.Provider>
  )
}
