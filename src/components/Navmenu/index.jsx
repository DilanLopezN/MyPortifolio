import { FlexContainer, ImgContainer, NavContainer } from './styles'
import { IdentificationCard } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
export function NavMenu() {
  return (
    <FlexContainer>
      <NavLink to="/">
        <NavContainer height={120} width={120}>
          <div className="line" />
          <ImgContainer>
            <IdentificationCard size={62} color="red" />
          </ImgContainer>
        </NavContainer>
      </NavLink>

      <NavLink to="/">
        <NavContainer height={120} width={120}>
          <div className="line" />
          <ImgContainer>
            <IdentificationCard size={62} color="red" />
          </ImgContainer>
        </NavContainer>
      </NavLink>
      <NavLink to="/">
        <NavContainer height={120} width={120}>
          <ImgContainer>
            <IdentificationCard size={62} color="red" />
          </ImgContainer>
        </NavContainer>
      </NavLink>

      <NavLink to="/">
        <NavContainer height={120} width={120}>
          <ImgContainer>
            <IdentificationCard size={62} color="red" />
          </ImgContainer>
        </NavContainer>
      </NavLink>
    </FlexContainer>
  )
}
