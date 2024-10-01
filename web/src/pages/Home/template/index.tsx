import { useState } from "react";
import { DrawerCreateGoal } from "./components/DrawerCreateGoal";
import { ICheckProps } from "./components/DrawerCreateGoal/components/CustomGroupCheck";
import { TemplateEmptyGoal } from "./components/TemplateEmptyGoal";

export function HomeTemplate() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [checked, setChecked] = useState<ICheckProps>({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });

  function handleOpenDrawer() {
    setOpenDrawer(true);
  }

  function handleCloseDrawer() {
    setOpenDrawer(false);
  }

  return (
    <>
      <TemplateEmptyGoal onClickOpenModal={handleOpenDrawer} />
      <DrawerCreateGoal
        open={openDrawer}
        close={handleCloseDrawer}
        checked={checked}
        setChecked={setChecked}
      />
    </>
  );
}
