import React from 'react';
import styled from 'styled-components';

const PageContent = styled.div`
  padding: 1.25rem;
  overflow-y: auto;
  background-color: ${props => props.theme.background.container};
  flex: 1;
`;

const PageFlexContent = styled(PageContent)`
  display: flex;
  flex-direction: ${props => props.direction || 'initial'};
  align-items: ${props => props.align || 'initial'};
  justify-content: ${props => props.justify || 'initial'};
`;

const Title = styled.h3`
  font: ${props => props.theme.size.XXL} "Open Sans Bold", sans-serif;
  color: ${props => props.theme.color.darkGray};
  margin: 0 0 ${props => props.theme.size.L};
  padding: ${props => props.theme.size.XS} 0 calc(${props => props.theme.size.XS} / 2);
  border-bottom: 1px dashed #efefef;
`;

const Box = styled.div``;

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
  static FlexContent = PageFlexContent;
  static Title = Title;
  static Box = Box;
  static FlexBox = FlexBox;
  static FlexRow = FlexRow;
  static FlexColumn = FlexColumn;

  render() {
    return (<PageContent {...this.props} />);
  }
};
