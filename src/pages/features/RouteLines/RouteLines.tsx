import React from 'react';
import ListView, {
  ListViewAction,
  ListViewItem,
} from '../../../components/ListView/ListView';
import {Icons} from '../../../assets/icons/all-icons';
import {NavigationProp} from '@react-navigation/native';
import {RouteType, router} from '../../../shared/routes/router';

type RouteLineProps = {
  navigation?: NavigationProp<RouteType>;
};

const RouteLines = ({navigation}: RouteLineProps) => {
  const handlePaginate = () => {
    console.log('paginate me....');
  };

  const handlePress = (item: ListViewItem) => {
    navigation && navigation?.navigate(router.poleList.route as any);
  };

  return (
    <ListView
      label="Route Line"
      items={routeLines}
      icons={{
        label: Icons.route,
        pre: Icons.route,
        actions: [{icon: Icons.mapColored}],
      }}
      onPressItem={handlePress}
      onPressAction={(item: ListViewAction) =>
        item?.item && handlePress(item.item)
      }
      onEndReached={handlePaginate}
      isBack
    />
  );
};

export default RouteLines;

const routeLines: ListViewItem[] = [
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Pole No : 502/12B',
    substr: 'LINE : Default',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
  {
    label: 'Route Line No: 129394/FDB',
    substr: 'LINE : No goes here...',
  },
];
