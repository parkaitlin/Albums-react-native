import React, { Component } from 'react';
import axios from 'axios';
import { Container, styles } from '../../styles/albumList';
import Albums from './albums';

class AlbumList extends Component {
  state = {
    albums: [],

  };
  componentDidMount(){
    console.log('compDidMount');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => {
        this.setState({
          albums: res.data
        })
      })
  }
  render(){
    const {albums} = this.state;
    return(
      <Container>
        <Albums albums={albums} />
      </Container>
    );
  }
}

export default AlbumList;

