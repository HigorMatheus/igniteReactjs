import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { closeImg, incomeImg, outcomeImg } from '../../assets'
import { api } from '../../services/api'

import { Container, RadioBox, TransactionsTypeContainer } from './styles'

// import { Container } from './styles';
interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  onRequestClose,
  isOpen,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  const HandleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault()
    const data = {
      title,
      value,
      category,
      type,
    }
    api.post('/transactions', data)
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={HandleCreateNewTransaction}>
        <h2>Cadastra transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          placeholder="Valor"
        />
        <TransactionsTypeContainer>
          <RadioBox
            isActive={type === 'deposit'}
            type="button"
            onClick={() => setType('deposit')}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            isActive={type === 'withdraw'}
            type="button"
            onClick={() => setType('withdraw')}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>
        </TransactionsTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Cadastra</button>
      </Container>
    </Modal>
  )
}
