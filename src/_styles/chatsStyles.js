import {StyleSheet} from "react-native";
import colors from 'res/colors';

const chatsStyles = StyleSheet.create({
  chatRow: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderColor: colors.borderColorLight
  },
  chatImage: {
    height: 50,
    width: 50,
    borderRadius: 4,
    overflow: "hidden",
    borderWidth: 1,
    marginRight: 10
  },
  chatBody: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: "wrap"
  }
});

export default chatsStyles;