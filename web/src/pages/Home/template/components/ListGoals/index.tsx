import { Container } from "./components/Container";
import { Header, IHeaderProps } from "./components/Header";

export type IListGoalsProps = {
  header: IHeaderProps;
};

export function ListGoals(props: IListGoalsProps) {
  return (
    <Container>
      <Header {...props.header} />
    </Container>
  );
}
