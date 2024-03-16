import React from 'react';
import ListView, {ListViewItem} from '../../../components/ListView/ListView';
import {Icons} from '../../../assets/icons/all-icons';

const PoleList = () => {
  return (
    <ListView
      label="Pole List"
      items={homeList}
      icons={{
        label: Icons.route,
        pre: Icons.route,
        actions: [{icon: Icons.mapColored}],
      }}
      onPressAction={() => {}}
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
