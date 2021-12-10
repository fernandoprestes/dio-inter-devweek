import { useContext } from 'react'
import { AuthContex } from '../context/AuthContext'

const useAuth = () => {
  const context = useContext(AuthContex)
  if (!context) {
    throw new Error('Nenhum contexto encontrado')
  }

  return context
}

export default useAuth
