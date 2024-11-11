import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const Bike = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nav1}>
        <Text style={styles.title}>A premium online store for sporters and their stylish choice</Text>
      </View>
      <View style={styles.nav2}>
        <Image source={require('../assets/hinh1.png')} style={styles.image} />
      </View>
      <View style={styles.nav3}>
        <Text style={styles.textP}>POWER BIKE SHOP</Text>
      </View>
      <View style={styles.nav4}>
        <Pressable style={styles.getStart} onPress={() => navigation.navigate('BikeList')}>
          <Text>Get Start</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  nav1: { flex: 1, justifyContent: 'center', alignItems: 'center', top: 20 },
  title: { fontSize: 26, textAlign: 'center' },
  nav2: { flex: 3, justifyContent: 'center', marginTop: 10, alignItems: 'center', borderRadius: 50, backgroundColor: '#E941411A' },
  image: { width: 292, height: 270 },
  nav3: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  textP: { fontSize: 26, fontWeight: '700', textAlign: 'center' },
  nav4: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  getStart: { borderRadius: 10, borderWidth: 1, padding: 10, backgroundColor: '#E94141' },
});

export default Bike;
