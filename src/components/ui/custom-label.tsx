import { Typography } from '@mui/material';
import grey from '@mui/material/colors/grey';
import Stack from '@mui/material/Stack';

interface ICustomTypography {
  caption: string,
  title: string,
  justifyContent?: 'flex-start' | 'center' | 'flex-end',
}

function Label({ caption, title, justifyContent = 'flex-start' }: ICustomTypography) {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent={justifyContent}
    >
      <Typography
        variant="caption"
        color={grey[500]}
        textTransform="capitalize"
      >
        {caption}
        :
      </Typography>
      <Typography textTransform="capitalize">
        {title}

      </Typography>
    </Stack>
  );
}

export default Label;
