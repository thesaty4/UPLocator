import React from 'react';
import PoleList, {PoleListProps} from '../PoleList/PoleList';
import {ListViewItem} from '../../../components/ListView/ListView';

const Poles = ({navigation}: PoleListProps) => {
  const handlePaginate = () => {
    console.log('paginate me....');
  };

  const handlePress = (item: ListViewItem) => {
    // onPress && onPress(item);
  };

  return <PoleList navigation={navigation} isBack />;
};

export default Poles;
