import { Typography } from "@mui/material";

type ISubTitleProps = {
  children: React.ReactNode;
};

export function SubTitle(props: ISubTitleProps) {
  return (
    <Typography fontSize={14} variant="subtitle1" fontWeight="bold">
      {props.children}
    </Typography>
  );
}
