import {
  DrawerCreateGoal,
  IDrawerCreateGoalProps,
} from "./components/DrawerCreateGoal";
import { IListGoalsProps, ListGoals } from "./components/ListGoals";
// import { TemplateEmptyGoal } from "./components/TemplateEmptyGoal";

export type IHomeTemplateProps = {
  drawerCreateGoal: IDrawerCreateGoalProps;
  listGoals: IListGoalsProps;
};

export function HomeTemplate(props: IHomeTemplateProps) {
  return (
    <>
      {/* <TemplateEmptyGoal
        onClickOpenModal={() => props.drawerCreateGoal.handleOpen()}
      /> */}

      <ListGoals {...props.listGoals} />
      <DrawerCreateGoal {...props.drawerCreateGoal} />
    </>
  );
}
