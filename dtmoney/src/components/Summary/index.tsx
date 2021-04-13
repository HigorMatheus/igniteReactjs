import { useContext } from 'react'
import { incomeImg, outcomeImg, totalImg } from '../../assets'
import { TransactionsContext } from '../../TransactionsContext'
import { Container } from './styles'

export function Summary() {
  const data = useContext(TransactionsContext)
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1000</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong> -R$ 5000</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 500</strong>
      </div>
    </Container>
  )
}
