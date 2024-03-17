import React from 'react';
import ListView, {
  ListViewAction,
  ListViewItem,
} from '../../../components/ListView/ListView';

type ZonalListProps = {
  onPress?: (item: ListViewItem) => void;
};

const ZonalList = ({onPress}: ZonalListProps) => {
  const handlePaginate = () => {
    console.log('paginate me....');
  };

  const handlePress = (item: ListViewItem) => {
    onPress && onPress(item);
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
