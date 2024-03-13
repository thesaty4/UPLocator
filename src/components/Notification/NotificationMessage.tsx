import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, View, Text, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Icons} from '../../assets/icons/all-icons';
import {appColors} from '../../constants/app.color';
import {
  hideNotification,
  selectNotification,
} from '../../redux/slices/notificationSlice';

interface NotificationMessageProps {}

const NotificationMessage: React.FC<NotificationMessageProps> = () => {
  const {message, type} = useSelector(selectNotification);
  const [visible, setVisible] = useState(!!message);
  const [icon, setIcon] = useState<React.ReactNode | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    let hideTimeout: ReturnType<typeof setTimeout> | undefined;

    setVisible(!!message);

    if (message) {
      switch (type) {
        case 'error':
          setIcon(<Image source={Icons.error} style={styles.icon} />);
          break;
        default:
          setIcon(<Image source={Icons.success} style={styles.icon} />);
      }

      hideTimeout = setTimeout(() => {
        setVisible(false);
        dispatch(hideNotification());
      }, 900);
    }

    return () => {
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, [dispatch, message, type]);

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.container}>
        <View style={styles.notificationContainer}>
          {icon}
          <Text
            style={[
              styles.text,
              {
                color: type === 'success' ? appColors.green : appColors.red,
              },
            ]}>
            {message ?? ''}
          </Text>
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
  notificationContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    // marginBottom: 10,
  },
  text: {
    marginTop: 10,
    color: '#3498db',
    textAlign: 'center',
  },
});

export default React.memo(NotificationMessage);
