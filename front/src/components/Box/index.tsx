import styled from 'styled-components'

export const Box = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  height: 100vh;
  width: 100vw;
  display: flex;

  @media (max-width: 724px) {
    flex-direction: column;
  }
`
