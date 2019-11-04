import React from 'react';
import styled from 'styled-components'

export default function App() {
  return (
    <Container>
    <StyledText>Open up App.tsx to start working on your app!</StyledText>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

const StyledText = styled.Text`
  font-weight: bold;
`