import { useEffect, useState } from "react";
import { useToastCustomContext } from "../../context/toastCustom";
import { GoalDomain } from "../../domain/goals/main";
import { HomeTemplate, IHomeTemplateProps } from "./template";
import { ICheckProps } from "./template/components/DrawerCreateGoal/components/CustomGroupCheck";

const DEFAULT_CHECKED = {
  1: true,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
};

export function Home() {
  const [goalDomain] = useState(new GoalDomain());
  const [openDrawer, setOpenDrawer] = useState(false);
  const [inputGoal, setInputGoal] = useState("");
  const [checked, setChecked] = useState<ICheckProps>(DEFAULT_CHECKED);
  const { useToast } = useToastCustomContext();

  async function handleSubmit() {
    const estimatedQuantity = Object.keys(checked).filter(
      (key) => checked[Number(key)] === true
    ).length;

    const result = await goalDomain.createGoal(inputGoal, estimatedQuantity);
    useToast(result.message.ptBr, result.typeMessage);

    if (result.typeMessage === "success") {
      setOpenDrawer(false);
      setInputGoal("");
      setChecked(DEFAULT_CHECKED);
    }
  }

  useEffect(() => {
    async function getListGoals() {
      const weekNumber = 44;
      const result = await goalDomain.getListGoals(weekNumber);
      console.log("result => ", result);
    }

    getListGoals();
  }, [goalDomain]);

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
