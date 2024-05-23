import styled from "styled-components";

export const CartContainer = styled.div`
  margin: 80px 0;
`;

export const CartHeaders = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  align-items: center;
  justify-items: center;
  font-weight: bold;
  background-color: #442e2e;

  h2 {
    padding: 10px;
    text-align: center;
    color: white;
  }
`;

export const CartItemRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  align-items: center;
  justify-items: center;

  &:nth-child(even) {
    background-color: lightgray;
  }

  p,
  input,
  button {
    padding: 10px;
    text-align: center;
  }
`;
