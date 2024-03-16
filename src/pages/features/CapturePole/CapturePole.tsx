import React from 'react';
import {View} from 'react-native';
import Header from '../../../shared/view/header/Header';
import {Icons} from '../../../assets/icons/all-icons';
import CameraView from '../../../components/CameraView/CameraView';
import {TakePictureResponse} from 'react-native-camera';

const CapturePole = () => {
  const handleCapture = (image: TakePictureResponse) => {
    console.log(image);
  };

  return (
    <View>
      <Header heading="Capture Pole" icon={Icons.map} isGradient />
      <CameraView onCapture={handleCapture} />
    </View>
  );
};

export default CapturePole;
