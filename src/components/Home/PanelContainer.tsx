import styled from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import { ContainerType } from "../../types/types";

function PanelContainer({ children }: ContainerType) {
   const baseURL = `https://api.coingecko.com/api/v3/coins/list`
   const data = useFetch(baseURL)
   console.log(data);
   
   return <PanelContainerStyled>{children}</PanelContainerStyled>;
}

const PanelContainerStyled = styled.div`
   height: 100%;
   width: 75%;
`;

export default PanelContainer;
