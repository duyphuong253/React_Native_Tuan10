import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBike } from './store';

const AddBike = () => {
  const [bikeName, setBikeName] = useState('');
  const [bikeVersion, setBikeVersion] = useState('');
  const [bikePrice, setBikePrice] = useState('');
  const [bikeImage, setBikeImage] = useState('');
  const dispatch = useDispatch();

  const handleAddBike = () => {
    let imageSource = bikeImage;

    // Kiểm tra xem bikeImage có phải là URL không
    if (bikeImage.startsWith('http') || bikeImage.startsWith('https')) {
      imageSource = { uri: bikeImage };  // Nếu là URL, dùng trực tiếp
    } else {
      // Nếu là ảnh nội bộ (file ảnh trong assets), xử lý như sau
      try {
        imageSource = require(`../assets/${bikeImage}`);  // Xử lý ảnh cục bộ
      } catch (error) {
        Alert.alert('Error', 'Hình ảnh không hợp lệ!');
        return; // Dừng hàm nếu hình ảnh không hợp lệ
      }
    }

    // Tạo mới đối tượng bike
    const newBike = {
      id: Date.now().toString(),
      name: bikeName,
      price: bikePrice,
      image: imageSource,  
    };

    // Gửi đối tượng bike mới đến store
    dispatch(addBike(newBike));

    // Làm sạch các trường nhập liệu sau khi thêm xe đạp
    setBikeName('');
    setBikePrice('');
    setBikeImage('');
  };

  return (
    <View style={styles.container}>
      <Text>Thêm Xe Đạp</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên xe đạp"
        value={bikeName}
        onChangeText={setBikeName}
      />

      <TextInput
        style={styles.input}
        placeholder="Nhập giá xe đạp"
        value={bikePrice}
        onChangeText={setBikePrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập đường dẫn ảnh (URL hoặc tên file)"
        value={bikeImage}
        onChangeText={setBikeImage}
      />
      <Button title="Thêm" onPress={handleAddBike} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default AddBike;
