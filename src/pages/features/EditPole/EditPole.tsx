import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../../shared/view/header/Header';
import {Icons} from '../../../assets/icons/all-icons';

const EditPole = () => {
  return (
    <View>
      <Header
        heading="Edit Pole Information"
        icon={Icons.history}
        isBack
        isGradient
      />
    </View>
  );
};

export default EditPole;
