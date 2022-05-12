import { Button, Grid } from '@mui/material';
import Label from 'components/ui/custom-label';
import UserAvatar from 'components/ui/user-avatar-custom';
import UserItemCustom from 'components/ui/user-item-custom';
import { IUser } from 'type';

function UserItem({
  id, isPremium, name, phone, email, date, company, colour, city, address,
} : IUser) {
  return (
    <UserItemCustom elevation={5}>
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
        <Label caption="city" title={city} />
        <Label caption="street" title={address} />
        <Label caption="Company" title={company} />
      </Grid>
      <Grid item xs>
        <Label justifyContent="center" caption="date" title={date} />
      </Grid>
      <Grid item textAlign="end">
        <Button color="error" variant="contained">Delete</Button>
      </Grid>
    </UserItemCustom>
  );
}

export default UserItem;
