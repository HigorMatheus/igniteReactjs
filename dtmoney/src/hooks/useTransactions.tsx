import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'
interface ITransaction {
  id: number
  title: string
  type: 'deposit' | 'withdraw'
  category: string
  amount: number
  createAt: string
}
type ITransactionInput = Omit<ITransaction, 'id' | 'createAt'>
interface TransactionsProviderProps {
  children: ReactNode
}
interface TransactionsContextData {
  transactions: ITransaction[]
  CreateTransaction: (transaction: ITransactionInput) => Promise<void>
}
const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])
  useEffect(() => {
    api
      .get('http://localhost:3000/api/transactions')
      .then((response) => setTransactions(response.data.transactions))
  })

  async function CreateTransaction(transactionInput: ITransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createAt: new Date(),
    })
    const { transaction } = response.data
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, CreateTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)
  return context
}
