import React, {ReactElement} from 'react';
import {usePageHelper} from '../../shared/hooks/pageHelper.hook';
import {PAGES} from '../../types/pages.type';
import Zonal from '../features/Zonal/Zonal';
import PoleList from '../features/PoleList/PoleList';
import CapturePole from '../features/CapturePole/CapturePole';

const features: Partial<Record<PAGES, React.JSX.Element>> = {
  [PAGES.Home]: <Zonal />,
  [PAGES.CapturePole]: <CapturePole />,
  [PAGES.PoleList]: <PoleList />,
};

const getFeature = (activePage: PAGES): ReactElement => {
  return features[activePage] || <Zonal />;
};

const Layout = () => {
  const {getActivePage} = usePageHelper();

  return getFeature(getActivePage());
};

export default Layout;
