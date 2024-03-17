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

type ZoomInfo = {
  label: string;
  value: number;
  isActive?: boolean;
};

const cameraConfig = {
  visible: true,
  hasPermission: false,
};

const zoomRatio: ZoomInfo[] = [
  {
    label: 'Normal',
    value: 0,
  },
  {
    label: '1X',
    value: 10,
  },
  {
    label: '2X',
    value: 50,
  },
  {
    label: '3X',
    value: 100,
  },
];

const CameraView: React.FC<CameraViewProps> = ({onCapture}) => {
  const [camera, setPermission] = useState(cameraConfig);
  const [flash, setFlash] = useState(false);
  const [isBackCam, setBackCam] = useState(true);
  const [isFullView, setFullView] = useState(false);
  const [zoom, setZoom] = useState<ZoomInfo>(zoomRatio[0]);

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

  const TopView = () =>
    useMemo(
      () => (
        <View {...getStyles(['m2', 'p2', 'flex', 'flexRow', 'justifyBetween'])}>
          <View {...getStyles(['flex', 'flexRow'], 'default', {gap: 20})}>
            <TouchableOpacity
              onPress={() => {
                setFlash(prev => !prev);
              }}>
              <Image
                source={flash ? Icons.flashOn : Icons.flashOff}
                tintColor={appColors.white}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setBackCam(prev => !prev);
              }}>
              <Image source={Icons.rotateCamera} tintColor={appColors.white} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              setFullView(prev => !prev);
            }}>
            <Image source={Icons.expand} tintColor={appColors.white} />
          </TouchableOpacity>
        </View>
      ),
      [],
    );

  const BottomView = () =>
    useMemo(
      () => (
        <View {...getStyles(['absolute', 'bottom0', 'wFull', 'itemsCenter'])}>
          <View {...getStyles(['itemsCenter'])}>
            <View {...getStyles(['flexRow', 'p5'], 'default', {gap: 20})}>
              {zoomRatio.map(item => (
                <TouchableOpacity
                  onPress={() => {
                    setZoom(item);
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '900',
                      color: 'white',
                      opacity: zoom.label == item.label ? 1 : 0.5,
                    }}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
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
      ),
      [],
    );

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
            captureAudio={false}
            zoom={zoom.value}>
            <View {...getStyles(['flex1', 'wFull'], 'default')}>
              <TopView />
              <BottomView />
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
