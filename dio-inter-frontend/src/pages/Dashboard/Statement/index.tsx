import {
  StatementContainer,
  StatementItemContainer,
  StatementItemImage,
  StatementItemInfo
} from './style'

import { format } from 'date-fns'
import { FiDollarSign } from 'react-icons/fi'

interface StatementItem {
  user: {
    firstName: string
    lastName: string
  }
  value: number
  type: 'pay' | 'received'
  updatedAt: Date
}

const StatementItem = ({ user, value, type, updatedAt }: StatementItem) => {
  return (
    <StatementItemContainer>
      <StatementItemImage type={type}>
        <FiDollarSign size={24} />
      </StatementItemImage>
      <StatementItemInfo>
        <p className="primary-color">
          {value.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
          })}
        </p>
        <p>
          {type === 'pay' ? 'Pago a' : 'Recebido de'}
          <strong>
            {user.firstName} {user.lastName}
          </strong>
        </p>
        <p>{format(updatedAt, "dd/mm/yyyy 'às' HH:mm:'h'")}</p>
      </StatementItemInfo>
    </StatementItemContainer>
  )
}

const Statement = () => {
  const statements: StatementItem[] = [
    {
      user: {
        firstName: 'Ana',
        lastName: 'Betriz'
      },
      value: 152.0,
      type: 'pay',
      updatedAt: new Date()
    },
    {
      user: {
        firstName: 'Ana',
        lastName: 'Betriz'
      },
      value: 325.0,
      type: 'received',
      updatedAt: new Date()
    },
    {
      user: {
        firstName: 'Ana',
        lastName: 'Betriz'
      },
      value: 12.0,
      type: 'pay',
      updatedAt: new Date()
    }
  ]
  return (
    <StatementContainer>
      {statements.map(statement => (
        <StatementItem {...statement} />
      ))}
    </StatementContainer>
  )
}

export default Statement
