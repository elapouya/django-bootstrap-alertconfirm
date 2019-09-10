function bootstrapConfirmDialog(message, handler) {
    // set message
    $("#BootstrapConfirmDialogModal .confirm-message").html(message);

    //Trigger the modal
    $("#BootstrapConfirmDialogModal").modal({
        backdrop: 'static',
        keyboard: false
    });

    // If OK button pressed, pass true to a callback function
    $("#BootstrapConfirmDialogModal .btn-yes").off('click');
    $("#BootstrapConfirmDialogModal .btn-yes").on('click',function () {
        handler(true);
        $("#BootstrapConfirmDialogModal").modal("hide");
    });

    //If CANCEL button pressed, pass false to callback function
    $("#BootstrapConfirmDialogModal .btn-no").off('click');
    $("#BootstrapConfirmDialogModal .btn-no").on('click', function () {
        handler(false);
        $("#BootstrapConfirmDialogModal").modal("hide");
    });
}


function bootstrapAlert(message) {
    // set message
    $("#BootstrapAlertDialogModal .alert-message").html(message);

    //Trigger the modal
    $("#BootstrapAlertDialogModal").modal({
        backdrop: 'static',
        keyboard: false
    });
}