import React from 'react';
import {Text} from 'react-native';
import ListView, {
  ListViewAction,
  ListViewItem,
} from '../../../components/ListView/ListView';
import {Icons} from '../../../assets/icons/all-icons';

type RouteLineProps = {
  id?: string;
  onPress?: (item: ListViewItem) => void;
};

const RouteLines = ({id, onPress}: RouteLineProps) => {
  const handlePaginate = () => {
    console.log('paginate me....');
  };

  const handlePress = (item: ListViewItem) => {
    onPress && onPress(item);
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
