import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../../shared/view/header/Header';
import {Icons} from '../../../assets/icons/all-icons';

const CapturePole = () => {
  return (
    <View>
      <Header heading="Capture Pole" icon={Icons.map} isGradient />
      <Text>Capture pole</Text>
    </View>
  );
};

export default CapturePole;
