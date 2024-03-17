import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';
import {RNCamera, TakePictureResponse} from 'react-native-camera';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {getStyles} from '../../shared/utils/modifiers';
import Button from '../../shared/components/form/button/Button';
import {appColors} from '../../constants/app.color';
import {Icons} from '../../assets/icons/all-icons';

interface CameraViewProps {
  onCapture?: (image: TakePictureResponse) => void;
}

const cameraConfig = {
  visible: true,
  hasPermission: false,
};

const CameraView: React.FC<CameraViewProps> = ({onCapture}) => {
  const [camera, setPermission] = useState(cameraConfig);
  const [flash, setFlash] = useState(false);
  const [isBackCam, setBackCam] = useState(true);
  const [isFullView, setFullView] = useState(false);

  const {width, height} = Dimensions.get('window'); // Get screen dimensions

  const cameraRef = useRef<RNCamera>(null);

  useEffect(() => {
    if (camera.visible) {
      requestCameraPermission();
    } else {
      setPermission(prev => ({...prev, visible: false}));
    }
  }, []);

  const requestCameraPermission = () => {
    request(PERMISSIONS.ANDROID.CAMERA).then(result => {
      if (result === RESULTS.GRANTED) {
        setPermission(prev => ({...prev, hasPermission: true, visible: true}));
      }
    });
  };

  const handleCapture = () => {
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      cameraRef.current
        .takePictureAsync(options)
        .then((pic: TakePictureResponse) => {
          onCapture && onCapture(pic);
        });
    }
  };

  const Camera = () =>
    useMemo(() => {
      return (
        <View {...getStyles(['alignCenter', 'itemsCenter'], 'default', {})}>
          <RNCamera
            ref={cameraRef}
            {...getStyles([], 'default', {
              marginTop: isFullView ? 0 : 10,
              width: isFullView ? width : width - 10,
              height: isFullView ? height : height - 220,
            })}
            type={isBackCam ? 'back' : 'front'}
            flashMode={flash ? 'on' : 'off'}
            captureAudio={false}>
            <View {...getStyles(['flex1', 'wFull'], 'default')}>
              <View
                {...getStyles([
                  'm2',
                  'p2',
                  'flex',
                  'flexRow',
                  'justifyBetween',
                ])}>
                <View {...getStyles(['flex', 'flexRow'], 'default', {gap: 20})}>
                  <TouchableOpacity
                    onPress={() => {
                      setFlash(prev => !prev);
                    }}>
                    <Image
                      source={flash ? Icons.flashOn : Icons.flashOff}
                      tintColor={appColors.primary}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setBackCam(prev => !prev);
                    }}>
                    <Image
                      source={Icons.rotateCamera}
                      tintColor={appColors.primary}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setFullView(prev => !prev);
                  }}>
                  <Image source={Icons.expand} tintColor={appColors.primary} />
                </TouchableOpacity>
              </View>
              <View
                {...getStyles(['absolute', 'bottom0', 'wFull', 'itemsCenter'])}>
                <TouchableOpacity
                  {...getStyles(
                    ['h20', 'w20', 'itemsCenter', 'justifyCenter', 'mB10'],
                    'default',
                    {
                      borderRadius: 50,
                      backgroundColor: appColors.primary,
                    },
                  )}
                  onPress={handleCapture}>
                  <Image
                    source={Icons.camera}
                    style={{tintColor: appColors.white, height: 40, width: 40}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </RNCamera>
        </View>
      );
    }, [cameraRef, width, height]);

  const EmptyView = () =>
    useMemo(() => {
      return (
        <View
          {...getStyles(
            ['alignCenter', 'itemsCenter', 'justifyCenter', 'bgBlack'],
            'default',
            {
              ...cameraViewStyle.cameraWrapper,
              marginTop: 10,
              marginBottom: 0,
              width: width - 20,
              height: height - 220,
            },
          )}>
          <Text {...getStyles(['textWhite', 'mB5', 'fontBold'])}>
            No Camera Permission !
          </Text>
          <Button
            label="Allow"
            onPress={requestCameraPermission}
            style={{
              width: 150,
            }}
            buttonType="primary"
          />
        </View>
      );
    }, [width, height]);

  return (
    <View {...getStyles(['itemsCenter'])}>
      {camera.visible && camera.hasPermission ? (
        isFullView ? (
          <Modal>
            <Camera />
          </Modal>
        ) : (
          <Camera />
        )
      ) : (
        <EmptyView />
      )}
    </View>
  );
};

export default CameraView;

const cameraViewStyle = StyleSheet.create({
  cameraWrapper: {
    marginTop: 100,
    marginBottom: 80,
  },
});
