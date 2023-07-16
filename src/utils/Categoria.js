import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const getCategoryImage = (categoria) => {
  const categoryImages = {
    "cafe": require('../utils/img/cafe.png'),
    "confiteria": require('../utils/img/postres.png'),
    "granos": require('../utils/img/moledora.png'),
  }

  return categoryImages(categoria);
};

export default getCategoryImage;


const styles = StyleSheet.create({})