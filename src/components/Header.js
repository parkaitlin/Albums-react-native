// Import libraries for making a component
import React from 'react';
import styled from 'styled-components';

// Make a component
const Header = ({headerText}) => {
  return(
    <Container style={styles.viewStyle}>
      <Title>{headerText}</Title>
    </Container>
  )
};

const styles = {
  viewStyle: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: .2
  },
}
const Container = styled.View`
  height: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
`

const Title = styled.Text`
  font-size: 20;
  font-weight: 600;
  color: palevioletred;
  margin-top: 30;
`
 
// Make the component available to other parts of the app
export default Header;