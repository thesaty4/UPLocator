import React from 'react';
import ListView, {
  ListViewAction,
  ListViewItem,
} from '../../../components/ListView/ListView';
import {NavigationProp} from '@react-navigation/native';
import {RouteType, router} from '../../../shared/routes/router';

type ZonalListProps = {
  navigation?: NavigationProp<RouteType>;
};

const ZonalList = ({navigation}: ZonalListProps) => {
  const handlePaginate = () => {
    console.log('paginate me....');
  };

  const handlePress = (item: ListViewItem) => {
    navigation && navigation?.navigate(router.routeLines.route as any);
  };

  return (
    <ListView
      label="Zonal List"
      items={homeList}
      onPressItem={handlePress}
      onPressAction={(item: ListViewAction) =>
        item.item && handlePress(item.item)
      }
      onEndReached={handlePaginate}
    />
  );
};

export default ZonalList;

const homeList: ListViewItem[] = [
  {
    label: 'Capture Pole',
    substr: 'Capture Pole',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
  {
    label: 'Pole List',
    substr: 'Pole List',
  },
];
