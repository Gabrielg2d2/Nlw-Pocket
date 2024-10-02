import { useState } from "react";
import { HomeTemplate, IHomeTemplateProps } from "./template";
import { ICheckProps } from "./template/components/DrawerCreateGoal/components/CustomGroupCheck";

export function Home() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [inputGoal, setInputGoal] = useState("");
  const [checked, setChecked] = useState<ICheckProps>({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });

  const propsTemplate: IHomeTemplateProps = {
    drawerCreateGoal: {
      open: openDrawer,
      handleClose: () => setOpenDrawer(false),
      handleOpen: () => setOpenDrawer(true),
      checked: {
        checked,
        setChecked,
      },
      inputGoal: {
        value: inputGoal,
        onChange: (value: string) => setInputGoal(value),
      },
    },
  };

  return <HomeTemplate {...propsTemplate} />;
}
