import { useEffect, useState } from 'react'
import { Wrapper, Background, InputContainer, ButtonContainer } from './styles'
import Card from '../../components/Card'
import background from '../../assets/images/background-orange.jpg'
import logoInter from '../../assets/images/logo-inter.png'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'

const SingIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const { userSignIn } = useAuth()

  const handleToSignIn = async () => {
    const data = {
      email,
      password
    }
    
    const response = await userSignIn(data)

    if (response.id) {
      navigate('/dashboard')
      return
    }

    alert('Usuario ou senha inválida!')
  }
  return (
    <Wrapper>
      <Background image={background} />
      <Card width="403px">
        <img src={logoInter} width={172} alt="logo inter" />
        <InputContainer>
          <Input
            placeholder="EMAIL"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <Input
            placeholder="SENHA"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </InputContainer>
        <ButtonContainer>
          <Button type="button" onClick={handleToSignIn}>
            Entrar
          </Button>
          <p>
            Ainda não é cadastrado? <Link to="/singup">Cadastre-se</Link>
          </p>
        </ButtonContainer>
      </Card>
    </Wrapper>
  )
}

export default SingIn
