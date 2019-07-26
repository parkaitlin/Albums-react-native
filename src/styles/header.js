import styled from 'styled-components';

export const styles = {
  viewStyle: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: .2
  },
}
export const Container = styled.View`
  height: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
`

export const Title = styled.Text`
  font-size: 20;
  font-weight: 600;
  color: palevioletred;
  margin-top: 30;
`