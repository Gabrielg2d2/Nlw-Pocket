import { Button, ButtonProps } from "@mui/material";

type IButtonSaveProps = ButtonProps;

export function ButtonSave(props: IButtonSaveProps) {
  return (
    <Button
      variant="contained"
      fullWidth
      sx={{
        "&:disabled": {
          backgroundColor: "#8a5cf651",
        },
      }}
      {...props}
    >
      Salvar
    </Button>
  );
}
