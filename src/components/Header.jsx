import React from "react";
import { styled } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.3em;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
  }

  & p {
    text-align: center;
    color: var(--text-color);
    margin: 0;
  }
  @media (min-width: 768px) {
    margin-bottom: 4rem;

    & h1 {
      font-size: 2.25rem;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Artsphere</h1>
      <p>A community of artists and art-lovers.</p>
    </StyledHeader>
  );
};

export default Header;
