export const CHANGE_IDIOM = 'CHANGE_IDIOM';

export const changeIdiom = (payload: string) => (
    console.log(payload),{
    type: CHANGE_IDIOM,
    payload
})