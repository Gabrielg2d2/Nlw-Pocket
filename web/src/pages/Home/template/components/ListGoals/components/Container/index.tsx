import { Stack } from "@mui/material";

type IContainerProps = {
  children: React.ReactNode;
};

export function Container(props: IContainerProps) {
  return (
    <Stack
      flex={1}
      p={8}
      minHeight={"100vh"}
      width={"100%"}
      alignItems={"center"}
    >
      {props.children}
    </Stack>
  );
}
