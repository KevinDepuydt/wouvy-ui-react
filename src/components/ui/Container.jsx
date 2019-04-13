import styled from 'styled-components';

const Container = styled.div`
  padding: 1.25rem 2.5rem;
  overflow-y: auto;
  background-color: ${props => props.theme.background.container};
  flex: 1;
`;

export default Container;
