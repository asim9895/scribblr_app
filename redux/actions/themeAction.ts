import { Colors } from "@/theme/colors";
import { SET_THEME } from "../reducer_types";

export const set_theme = (
  colors: Colors,
  theme: string | null | undefined
) => ({
  type: SET_THEME,
  payload: {
    colors,
    theme,
  },
});
