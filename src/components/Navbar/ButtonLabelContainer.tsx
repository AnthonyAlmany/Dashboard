import styled from "styled-components";

type ButtonLabelProps = {
   children: React.ReactNode;
};

function ButtonLabelContainer({ children }: ButtonLabelProps) {
   return <ButtonLabelContainerStyled>{children}</ButtonLabelContainerStyled>;
}

const ButtonLabelContainerStyled = styled.div`
   margin-top: 3px;
   margin-left: 1rem;
`;

export default ButtonLabelContainer;
