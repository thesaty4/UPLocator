import React from 'react';
import ListView, {
  ListViewAction,
  ListViewItem,
} from '../../../components/ListView/ListView';
import {Icons} from '../../../assets/icons/all-icons';
import {usePageHelper} from '../../../shared/hooks/pageHelper.hook';
import {PAGES} from '../../../types/pages.type';

export type PoleListProps = {
  onPress?: (item: ListViewItem) => void;
};

const PoleList = () => {
  const {getActivePage, setPage} = usePageHelper();

  const handlePaginate = () => {
    console.log('paginate pole list ....');
  };

  const handlePress = (item: ListViewItem) => {
    // onPress && onPress(item);
  };

  const handleAction = (item: ListViewAction) => {
    setPage(PAGES.EditPole);
  };

  return (
    <ListView
      label="Pole List"
      items={homeList}
      icons={{
        label: Icons.route,
        pre: Icons.route,
        actions: [{icon: Icons.mapColored}],
      }}
      onEndReached={handlePaginate}
      onPressItem={handlePress}
      onPressAction={handleAction}
    />
  );
};

export default PoleList;

const homeList: ListViewItem[] = [
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12B',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
  {
    label: 'Pole No : 502/12A',
    substr: 'LINE : Default',
  },
];
