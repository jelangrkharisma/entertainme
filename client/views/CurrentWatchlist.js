import React, { useEffect } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'

import styles from '../styles/index.style'
import Section from '../components/Section'
import WatchList from '../components/WatchList'

export default function CurrentWatchlist({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.discoverContainer}>
          <Text style={styles.discoverHeader}>E N T E R T A I N M E</Text>
          <Text style={styles.discoverSubHeader}>a personalized watchlist</Text>
        </View>
        <Section header='Movies' navigation={navigation} />
      </View>
      {/* <WatchList navigation={navigation} /> */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate('Discover')
        }}
      >
        <Text>Discover</Text>
      </TouchableOpacity>
    </View>
  )
}
