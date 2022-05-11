import Alert, { AlertColor } from '@mui/material/Alert';

interface IMyAlert {
  message: string,
  severity: AlertColor | undefined,
}

function MyAlert({
  message,
  severity,
}: IMyAlert) {
  return (
    <Alert
      sx={{
        mt: 3,
      }}
      severity={severity}
    >
      {message}

    </Alert>
  );
}
export type { IMyAlert };
export default MyAlert;
