import React, {useEffect, useMemo, useRef, useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
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
            {...getStyles(['mB6'], 'default', cameraViewStyle.cameraWrapper)}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.auto}
            captureAudio={false}>
            <View {...getStyles(['flex1', 'wFull'], 'default')}>
              <View
                {...getStyles(
                  ['absolute', 'bottom0', 'wFull', 'itemsCenter'],
                  'default',
                  {
                    bottom: -50,
                  },
                )}>
                <TouchableOpacity
                  {...getStyles(
                    ['h20', 'w20', 'itemsCenter', 'justifyCenter'],
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
    }, [cameraRef]);

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
    }, []);

  return (
    <View {...getStyles(['itemsCenter'])}>
      {camera.visible && camera.hasPermission ? <Camera /> : <EmptyView />}
    </View>
  );
};

export default CameraView;

const cameraViewStyle = StyleSheet.create({
  cameraWrapper: {
    height: 390,
    width: 390,
    marginTop: 100,
    marginBottom: 80,
  },
});
