import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import ThemeText from '../components/ThemeText';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <ThemeText style={{...styles.textwhite, ...styles.greet}}>Hi Jaykey!</ThemeText>
        <View style={styles.innerView}>
          <Text style={[styles.textwhite, styles.heading]}>
            What <Text style={styles.textBold}>pizza</Text> do you want to try
            today?
          </Text>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.card}>
          <View style={{overflow:'hidden'}}>
            <Image
              style={styles.pizzaImage}
              source={require('../assets/big-pizza.png')}
            />
          </View>
          <View>
            <Text>Reorder again?</Text>
            <Text>Small, thin crust, tomatoes, basil, cheese</Text>
            <Text>$ 12</Text>
          </View>
        </View>
        <View style={{flex: 2}}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    flex: 0.2,
    backgroundColor: '#F5313F',
    paddingVertical: 24,
    paddingHorizontal: 36,
  },
  main: {
    flex: 0.8,
  },
  textwhite: {
    color: '#fff',
  },
  greet: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular'
  },
  heading: {
    fontSize: 28,
      fontFamily: 'Poppins-Regular'
  },
  textBold: {
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold'
  },
  innerView: {
    marginTop: 4,
    width: '90%',
    paddingHorizontal: 10,
    borderLeftWidth: 2,
    borderLeftColor: '#fff',
  },
  pizzaImage: {
    width: 150,
    height:150,
    position: 'relative',
    left: -40,
    zIndex: -1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 36,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    height: '40%',
    position: 'relative',
    top: -38,
  },
});

export default Home;
