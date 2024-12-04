import { Container } from "./components/Container";
import { Header, IHeaderProps } from "./components/Header";
import { IListChipsProps, ListChips } from "./components/ListChips";

export type IListGoalsProps = {
  header: IHeaderProps;
  chips: IListChipsProps;
};

export function ListGoals(props: IListGoalsProps) {
  return (
    <Container>
      <Header {...props.header} />
      <ListChips {...props.chips} />
    </Container>
  );
}
