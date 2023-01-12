import styled from "styled-components";

type ButtonContainerProps = {
   children: React.ReactNode;
};

function ButtonContainer({ children }: ButtonContainerProps) {
   return <ButtonCoantainerStyled>{children}</ButtonCoantainerStyled>;
}

const ButtonCoantainerStyled = styled.div`
   display: flex;
   align-items: center;
   height: 2rem;
   width: 8rem;
   border-radius: 1rem;
   padding-left: 12px;
   :hover {
      background-color: antiquewhite;
   }
   .active {
      background-color: antiquewhite;
   }
`;

export default ButtonContainer;
