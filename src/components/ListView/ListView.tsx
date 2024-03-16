import React from 'react';
import {
  FlatList,
  Image,
  ImageURISource,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getStyles} from '../../shared/utils/modifiers';
import {appColors} from '../../constants/app.color';
import {commonStyles} from '../../constants/styles.const';
import {Icons} from '../../assets/icons/all-icons';
import LinearGradient from 'react-native-linear-gradient';

type ListViewAction = {
  label?: string;
  icon: ImageURISource;
};

export interface ListViewItem {
  label: string;
  substr: string;
  icon?: ImageURISource;
  actions?: ListViewAction[];
}
interface ListViewProps {
  label?: string;
  items: ListViewItem[];
  onPressAction: () => void;
}

const ListView: React.FC<ListViewProps> = ({label, items, onPressAction}) => {
  const renderItem = ({item}: {item: ListViewItem}) => (
    <TouchableOpacity onPress={onPressAction} {...getStyles(['mX5'])}>
      <View
        {...getStyles(['flexCol', 'mY2', 'pY2', 'pX3', 'flexRow'], 'default', {
          ...commonStyles.bShadowXSM,
          gap: 10,
        })}>
        <View {...getStyles(['justifyCenter'])}>
          <Image
            style={listStyles.actionIcon}
            source={item?.icon ?? Icons.pole}
          />
        </View>
        <View {...getStyles(['flex1'])}>
          <Text
            {...getStyles([], 'default', {
              color: appColors.primary,
              fontSize: 16,
              fontWeight: 'bold',
            })}>
            {item.label}
          </Text>
          <Text {...getStyles([], 'default', {fontSize: 12})}>
            {item.substr}
          </Text>
        </View>
        <View {...getStyles(['flexRow'])}>
          {(item?.actions ?? defaultActions)?.map((action, index) => (
            <TouchableOpacity
              {...getStyles(['justifyCenter'])}
              key={index}
              onPress={onPressAction}>
              <Image style={listStyles.actionIcon} source={action.icon} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      {label && (
        <LinearGradient
          colors={[appColors.primary, appColors.secondary]}
          {...getStyles(
            ['flexRow', 'justifyCenter', 'alignCenter', 'pB3'],
            'default',
            {gap: 5, backgroundColor: appColors.secondary},
          )}>
          <Image
            source={Icons.train2}
            style={{
              width: 25,
              height: 25,
              tintColor: appColors.white,
              alignItems: 'center',
              //   backgroundColor: appColors.green,
            }}
          />
          <Text
            {...getStyles(['m1', 'fontBold'], 'default', {
              fontSize: 16,
              color: appColors.white,
              ...commonStyles.textShadowN,
            })}>
            {label}
          </Text>
        </LinearGradient>
      )}
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.label}
      />
    </View>
  );
};

export default ListView;

const listStyles = StyleSheet.create({
  actionIcon: {
    width: 30,
    height: 30,
  },
});

const defaultActions: ListViewAction[] = [{icon: Icons.forward}];
