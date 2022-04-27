import React from 'react';
import { 
  ImageBackground,
  StyleSheet 
} from 'react-native';

function SignupScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/img/background.jpg")}
    ></ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1
  }
})

export default SignupScreen;
