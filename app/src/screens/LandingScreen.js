import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

const LandingScreen = ({ navigation }) => {
  // eslint-disable-next-line no-unused-vars
  const fontLoaded = useSelector((state) => state.app.fontLoaded);

  useEffect(() => {
    
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Text>LANDING PAGE</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    mainView: {},
    container: {},
});

LandingScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LandingScreen;