import { TemplateEmptyGoal } from "./components/TemplateEmptyGoal";

export function HomeTemplate() {
  return <TemplateEmptyGoal onClickOpenModal={() => alert("Open modal")} />;
}
