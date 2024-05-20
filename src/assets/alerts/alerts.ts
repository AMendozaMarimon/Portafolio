import { enqueueSnackbar } from "notistack";

export const DonwloadPDFNotification = () => {
    enqueueSnackbar("Cv Downloaded", {
        variant: "success",
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
        },
    });
};