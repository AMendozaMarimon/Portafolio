import { CHANGE_IDIOM } from './action';

interface SetIdiomAction {
    type: typeof CHANGE_IDIOM;
    payload: string;
  }
  
  type ActionType = SetIdiomAction;
  
  const INITIAL_STATE = {
    idiom: 'ES',
  };

  console.log(INITIAL_STATE)
  
  export default function rootReducer(state = INITIAL_STATE, action: ActionType) {
    const { type, payload } = action;
  
    switch (type) {
      case CHANGE_IDIOM:
        return {
          ...state,
          idiom: payload
        };
      default:
        return state;
    }
  }
  