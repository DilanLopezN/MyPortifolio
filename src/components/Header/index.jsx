import { NavMenu } from '../Navmenu'
import { HeaderContainer } from './styles'
export function Header() {
  return (
    <HeaderContainer>
      <div>
        <h1> Switch color</h1>
      </div>
      <NavMenu />
    </HeaderContainer>
  )
}
