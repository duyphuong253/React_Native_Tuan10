import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from './store';

const BikeList = ({ navigation }) => {
  const bikes = useSelector((state) => state.bikes.bikes);
  const filter = useSelector((state) => state.bikes.filter);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filter === 'All') setFilteredBikes(bikes);
    else setFilteredBikes(bikes.filter((bike) => bike.types === filter));
  }, [filter, bikes]);

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.text1}>The world’s Best Bike</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        {['All', 'Roadbike', 'Mountain'].map((type) => (
          <TouchableOpacity key={type} onPress={() => dispatch(setFilter(type))}>
            <Text style={styles.btbBike}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredBikes}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('BikeDescription', { product: item })}>
            <Image source={item.image} style={styles.image} />
            <Text>{item.name}</Text>
            <Text>$ {item.price}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text1: { color: '#E94141', fontWeight: 'bold', fontSize: 20 },
  btbBike: { borderWidth: 1, borderColor: '#E9414187', paddingLeft: 10, paddingRight: 10, backgroundColor: 'lightgray', marginTop: 10 },
  card: { flex: 1, margin: 10, alignItems: 'center' },
  image: { height: 100, width: 100 },
});

export default BikeList;
