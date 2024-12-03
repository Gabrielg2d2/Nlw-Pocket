import ImgIconLogo from "@/assets/icon-logo.svg";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

type IListGoalsProps = {
  onClickOpenModal: () => void;
};

const WIDTH_CONTENT_WEB = "80%";

export function ListGoals(props: IListGoalsProps) {
  return (
    <Stack
      flex={1}
      p={8}
      minHeight={"100vh"}
      width={"100%"}
      alignItems={"center"}
    >
      <Stack gap={4} width={WIDTH_CONTENT_WEB} maxWidth={WIDTH_CONTENT_WEB}>
        <Stack
          gap={2}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" gap={2} alignItems="center">
            <Box component="img" src={ImgIconLogo} height={40} />
            <Typography fontSize={20} fontWeight="bold">
              01 a 07 de Dezembro
            </Typography>
          </Stack>

          <Button
            variant="contained"
            color="primary"
            startIcon={
              <AddIcon
                sx={{
                  width: 20,
                  height: 20,
                }}
              />
            }
            onClick={() => props.onClickOpenModal()}
          >
            Cadastrar Meta
          </Button>
        </Stack>

        <LinearProgress
          variant="determinate"
          sx={{
            width: "100%",
            height: 10,
            borderRadius: 10,
            backgroundColor: "#18181b",
          }}
          value={60}
        />

        <Divider
          sx={{
            backgroundColor: "#18181b",
            height: 2,
            my: 2,
          }}
        />
      </Stack>
    </Stack>
  );
}
