import { HeaderContainer, HeaderWrapper, UserInfo } from './style'
import logoInter from '../../assets/images/logo-inter.png'
import { Link, useNavigate } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'

import UserCircle from '../UserCircle'

const Header = () => {
  const navigate = useNavigate()
  const { user } = useAuth()
  const initials = user.firstName.substr(0, 1) + user.lastName.substr(0, 1)

  const handleLogOut = () => {
    navigate('/')
  }
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logoInter} width={172} alt="logo inter" />
        <UserInfo>
          <UserCircle initials={initials} />
          <div>
            <p>
              Olá,{' '}
              <span>
                {user.firstName} {user.lastName}
              </span>{' '}
            </p>
            <strong>
              {user.accountNumber}-{user.accountDigit}
            </strong>
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
