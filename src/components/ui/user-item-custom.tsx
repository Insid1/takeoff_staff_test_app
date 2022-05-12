import Grid from '@mui/material/Grid';
import Paper, { PaperProps } from '@mui/material/Paper';

function UserItemCustom(props: PaperProps) {
  const { children, ...rest } = props;
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 5,
        transition: 'transform 0.1s ease-in-out',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
      {...rest}
    >
      <Grid
        container
        spacing={5}
        alignItems="center"
        justifyContent="space-around"
      >
        {children}
      </Grid>
    </Paper>
  );
}

export default UserItemCustom;
