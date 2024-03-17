import React, {useMemo, useState} from 'react';
import {PAGES} from '../../../types/pages.type';
import RouteLines from '../RouteLines/RouteLines';
import Poles from '../Poles/Poles';
import EditPole from '../EditPole/EditPole';
import ZonalList from './ZonalList';
import {ListViewItem} from '../../../components/ListView/ListView';

export type ZonalPages =
  | PAGES.ZonalList
  | PAGES.RouteLines
  | PAGES.Poles
  | PAGES.EditPole;

export type ListPressProps = {
  item: ListViewItem;
  nextState: ZonalPages;
};

const Zonal = () => {
  const [screenInfo, setScreen] = useState<ListPressProps>();

  const handlePress = ({item, nextState}: ListPressProps) => {
    console.log(nextState);
    setScreen({item, nextState});
  };

  const ActiveComponent = useMemo(
    () => ({
      [PAGES.ZonalList]: (
        <ZonalList
          onPress={(item: ListViewItem) =>
            handlePress({item, nextState: PAGES.RouteLines})
          }
        />
      ),

      [PAGES.RouteLines]: (
        <RouteLines
          id={screenInfo?.item.id}
          onPress={(item: ListViewItem) =>
            handlePress({item, nextState: PAGES.Poles})
          }
        />
      ),
      [PAGES.Poles]: <Poles />,
      [PAGES.EditPole]: <EditPole />,
    }),
    [],
  );

  return ActiveComponent[screenInfo?.nextState ?? PAGES.ZonalList];
};

export default Zonal;
