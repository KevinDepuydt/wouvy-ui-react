import React from 'react';
import styled from 'styled-components';

const PageContent = styled.div`
  padding: 1.25rem 2.5rem;
  overflow-y: auto;
  background-color: ${props => props.theme.background.container};
  flex: 1;
`;

const Title = styled.h3`
  font: ${props => props.theme.size.XXL} "Open Sans Bold", sans-serif;
  color: $dark-gray;
  margin: 0 0 ${props => props.theme.size.L};
  padding: ${props => props.theme.size.XS} 0 calc(${props => props.theme.size.XS} / 2);
  border-bottom: 1px dashed #efefef;
`;

const Box = styled.div`
  
`;

const FlexBox = styled.div`
  flex: 1;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class Page extends React.Component {
  static Title = Title;
  static Box = Box;
  static FlexBox = FlexBox;
  static FlexRow = FlexRow;
  static FlexColumn = FlexColumn;

  render() {
    return (<PageContent {...this.props} />);
  }
};
