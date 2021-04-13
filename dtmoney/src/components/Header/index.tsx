// import { useState } from "react";
// import Modal from "react-modal";
import { logoImg } from "../../assets";
import { Container, Content } from "./styles";
type HeaderProps = {
  onOpenTransactionModal: () => void;
};
export function Header({ onOpenTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
