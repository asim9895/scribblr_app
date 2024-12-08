import { WELCOME_USER } from "../reducer_types";

interface InitialState {
  welcomed: boolean;
}

const initialState: InitialState = {
  welcomed: false,
};

export const welcomeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case WELCOME_USER:
      return {
        ...state,
        welcomed: action.payload.welcomed,
      };
    default:
      return state;
  }
};
