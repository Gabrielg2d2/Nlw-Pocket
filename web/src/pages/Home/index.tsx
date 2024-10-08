import { useState } from "react";
import { GoalDomain } from "../../domain/goals/main";
import { HomeTemplate, IHomeTemplateProps } from "./template";
import { ICheckProps } from "./template/components/DrawerCreateGoal/components/CustomGroupCheck";

export function Home() {
  const [goalDomain] = useState(new GoalDomain());
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

  function handleSubmit() {
    const estimatedQuantity = Object.keys(checked).filter(
      (key) => checked[Number(key)] === true
    ).length;

    goalDomain.createGoal(inputGoal, estimatedQuantity);
  }

  const propsTemplate: IHomeTemplateProps = {
    drawerCreateGoal: {
      isOpen: openDrawer,
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
      handleSubmit,
    },
  };

  return <HomeTemplate {...propsTemplate} />;
}
