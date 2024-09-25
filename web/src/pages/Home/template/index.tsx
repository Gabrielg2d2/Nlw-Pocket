import { useState } from "react";
import { DrawerCreateGoal } from "./components/DrawerCreateGoal";
import { TemplateEmptyGoal } from "./components/TemplateEmptyGoal";

export function HomeTemplate() {
  const [openDrawer, setOpenDrawer] = useState(false);

  function handleOpenDrawer() {
    setOpenDrawer(true);
  }

  function handleCloseDrawer() {
    setOpenDrawer(false);
  }

  return (
    <>
      <TemplateEmptyGoal onClickOpenModal={handleOpenDrawer} />
      <DrawerCreateGoal open={openDrawer} close={handleCloseDrawer} />
    </>
  );
}
