import { IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

export type IDrawerCustomProps = {
  open: boolean;
  close: () => void;
  title: string;
  children: React.ReactNode;
};

export function DrawerCustom({
  open = false,
  close,
  title = "Title",
  children,
}: IDrawerCustomProps) {
  return (
    <Drawer
      PaperProps={{
        sx: {
          bgcolor: "background.default",
          borderLeft: "0.5px solid #2E2E2E",
        },
      }}
      anchor={"right"}
      open={open}
      onClose={close}
      sx={{
        backdropFilter: "blur(2px)",
      }}
    >
      <>
        <Box
          role="presentation"
          onKeyDown={close}
          display={"flex"}
          alignItems="center"
          justifyContent="space-between"
          p={2}
        >
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <IconButton
            size="small"
            onClick={close}
            style={{
              color: "#D4D4D8",
            }}
          >
            X
          </IconButton>
        </Box>
        <Box
          flex={1}
          px={2}
          sx={{
            width: {
              xs: window.innerWidth - 20,
              sm: 500,
            },
          }}
        >
          {children}
        </Box>
      </>
    </Drawer>
  );
}
