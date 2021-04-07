import React, { useEffect } from 'react'
import { Container } from './styles'

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then((response) => response.json())
      .then((data) => console.log(data))
  })
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento do site</td>
            <td className="deposit">R$ 12000,00</td>
            <td>Desenvolvimento</td>
            <td>25/12/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$ 2000,00</td>
            <td>Casa</td>
            <td>21/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
