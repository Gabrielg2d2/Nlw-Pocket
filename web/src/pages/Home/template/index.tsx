import {
  DrawerCreateGoal,
  IDrawerCreateGoalProps,
} from "./components/DrawerCreateGoal";
import { TemplateEmptyGoal } from "./components/TemplateEmptyGoal";

export type IHomeTemplateProps = {
  drawerCreateGoal: IDrawerCreateGoalProps;
};

export function HomeTemplate(props: IHomeTemplateProps) {
  return (
    <>
      <TemplateEmptyGoal
        onClickOpenModal={() => props.drawerCreateGoal.handleOpen()}
      />
      <DrawerCreateGoal {...props.drawerCreateGoal} />
    </>
  );
}
