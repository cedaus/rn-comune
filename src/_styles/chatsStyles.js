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
    height: 60,
    width: 60,
    borderRadius: 2,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.borderColorLight
  },
  chatBody: {
    marginLeft: 10
  }
});

export default chatsStyles;