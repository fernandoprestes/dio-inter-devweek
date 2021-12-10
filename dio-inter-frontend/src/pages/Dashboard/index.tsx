import {
  DashboardBackground,
  BodyContainer,
  InlineContainer,
  InlineTitle
} from './style'
import Header from '../../components/Header'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Statement from './Statement'
import useAuth from '../../hooks/useAuth'
import { useEffect } from 'react'

const DashBoard = () => {
  const { user, getCurrentUser } = useAuth()
  const wallet = user?.wallet || 0

  useEffect(() => {
    getCurrentUser()
  }, [])

  if (!user) {
    return null
  }

  return (
    <DashboardBackground>
      <Header />
      <BodyContainer>
        <div>
          <Card noShadown width="90%">
            <InlineTitle>
              <h2>Saldo atual</h2>
            </InlineTitle>
            <InlineContainer>
              <h3 className="wallet">
                {wallet?.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </h3>
            </InlineContainer>
          </Card>

          <Card noShadown width="90%">
            <InlineTitle>
              <h2>Receber Pix</h2>
            </InlineTitle>
            <InlineContainer>
              <Input style={{ flex: 1 }} placeholder="Valor" />
              <Button>Gerar Código</Button>
            </InlineContainer>
            <p className="primary-color">Pix copia e cola</p>
            <p className="primary-color">ASdADSAdsad</p>
          </Card>

          <Card noShadown width="90%">
            <InlineTitle>
              <h2>Pagar Pix</h2>
            </InlineTitle>
            <InlineContainer>
              <Input style={{ flex: 1 }} placeholder="Insira a chave" />
              <Button>Pagar Pix</Button>
            </InlineContainer>
          </Card>
        </div>
        <div>
          <Card noShadown width="90%">
            <InlineTitle>
              <h2>Extrato da conta</h2>
            </InlineTitle>
            <Statement />
          </Card>
        </div>
      </BodyContainer>
    </DashboardBackground>
  )
}

export default DashBoard
