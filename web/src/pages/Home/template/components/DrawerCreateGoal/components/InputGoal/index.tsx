import { TextField } from "@mui/material";

export type IInputGoalProps = {
  value: string;
  onChange: (value: string) => void;
  error: boolean;
};

export function InputGoal(props: IInputGoalProps) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Praticar exercícios, meditar, etc..."
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      sx={{
        borderRadius: "4px",
        border: "2px solid #18181B",
      }}
      error={props.error}
      helperText={props.error ? "Campo obrigatório" : ""}
    />
  );
}
