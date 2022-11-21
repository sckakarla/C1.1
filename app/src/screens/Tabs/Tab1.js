import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, SafeAreaView, Text } from 'react-native';

const Tab1Screen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tab One</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3b3b3b',
    },
});

Tab1Screen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Tab1Screen;