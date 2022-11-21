import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, SafeAreaView, Text } from 'react-native';

const Tab3Screen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tab Three</Text>
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

Tab3Screen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Tab3Screen;