import { Add, Check } from "@mui/icons-material";
import { Chip, Stack } from "@mui/material";

export type IListChipsProps = {
  list: Array<{
    title: string;
    isCompleted: boolean;
  }>;
};

export function ListChips(props: IListChipsProps) {
  return (
    <Stack my={4} direction="row" gap={2}>
      {props.list.map((item) => (
        <Chip
          key={item.title}
          label={item.title}
          variant="outlined"
          icon={item.isCompleted ? <Check color="success" /> : <Add />}
          sx={{
            border: "1px dashed #313131",
            fontSize: "1rem",
            padding: "0.5rem",
            height: "2.3rem",
          }}
        />
      ))}
    </Stack>
  );
}
