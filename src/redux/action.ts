export const CHANGE_IDIOM = "CHANGE_IDIOM";
export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";

export const changeIdiom = (payload: string) => ({
  type: CHANGE_IDIOM,
  payload,
});

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});
