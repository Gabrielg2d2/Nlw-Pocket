import { useState } from "react";
import { DrawerCreateGoal } from "./components/DrawerCreateGoal";
import { TemplateEmptyGoal } from "./components/TemplateEmptyGoal";

export function HomeTemplate() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <TemplateEmptyGoal onClickOpenModal={() => setOpenDrawer(true)} />
      <DrawerCreateGoal open={openDrawer} close={() => setOpenDrawer(false)} />
    </>
  );
}
