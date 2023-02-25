import { FlexContainer, ImgContainer, NavContainer } from './styles'
import { IdentificationCard, FolderUser, AddressBook } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
export function NavMenu() {
  return (
    <FlexContainer>
      <NavLink to="/certifications">
        <NavContainer marginTop={60} height={120} width={120}>
          <div className="line2" />
          <ImgContainer>
            <IdentificationCard size={62} color="red" />
          </ImgContainer>
        </NavContainer>
      </NavLink>

      <NavLink to="/aboutme">
        <NavContainer height={120} width={120}>
          <ImgContainer>
            <AddressBook size={62} color="red" />
          </ImgContainer>
        </NavContainer>
      </NavLink>

      <NavLink to="/curriculum">
        <NavContainer marginTop={60} height={120} width={120}>
          <div className="line" />

          <ImgContainer>
            <FolderUser size={62} color="red" />
          </ImgContainer>
        </NavContainer>
      </NavLink>
    </FlexContainer>
  )
}
