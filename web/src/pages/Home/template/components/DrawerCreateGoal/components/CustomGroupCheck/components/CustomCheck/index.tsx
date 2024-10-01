import { Radio, Stack, Typography } from "@mui/material";

export type ICheckProps = {
  [key: number]: boolean;
};

type ICustomCheckProps = {
  index: number;
  checked: ICheckProps;
  setChecked: (value: ICheckProps) => void;
};

export function CustomCheck(props: ICustomCheckProps) {
  function iconCkecked(index: number) {
    switch (index) {
      case 1:
        return "🥱";
      case 2:
        return "🙂";
      case 3:
        return "😎";
      case 4:
        return "😜";
      case 5:
        return "🤨";
      case 6:
        return "🤯";
      case 7:
        return "🔥";
      default:
        return "";
    }
  }

  function handleToggleCheck(index: number) {
    const newChecked = { ...props.checked };

    for (let i = 1; i <= 7; i++) {
      newChecked[i] = i <= index;
    }

    props.setChecked(newChecked);
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      flex={1}
      maxHeight={50}
      bgcolor={props.checked[props.index] ? "#ec489a1b" : "#18181B"}
      border={
        props.checked[props.index] ? "1px solid #EC4899" : "1px solid #18181B"
      }
      borderRadius={2}
      px={2}
      onClick={() => handleToggleCheck(props.index)}
      sx={{
        cursor: "pointer",
        "&:hover": {
          border: props.checked[props.index]
            ? "1px solid #cfb1c0"
            : "1px solid #EC4899",
        },
      }}
    >
      <Radio
        color="secondary"
        checked={props.checked[props.index]}
        value={props.index}
        name={`radio-${props.index}`}
        inputProps={{ "aria-label": `${props.index}x na semana` }}
        sx={{
          pointerEvents: "none",
        }}
      />

      {props.index === 7 ? (
        <Typography>Todos os dias da semana</Typography>
      ) : (
        <Typography>{props.index}x na semana</Typography>
      )}

      {iconCkecked(props.index)}
    </Stack>
  );
}
