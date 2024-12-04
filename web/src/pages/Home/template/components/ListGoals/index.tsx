import { Add, Check } from "@mui/icons-material";
import { Chip, Stack } from "@mui/material";
import { Container } from "./components/Container";
import { Header, IHeaderProps } from "./components/Header";

export type IListGoalsProps = {
  header: IHeaderProps;
};

const LIST_MOCK = [
  {
    title: "Teste 1",
    isCompleted: false,
  },
  {
    title: "Teste 2",
    isCompleted: true,
  },
  {
    title: "Teste 3",
    isCompleted: true,
  },
];

export function ListGoals(props: IListGoalsProps) {
  return (
    <Container>
      <Header {...props.header} />

      <Stack my={4} direction="row" gap={2}>
        {LIST_MOCK.map((item) => (
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
    </Container>
  );
}
