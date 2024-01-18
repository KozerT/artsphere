import React from "react";
// import { styled } from "styled-components";

//* Using the styled components, StyledHeader should be added as a wrapper instead of header;
// const StyledHeader = styled.header`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 2rem;
//   margin-bottom: 2rem;
//   & h1 {
//     font-size: 1.5rem;
//     font-weight: 600;
//     letter-spacing: 0.3em;
//     text-align: center;
//     text-transform: uppercase;
//     margin: 0;
//   }

//   & p {
//     text-align: center;
//     color: var(--text-color);
//     margin: 0;
//   }
//   @media (min-width: 768px) {
//     margin-bottom: 4rem;

//     & h1 {
//       font-size: 2.25rem;
//     }
//   }
// `;

const Header = () => {
  return (
    <header className="flex flex-col items-center mt-8  mb-8 md:mb-16">
      <h1 className="text-xl md:text-4xl font-semibold tracking-widest font-title  text-center uppercase  text-txt-color-aliceblue ">
        Artsphere
      </h1>
      <p className=" text-txt-color-aliceblue ">
        A community of artists and art-lovers.
      </p>
    </header>
  );
};

export default Header;
