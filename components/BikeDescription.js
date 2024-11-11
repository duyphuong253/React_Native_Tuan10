import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, addToFavorites } from './store';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BikeDescription = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();

  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.productImage} />
      <View style={styles.details}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productOffer}>15% OFF | {product.price} $</Text>
        <Text style={styles.productPrice}>{product.sale} $</Text>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => dispatch(addToFavorites(product))}>
          <Text style={styles.favIcon}>♡</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => dispatch(addToCart(product))}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { padding: 16, borderRadius: 8, backgroundColor: '#fff', margin: 16 },
  productImage: { width: '100%', height: 270, marginBottom: 16 },
  details: { marginBottom: 16 },
  productName: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  productOffer: { fontSize: 16, color: 'gray' },
  productPrice: { fontSize: 24, color: '#E94141', fontWeight: 'bold' },
  descriptionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 8 },
  productDescription: { fontSize: 14, color: 'gray' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  favIcon: { fontSize: 24, color: '#E94141' },
  addToCartButton: { backgroundColor: '#E94141', padding: 8, borderRadius: 4 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default BikeDescription;
