import { Stack } from '@mui/material';
import blue from '@mui/material/colors/blue';
import Popover, { PopoverProps } from '@mui/material/Popover';
import Label from './custom-label';

interface PopoverUserItemProps {
  city? : string,
  address? : string,
  company? : string,
  country?: string,
  creditcard?: string,
  pin?: number | string,
  anchorEl: PopoverProps['anchorEl'],
  onClose: PopoverProps['onClose'],
}

function PopoverUserItem(props :PopoverUserItemProps) {
  const {
    anchorEl, city, address,
    company, country, creditcard,
    pin,

  } = props;
  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;
  return (
    <Popover
      {...props}
      anchorPosition={{ left: 1, top: 0 }}
      id={popoverId}
      open={open}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Stack spacing={5} sx={{ p: 4, bgcolor: blue[50] }}>
        <Label caption="city" title={city} />
        <Label caption="street" title={address} />
        <Label caption="Company" title={company} />
        <Label caption="country" title={country} />
        <Label caption="credit card" title={creditcard} />
        <Label caption="pin code" title={pin} />
      </Stack>
    </Popover>
  );
}

export default PopoverUserItem;
