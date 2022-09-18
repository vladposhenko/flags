import React from 'react';
import { Container } from "./Container";
import styled from 'styled-components'
import { Controlls } from "./Controlls";

const Wrapper = styled.main`
   padding: 2rem 0;
  
  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`

export const Main = ({children}) => {
    return (
        <Wrapper>
            <Container>
                {children}
            </Container>
        </Wrapper>
    );
};

