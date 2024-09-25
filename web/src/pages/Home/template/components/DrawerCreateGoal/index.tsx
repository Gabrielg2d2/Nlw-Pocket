import { Button, Stack } from "@mui/material";
import { DrawerCustom } from "../../../../../components/DrawerCustom";
import { DescriptionText } from "./components/DescriptionText";
import { InputGoal } from "./components/InputGoal";
import { SubTitle } from "./components/SubTitle";

type IDrawerCreateGoalProps = {
  open: boolean;
  close: () => void;
};

export function DrawerCreateGoal({
  open = false,
  close,
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
        </Stack>

        <Stack gap={2} direction="row" pb={4}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#18181B",
            }}
            fullWidth
            onClick={close}
          >
            Fechar
          </Button>

          <Button variant="contained" fullWidth>
            Salvar
          </Button>
        </Stack>
      </Stack>
    </DrawerCustom>
  );
}
