import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles, Card, CardDetail, Thumbnail, MainImage,Button } from '../../styles/album';

const Album = ({albums}) => {
  const list = albums.map((album, i) => {
    const {thumbnail_image, title, artist, image, url} = album
    const {
      cardStyle, 
      detailStyle,
      titleStyle,
      artistStyle
    } = styles
    return (
      <Card style={cardStyle} key={i}>
        <CardDetail>
          <View>
            <Thumbnail 
              source={{uri: thumbnail_image}} 
            />
          </View>
          <View style={detailStyle}>
            <Text style={titleStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardDetail>
        <CardDetail>
          <MainImage 
            source={{uri: image}} 
            />
        </CardDetail>
        <Button title='Buy Now' />
      </Card>
    )
  });
  return(
    list
  )
};

export default Album;