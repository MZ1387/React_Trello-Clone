import React from 'react';
import {
  AppContainer,
  ColumnContainer,
  ColumnTitle,
  CardContainer
} from './styles';

export const App = () => {
  return (
    <AppContainer>
      <ColumnContainer>
        <ColumnTitle>Todo: </ColumnTitle>
        <CardContainer>First Item</CardContainer>
        <CardContainer>Second Item</CardContainer>
        <CardContainer>Third Item</CardContainer>
      </ColumnContainer>
    </AppContainer>
  )
};