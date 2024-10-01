import { Button, ButtonProps } from "@mui/material";

type IButtonSaveProps = ButtonProps;

export function ButtonSave(props: IButtonSaveProps) {
  return (
    <Button variant="contained" fullWidth {...props}>
      Salvar
    </Button>
  );
}
