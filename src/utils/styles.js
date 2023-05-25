import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

// export const colors = {
//   primary: "#fff",
//   secondary: "#f0f0f0",
//   alt: "#1A202C",
//   placeholder: "#CBD5E0",
//   black: "#0f0f0f",
//   orange: "#ff8651",
// };

export const flatBtn = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 5,
    //backgroundColor: '#3b71F3',
    width: 350,
    marginTop: 5,
  },
  PRIMARY: {
    backgroundColor: '#3b71F3',
  },
  SECONDARY: {
    backgroundColor: '#f01d71',
    borderColor: '#3b71f3',
    borderWidth: 2,
  },
  text: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    textAlign: 'center',
  },
  TEXT_PRIMARY: {
    color: 'white',
  },
  TEXT_SECONDARY: {
    color: '#3B71F3',
  },
  TEXT_TERTIARY: {
    color: '#555555',
  },
  TEXT_WARNING: {
    color: '#f01d71',
  },
});

export const customInput = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 42,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
  },

  input: {
    fontSize: 16,
    marginVertical: 0,
  },
});

export const customBtn = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },

  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
  },
});

export const signInScreen = StyleSheet.create({
  body: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: '80%',
    maxWidth: 300,
    maxHeight: 200,
    marginTop: 5,
    marginBottom: 15,
  },
  rootView: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 30,
  },
  text: {
    color: 'grey',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export const foundScreen = StyleSheet.create({
  body: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: 'grey',
    marginVertical: 10,
  },
});
export const missingScreen = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {},
  buttonContainer: {
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    height: '10%',
  },
  image: {
    width: '100%',
    height: '90%',
  },
  camButton: {
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
  },
  buttons: {},
  backButton: {
    backgroundColor: 'white',
    padding: 10,
    borderColor: 'black',
    borderWidth: 3,
  },
});

export const confirmEmailScreen = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 30,
  },
  text: {
    color: 'grey',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export const signUpScreen = StyleSheet.create({
  rootView: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 30,
  },
  text: {
    color: 'grey',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export const forgotPasswordScreen = StyleSheet.create({
  root: {
    alignItems: 'flex-start',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 30,
  },
  text: {
    color: 'grey',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
  label: {
    //   textAlign: 'left',
  },
});

export const newPasswordScreen = StyleSheet.create({
  root: {
    // alignItems: 'flex-start',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 30,
  },
  text: {
    color: 'grey',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
  label: {
    textAlign: 'left',
  },
});

export const basic = StyleSheet.create({
  customFont: {
    fontFamily: 'DancingScript-Regular',
  },

  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    marginBottom: 10,
    fontFamily: 'nunito-bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    flex: 5,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
});

export const header = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#333',
    letterSpacing: 1,
  },
  headerContent: {
    flexDirection: 'row',
  },
  icon: {
    position: 'absolute',
    left: 1,
  },
  headerImage: {
    height: 34,
    width: 28,
    marginHorizontal: 1,
  },
});

export const paragraph = StyleSheet.create({
  marginVertical: 8,
  lineHeight: 20,
});

export const images = {
  headerImage: require('../assets/pawprints.jpg'),
  headerBackground: require('../assets/pets_bg.jpg'),
};
// export const basic = StyleSheet.create({
//   body: {
//     flex: 1,
//     padding: 30,
//     backgroundColor: colors.primary,
//   },
//   inputSection: {
//     position: "relative",
//     marginBottom: 25,
//   },
//   input: {
//     backgroundColor: colors.secondary,
//     height: 70,
//     borderRadius: 20,
//     paddingLeft: 70,
//     fontSize: 17,
//     color: colors.alt,
//   },
//   icon: {
//     fontSize: 25,
//     position: "absolute",
//     top: 22.5,
//     left: 22.5,
//     color: colors.placeholder,
//   },
//   category: {
//     paddingRight: 25,
//     paddingVertical: 5,
//   },
//   categoryText: {
//     color: colors.placeholder,
//     fontWeight: "600",
//   },
//   activeCategory: {
//     color: colors.alt,
//     fontWeight: 'bold',
//     paddingBottom: 5,
//   },
//   activeBorder: {
//     backgroundColor: colors.orange,
//     height: 3,
//     width: 28,
//     marginRight: "auto",
//     marginLeft: "auto",
//     borderRadius: 20,
//   },
//   categoryView: {
//     marginBottom: 20,
//   },
//   itemsView: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     flex: 1,
//     justifyContent: "space-between",
//   },
//   item: {
//     width: (screenWidth - 85) / 2,
//     height: 250,
//   },
//   itemImage: {
//     width: (screenWidth - 85) / 2,
//     height: 200,
//     resizeMode: "cover",
//     borderRadius: 20,
//   },
//   itemTitle: {
//     fontWeight: "bold",
//     fontSize: 17,
//     paddingTop: 5,
//   },
//   itemSub: {
//     fontSize: 12,
//     color: colors.placeholder,
//   },
//   drop: {
//     marginTop: 20,
//   },
//   info: {
//     color: colors.placeholder,
//     fontSize: 15,
//     textAlign: "center",
//   },
// });

// export const details = StyleSheet.create({
//   body: {
//     backgroundColor: colors.primary,
//     flex: 1,
//   },
//   image: {
//     width: screenWidth,
//     height: screenHeight / 1.6,
//     resizeMode: "cover",
//   },
//   detailsView: {
//     padding: 30,
//     backgroundColor: colors.primary,
//     flex: 1,
//     height: screenHeight / 1.9,
//     width: screenWidth,
//     resizeMode: "contain",
//     position: "absolute",
//     bottom: 0,
//     right: 0,
//     left: 0,
//     borderTopLeftRadius: 95,
//   },
//   overlayCurve: {
//     height: 100,
//     width: 100,
//     position: "absolute",
//     resizeMode: "cover",
//     top: -100,
//     right: 0,
//   },
//   pad: {
//     padding: 15,
//   },
//   headView: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   head: {
//     fontSize: 35,
//     fontWeight: "bold",
//     color: colors.al,
//   },
//   sub: {
//     fontSize: 17,
//   },
//   price: {
//     fontSize: 19,
//     color: colors.orange,
//     fontWeight: "bold",
//   },
//   rating: {
//     paddingVertical: 10,
//     fontSize: 13,
//     paddingRight: 5,
//   },
//   ratingView: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   star: {
//     margin: 2,
//     color: colors.orange,
//   },
//   properties: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingVertical: 20,
//   },
//   description: {
//     fontSize: 13,
//     paddingVertical: 10,
//   },
//   buttonView: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 25,
//   },
//   pay: {
//     backgroundColor: colors.alt,
//     width: (screenWidth - 90) * 0.68,
//     padding: 25,
//     borderRadius: 25,
//     height: 75,
//   },
//   payText: {
//     color: colors.primary,
//     textAlign: "center",
//     fontWeight: "bold",
//     fontSize: 15,
//   },
//   heart: {
//     backgroundColor: colors.secondary,
//     width: (screenWidth - 90) * 0.28,
//     padding: 25,
//     borderRadius: 25,
//     height: 75,
//   },
//   heartIcon: {
//     color: colors.placeholder,
//     textAlign: "center",
//     fontSize: 28,
//   },
//   heartActive: {
//     color: colors.orange,
//   },
//   value: {
//     fontWeight: 'bold',
//     fontSize: 15
//   }
// });
