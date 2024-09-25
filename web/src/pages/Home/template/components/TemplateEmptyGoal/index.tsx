import ImgEmptyGoal from "@/assets/empty-goal.svg";
import ImgLogo from "@/assets/logo.svg";
import { Box, Button, Stack, Typography } from "@mui/material";

type ITemplateEmptyGoalProps = {
  onClickOpenModal: () => void;
};

export function TemplateEmptyGoal(props: ITemplateEmptyGoalProps) {
  return (
    <Stack alignItems="center">
      <Stack
        gap={2}
        flex={1}
        minHeight={"100vh"}
        width={{
          xs: "100%",
          sm: "50%",
        }}
        p={8}
        alignItems="center"
        justifyContent="center"
      >
        <Box component="img" src={ImgLogo} mb={4} />

        <Box component="img" src={ImgEmptyGoal} mb={4} />

        <Typography maxWidth={400} textAlign="center">
          Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
          mesmo?
        </Typography>

        <Button
          variant="contained"
          color="primary"
          startIcon={null}
          onClick={() => props.onClickOpenModal()}
        >
          Cadastrar Meta
        </Button>
      </Stack>
    </Stack>
  );
}
