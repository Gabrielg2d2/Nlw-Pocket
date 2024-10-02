import { Stack } from "@mui/material";
import { CustomCheck, ICheckProps } from "./components/CustomCheck";

export type { ICheckProps };

export type ICustomGroupCheck = {
  checked: ICheckProps;
  setChecked: (value: ICheckProps) => void;
};

export function CustomGroupCheck(props: ICustomGroupCheck) {
  return (
    <Stack gap={2}>
      {Object.keys(props.checked).map((_, index) => (
        <CustomCheck
          key={index}
          index={index + 1}
          checked={props.checked}
          setChecked={props.setChecked}
        />
      ))}
    </Stack>
  );
}
