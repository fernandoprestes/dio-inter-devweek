import { CardContainer } from './style'

interface CardProps {
  width?: string
  height?: string
  noShadown?: boolean
  children?: React.ReactNode
}

const Card = ({
  width = '100%',
  height = 'auto',
  noShadown = false,
  children
}: CardProps) => {
  return (
    <CardContainer width={width} height={height} noShadow={noShadown}>
      {children}
    </CardContainer>
  )
}

export default Card
