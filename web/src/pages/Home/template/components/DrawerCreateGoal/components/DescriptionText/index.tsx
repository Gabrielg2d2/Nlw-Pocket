import { Typography } from "@mui/material";

type IDescriptionTextProps = {
  children: React.ReactNode;
};

export function DescriptionText(props: IDescriptionTextProps) {
  return (
    <Typography
      variant="body1"
      style={{
        color: "#A1A1AA",
      }}
    >
      {props.children}
    </Typography>
  );
}
