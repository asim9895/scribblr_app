// themeReducer.js

import { light, dark, Colors } from "../../theme/colors";
import { SET_THEME } from "../reducer_types";

interface InitialState {
  colors: Colors;
  theme: string;
}

const initialState: InitialState = {
  colors: light, // Default to light theme
  theme: "light", // Default to light theme
};

export const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        colors: action.payload.colors,
        theme: action.payload.theme,
      };
    default:
      return state;
  }
};
