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
import Header from '../../shared/view/header/Header';

export type ListViewAction = {
  label?: string;
  icon: ImageURISource;
  item?: ListViewItem;
};

export interface ListViewItem {
  id?: string;
  label: string;
  substr: string;
}
interface ListViewProps extends Partial<FlatList> {
  label?: string;
  icons?: {
    label?: ImageURISource;
    pre?: ImageURISource;
    actions?: ListViewAction[];
  };
  items: ListViewItem[];
  onPressItem?: (item: ListViewItem) => void;
  onPressAction?: (item: ListViewAction) => void;
  onEndReached?: () => void;
}

const ListView: React.FC<ListViewProps> = ({
  icons,
  label,
  items,
  onPressItem,
  onPressAction,
  onEndReached,
  ...restProps
}) => {
  const handlePress = (prop: {
    item?: ListViewItem;
    actionItem?: ListViewAction;
  }) => {
    prop?.item && onPressItem && onPressItem(prop.item);
    prop?.actionItem && onPressAction && onPressAction(prop.actionItem);
  };

  const renderItem = ({item}: {item: ListViewItem}) => (
    <TouchableOpacity
      onPress={() => handlePress({item})}
      {...getStyles(['mX5'])}>
      <View
        {...getStyles(['flexCol', 'mY2', 'pY2', 'pX3', 'flexRow'], 'default', {
          ...commonStyles.bShadowXSM,
          gap: 10,
        })}>
        <View {...getStyles(['justifyCenter'])}>
          <Image
            style={listStyles.actionIcon}
            source={icons?.pre ?? Icons.pole}
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
          {(icons?.actions ?? defaultActions)?.map((actionItem, index) => (
            <TouchableOpacity
              {...getStyles(['justifyCenter'])}
              key={index}
              onPress={() =>
                handlePress({actionItem: {...actionItem, ...item}})
              }>
              <Image style={listStyles.actionIcon} source={actionItem.icon} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      {label && (
        <Header
          heading={label}
          icon={icons?.label ?? Icons.train2}
          isGradient
        />
      )}
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.label}
        onEndReached={onEndReached}
        {...restProps}
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
