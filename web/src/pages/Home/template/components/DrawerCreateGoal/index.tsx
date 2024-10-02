import { Stack } from "@mui/material";
import { DrawerCustom } from "../../../../../components/DrawerCustom";
import { ButtonClose } from "./components/ButtonClose";
import { ButtonSave } from "./components/ButtonSave";
import {
  CustomGroupCheck,
  ICustomGroupCheck,
} from "./components/CustomGroupCheck";
import { DescriptionText } from "./components/DescriptionText";
import { IInputGoalProps, InputGoal } from "./components/InputGoal";
import { SubTitle } from "./components/SubTitle";

export type IDrawerCreateGoalProps = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  checked: ICustomGroupCheck;
  inputGoal: IInputGoalProps;
};

type IProps = IDrawerCreateGoalProps;

export function DrawerCreateGoal({
  open = false,
  handleClose,
  checked,
  inputGoal,
}: IProps) {
  return (
    <DrawerCustom title="Cadastrar meta" open={open} close={handleClose}>
      <Stack gap={2} height="100%">
        <DescriptionText>
          Adicione atividades que te fazem bem e que você quer continuar
          praticando toda semana.
        </DescriptionText>

        <Stack flex={1} gap={2}>
          <SubTitle>Qual a atividade?</SubTitle>

          <InputGoal {...inputGoal} />

          <SubTitle>Quantas vezes na semana?</SubTitle>

          <CustomGroupCheck {...checked} />
        </Stack>

        <Stack gap={2} direction="row" pb={4} px={4}>
          <ButtonClose onClick={handleClose} />
          <ButtonSave />
        </Stack>
      </Stack>
    </DrawerCustom>
  );
}
