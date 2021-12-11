import { useEffect, useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Header from '../../components/Header'
import Input from '../../components/Input'
import useAuth from '../../hooks/useAuth'
import { pay, request } from '../../services/resources/pix'
import Statement from './Statement'
import {
  BodyContainer,
  DashboardBackground,
  InlineContainer,
  InlineTitle
} from './style'

const DashBoard = () => {
  const { user, getCurrentUser } = useAuth()
  const wallet = user?.wallet || 0

  const [key, setKey] = useState('')
  const [generatedKey, setGeneratedKey] = useState('')
  const [value, setValue] = useState('')

  const handleNewPayment = async () => {
    const { data } = await request(Number(value))
    if (data.copyPasteKey) {
      setGeneratedKey(data.copyPasteKey)
    }
  }

  const handlePayPix = async () => {
    try {
      const { data } = await pay(key)
      if (data.msg) {
        alert(data.msg)
        return
      }
      alert('Não foi possivel o pagamento')
    } catch (err) {
      console.log(err)
    }
  }

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
              <Input
                style={{ flex: 1 }}
                placeholder="Valor"
                value={value}
                onChange={event => setValue(event.target.value)}
              />
              <Button onClick={handleNewPayment}>Gerar Código</Button>
            </InlineContainer>

            {generatedKey && (
              <>
                <p className="primary-color">PIX: Copie e cole</p>
                <p className="primary-color">{generatedKey}</p>
              </>
            )}
          </Card>

          <Card noShadown width="90%">
            <InlineTitle>
              <h2>Pagar Pix</h2>
            </InlineTitle>
            <InlineContainer>
              <Input
                style={{ flex: 1 }}
                placeholder="Insira a chave"
                value={key}
                onChange={event => setKey(event.target.value)}
              />
              <Button onClick={handlePayPix}>Pagar Pix</Button>
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
