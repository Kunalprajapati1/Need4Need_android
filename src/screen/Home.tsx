import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Hoiiiiiiiiiiii</Text> */}
      <ImageBackground source={require('../assest/homebg2.jpg')} style={styles.image}>
    
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    blurRadius:100,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // You can adjust the resizeMode as needed
  },
});

export default Home;
