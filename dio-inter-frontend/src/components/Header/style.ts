import styled from 'styled-components'

export const HeaderContainer = styled.head`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderWrapper = styled.div`
  width: 80%;
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span,
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }
  a {
    margin-left: 15px;
  }

  div {
    margin-right: 10px;
  }

  .logoutButton {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }
`
