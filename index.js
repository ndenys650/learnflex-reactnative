import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class LearningFlexbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navBarButton}>Back</Text>
          <Text style={styles.navBarHeader}>Awesome App</Text>
          <Text style={styles.navBarButton}>More</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>
            Welcome to Awesome App!
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('learnflex', () => LearningFlexbox);

