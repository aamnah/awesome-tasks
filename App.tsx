import React from 'react';
import styled from 'styled-components'
import Constants from 'expo-constants'
import data from './store'
import ListItem from './components/ListItem'

export default function App() {
  return (
    <AppContainer>
      <TodoList
        sections={data}
        renderItem={({item}) => <ListItem title={item} />}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: {title} }) => <StyledText>{title}</StyledText>}
        initialNumToRender={5}
      >
      </TodoList>
    </AppContainer>
  )
}

const AppContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Constants.statusBarHeight};
  background-color: #eee;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;

`

const StyledText = styled.Text`
  font-weight: bold;
`

const TodoList = styled.SectionList`
`