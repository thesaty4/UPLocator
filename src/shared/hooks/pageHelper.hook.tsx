import {useDispatch, useSelector} from 'react-redux';
import {PAGES} from '../../types/pages.type';
import {selectActivePage, setActivePage} from '../../redux/slices/pageSlice';

export const usePageHelper = () => {
  const {activePage} = useSelector(selectActivePage);
  const dispatch = useDispatch();

  const setPage = (page: PAGES) => {
    dispatch(setActivePage(page));
  };

  const getActivePage = (): PAGES => {
    return activePage;
  };

  return {setPage, getActivePage};
};
