import styled from 'styled-components'

export const styles = {
  cardStyle: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: .5
  },
  detailStyle: {
    justifyContent: 'space-between',
    marginLeft: 10
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff"
  },
  artistStyle: {
    fontSize: 13,
    color: "#334660"
  }
}

export const Card = styled.View`
  display: flex;
  margin: 50px 5px 0px;
  border-radius: 4px;
  background-color: #b0e0e6;
  /* border: 2px solid black; */
`

export const CardDetail = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-bottom-width: 2px;
  border-color: #334660;
  padding: 10px;
  position: relative;
`

export const Thumbnail = styled.Image`
  height: 50px;
  width: 50px;
`

export const MainImage = styled.Image`
  height: 300;
  width: 100%;
`

export const Button = styled.Button`
  
`
