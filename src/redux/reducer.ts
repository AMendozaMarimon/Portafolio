import { CHANGE_IDIOM, TOGGLE_DARK_MODE } from "./action";

interface SetIdiomAction {
  type: typeof CHANGE_IDIOM;
  payload: string;
}

interface ToggleDarkModeAction {
  type: typeof TOGGLE_DARK_MODE;
}

type ActionType = SetIdiomAction | ToggleDarkModeAction;

interface State {
  idiom: string;
  darkMode: boolean;
}

const INITIAL_STATE: State = {
  idiom: 'ES',
  darkMode: false,
};

export default function rootReducer(state = INITIAL_STATE, action: ActionType) {
  const { type, payload } = action as never;

  switch (type) {
    case CHANGE_IDIOM:
      return {
        ...state,
        idiom: payload,
      };
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
}
