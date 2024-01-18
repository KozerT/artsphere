import { styled } from "styled-components";

const Button = styled.button`
  display: block;
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  background: rgb(50, 150, 250);
  border-radius: 6px;
  cursor: pointer;
  border: none;
  color: #e2e5f2;
  line-height: inherit;

  &:hover {
    background-color: rgb(120, 50, 255);
  }
`;

export default Button;
