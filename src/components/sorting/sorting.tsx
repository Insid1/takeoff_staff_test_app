import Stack from '@mui/material/Stack';
import { SortingType } from 'enums';
import SortingItem from './sorting-item';

function Sorting() {
  return (
    <Stack spacing={10} direction="row" justifyContent="space-around">
      {Object.values(SortingType).map((type) => (
        <SortingItem key={type} sortingtype={type} />
      ))}
    </Stack>

  );
}

export default Sorting;
