import { WELCOME_USER } from "../reducer_types";

export const welcome_user = () => ({
  type: WELCOME_USER,
  payload: {
    welcomed: true,
  },
});
