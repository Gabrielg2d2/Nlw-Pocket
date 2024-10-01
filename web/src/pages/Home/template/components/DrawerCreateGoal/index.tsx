import { Stack } from "@mui/material";
import { DrawerCustom } from "../../../../../components/DrawerCustom";
import { ButtonClose } from "./components/ButtonClose";
import { ButtonSave } from "./components/ButtonSave";
import { CustomGroupCheck, ICheckProps } from "./components/CustomGroupCheck";
import { DescriptionText } from "./components/DescriptionText";
import { InputGoal } from "./components/InputGoal";
import { SubTitle } from "./components/SubTitle";

type IDrawerCreateGoalProps = {
  open: boolean;
  close: () => void;
  checked: ICheckProps;
  setChecked: (value: ICheckProps) => void;
};

export function DrawerCreateGoal({
  open = false,
  close,
  checked,
  setChecked,
}: IDrawerCreateGoalProps) {
  return (
    <DrawerCustom title="Cadastrar meta" open={open} close={close}>
      <Stack gap={2} height="100%">
        <DescriptionText>
          Adicione atividades que te fazem bem e que você quer continuar
          praticando toda semana.
        </DescriptionText>

        <Stack flex={1} gap={2}>
          <SubTitle>Qual a atividade?</SubTitle>

          <InputGoal />

          <SubTitle>Quantas vezes na semana?</SubTitle>

          <CustomGroupCheck checked={checked} setChecked={setChecked} />
        </Stack>

        <Stack gap={2} direction="row" pb={4} px={4}>
          <ButtonClose onClick={close} />
          <ButtonSave />
        </Stack>
      </Stack>
    </DrawerCustom>
  );
}
