import { HeaderContainer, HeaderWrapper, UserInfo } from './style'
import logoInter from '../../assets/images/logo-inter.png'
import { Link, useNavigate } from 'react-router-dom'

import UserCircle from '../UserCircle'

const Header = () => {
  const navigate = useNavigate()

  const handleLogOut = () => {
    navigate('/')
  }
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logoInter} width={172} alt="logo inter" />
        <UserInfo>
          <UserCircle initials="AN" />
          <div>
            <p>
              Olá, <span>Fernando</span>{' '}
            </p>
            <strong>121212</strong>
          </div>
          <a href="#" onClick={handleLogOut}>
            Sair
          </a>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header
