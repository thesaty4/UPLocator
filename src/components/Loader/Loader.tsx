import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Modal, StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {selectLoading} from '../../redux/slices/loaderSlice';

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  const {loading, text} = useSelector(selectLoading);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(loading);
  }, [loading, text]);

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      statusBarTranslucent>
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#3498db" />
          {text && <Text style={styles.text}>{text}</Text>}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loaderContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    color: '#3498db',
  },
});

export default Loader;
