import { Chip, useTheme } from "@mui/material";
import { currentRoleFocus } from "@/constants/currentFocus";
import RolePanel from "./RolePanel";

const CurrentFocus = () => {
  const theme = useTheme();

  return (
    <RolePanel
      data={currentRoleFocus}
      badge={
        <Chip
          label="Currently"
          size="small"
          sx={{
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
            fontSize: "0.7rem",
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            color: theme.palette.primary.contrastText,
          }}
        />
      }
    />
  );
};

export default CurrentFocus;
