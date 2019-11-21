import {StyleSheet} from "react-native";
import colors from 'res/colors';

const expStyles = StyleSheet.create({
  expTabs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
  },
  expRow: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  expItem: {
    width: 200,
    height: 200,
    marginRight:20
  },
  expCard: {
    width: 200,
    height: 150,
    backgroundColor: '#333366',
    borderRadius: 4,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10,
  }
});

export default expStyles;