// Import libraries for making a component
import React from 'react';
import { Container, Title, styles } from '../styles/header'
// Make a component
const Header = ({headerText}) => {
  return(
    <Container style={styles.viewStyle}>
      <Title>{headerText}</Title>
    </Container>
  )
};

// Make the component available to other parts of the app
export default Header;