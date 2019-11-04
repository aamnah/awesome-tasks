import React from 'react'
import styled from 'styled-components'

const ListItem = ({ title }) => {
  return (
    <ListItemContainer>
      <ListItemText>
        {title}
      </ListItemText>
    </ListItemContainer>
  )
}

const ListItemContainer = styled.View`
  background: white;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 8px;
`

const ListItemText = styled.Text`
  color: #333;
`

export default ListItem