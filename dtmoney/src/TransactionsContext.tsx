import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'
interface ITransaction {
  id: number
  title: string
  type: 'deposit' | 'withdraw'
  category: string
  amount: number
  createAt: string
}
interface TransactionsProviderProps {
  children: ReactNode
}
export const TransactionsContext = createContext<ITransaction[]>([])

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])
  useEffect(() => {
    api
      .get('http://localhost:3000/api/transactions')
      .then((response) => setTransactions(response.data.transactions))
  })

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}
