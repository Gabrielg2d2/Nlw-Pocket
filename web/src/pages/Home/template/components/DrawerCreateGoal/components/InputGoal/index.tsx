import { TextField } from "@mui/material";

export function InputGoal() {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Praticar exercícios, meditar, etc..."
      sx={{
        borderRadius: "4px",
        border: "2px solid #18181B",
      }}
    />
  );
}
