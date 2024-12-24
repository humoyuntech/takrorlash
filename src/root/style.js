import styled from "styled-components";

export const Container = styled.div``;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const MenuItem = styled.h3`
  color: ${({ active }) => (active ? "red" : "black")};
  cursor: pointer;
`;

export const SubItem = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 20px;

  border: 1px solid whitesmoke;
  border-radius: 8px;
`;
