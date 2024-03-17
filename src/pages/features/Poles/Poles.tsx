import React from 'react';
import PoleList, {PoleListProps} from '../PoleList/PoleList';
import {
  ListViewAction,
  ListViewItem,
} from '../../../components/ListView/ListView';

const Poles = ({onPress}: PoleListProps) => {
  const handlePaginate = () => {
    console.log('paginate me....');
  };

  const handlePress = (item: ListViewItem) => {
    onPress && onPress(item);
  };

  return <PoleList />;
};

export default Poles;
