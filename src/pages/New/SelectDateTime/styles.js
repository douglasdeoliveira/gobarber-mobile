import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const HourList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  padding: 0 20px;
`;

export const Hour = styled(RectButton)`
  flex: 1;
  align-items: center;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  margin: 0 10px 20px;

  opacity: ${props => (props.enabled ? 1 : 0.6)};
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;
