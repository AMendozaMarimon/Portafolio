export const CHANGE_IDIOM = "CHANGE_IDIOM";

export const changeIdiom = (payload: string) => ({
  type: CHANGE_IDIOM,
  payload,
});
