import { Button, ButtonProps } from "@mui/material";

type IButtonCloseProps = ButtonProps;

export function ButtonClose(props: IButtonCloseProps) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#18181B",
        ":hover": {
          backgroundColor: "#202021",
        },
      }}
      fullWidth
      {...props}
    >
      Fechar
    </Button>
  );
}
