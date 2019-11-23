import {StyleSheet} from "react-native";
import colors from 'res/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40
  },
  container_full: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  h1: {color: colors.h1, fontSize: 24},
  h2: {color: colors.h2, fontSize: 22},
  h3: {color: colors.h3, fontSize: 20},
  h4: {color: colors.h4, fontSize: 18},
  h5: {color: colors.h5, fontSize: 16},
  h6: {color: colors.h6, fontSize: 14},
  h7: {color: colors.h7, fontSize: 12},
  h8: {color: colors.h8, fontSize: 10},
  p: {color: colors.p, fontSize: 16},
  pLight: {color: colors.pLight, fontSize: 15},
  inputStyle1: {height: 55, borderColor: colors.borderColorLight, borderWidth: 1, borderRadius:2, paddingLeft: 20, paddingRight: 20},
  inputStyle2: {height: 55, backgroundColor: colors.inputBgColor, borderColor: colors.borderColorLight, borderWidth: 1, borderRadius:2, paddingLeft: 20, paddingRight: 20},
  otpStyle1: {height: 55, width: 55, borderColor: colors.borderColorLight, borderWidth: 1, borderRadius:2, paddingLeft: 20, paddingRight: 20},
  otpStyle2: {height: 55, width: 55, backgroundColor: colors.inputBgColor, borderColor: colors.borderColorLight, borderWidth: 1, borderRadius:2, paddingLeft: 20, paddingRight: 20},
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
  profileImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: colors.borderColorLight
  },
  settingsItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom:15,
    borderBottomWidth: 1,
    borderColor: colors.borderColorLight
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: colors.backgroundColor1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchContainerInput: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 2,
    paddingLeft: 20,
    paddingRight: 20
  },
  T2: {
    fontSize: 14,
    color:colors.textBold1,
    textTransform: 'uppercase'
  }
});

export default styles;