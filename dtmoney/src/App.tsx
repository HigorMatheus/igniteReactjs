import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'
import { GlobalStyle } from './styles/global'
import { TransactionsProvider } from './TransactionsContext'

ReactModal.setAppElement('#root')
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  )
  function HandleOpenTransactionModal(): void {
    setIsNewTransactionModalOpen(true)
  }
  function HandleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <Header onOpenTransactionModal={HandleOpenTransactionModal} />
      <Dashboard></Dashboard>
      <GlobalStyle />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={HandleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  )
}
