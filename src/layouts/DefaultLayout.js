import { Outlet } from 'react-router-dom'
import { NavMenu } from '../components/Navmenu'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <NavMenu />
      <Outlet />
    </LayoutContainer>
  )
}
