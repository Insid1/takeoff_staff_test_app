import { Button, Grid } from '@mui/material';
import Label from 'components/ui/custom-label';
import UserAvatar from 'components/ui/user-avatar-custom';
import UserItemCustom from 'components/ui/user-item-custom';
import { useState } from 'react';
import { IUser } from 'type';
import PopoverUserItem from 'components/ui/popover-user-item-custom';
import { useAppDispatch } from 'store/hooks';
import { fetchUsers, removeUser } from 'store/data/thunks';
import dayjs from 'dayjs';
import { mapToDateFormat } from 'consts';

function UserItem({
  id, isPremium, name, phone,
  email, date, company,
  colour, city, address,
  country, creditCard, pinCode,
} : IUser) {
  const [popoverAnchor, setPopoverAnchor] = useState<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  const handleClickItem: React.MouseEventHandler<HTMLDivElement> = (evt) => {
    setPopoverAnchor(evt.currentTarget);
  };
  const handleClose = () => {
    setPopoverAnchor(null);
  };

  const handleDeleteClick: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.stopPropagation();
    dispatch(removeUser(id))
      .then(() => dispatch(fetchUsers()));
  };

  return (
    <>
      <UserItemCustom
        onClick={handleClickItem}
      >
        <Grid item>
          <UserAvatar bgcolor={colour}>
            {name}
          </UserAvatar>
        </Grid>
        <Grid item xs>
          <Label caption="name" title={name} />
        </Grid>
        <Grid item xs>
          <Label caption="email" title={email} />
          <Label caption="phone" title={phone} />
        </Grid>
        <Grid item xs>
          <Label justifyContent="center" caption="date" title={dayjs(date).format(mapToDateFormat.Simple)} />
        </Grid>
        <Grid item textAlign="end">
          <Button
            color="error"
            variant="contained"
            onClick={handleDeleteClick}
          >
            Delete

          </Button>
        </Grid>
      </UserItemCustom>
      <PopoverUserItem
        city={city}
        address={address}
        company={company}
        country={country}
        creditcard={creditCard}
        pin={pinCode}
        anchorEl={popoverAnchor}
        onClose={handleClose}
      />
    </>
  );
}

export default UserItem;
