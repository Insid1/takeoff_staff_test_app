import Button from '@mui/material/Button';
import { SortingType } from 'enums';
import { useSelector } from 'react-redux';
import { fetchUsers } from 'store/data/thunks';
import { useAppDispatch } from 'store/hooks';
import { setSortingType } from 'store/interface/interface-slice';
import { selectSortingType } from 'store/interface/selectors';

interface SortingItemProps {
  sortingtype: SortingType,
}

function SortingItem({ sortingtype }: SortingItemProps) {
  const currSortingType = useSelector(selectSortingType);
  const dispatch = useAppDispatch();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    dispatch(setSortingType(sortingtype));
    dispatch(fetchUsers());
  };

  return (
    <Button
      color="secondary"
      variant="contained"
      disabled={(currSortingType === sortingtype)}
      onClick={handleClick}
    >
      By
      {' '}
      {sortingtype}
    </Button>
  );
}

export default SortingItem;
