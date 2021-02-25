const { default: Swal } = require("sweetalert2")

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    showCloseButton: true,
    timer: 3000,
});

const showError = (err) => {
    if (err instanceof Promise) {
        err.then(res => {
            if (res && res.msg)
                toast.fire({
                    title: res.msg,
                    icon: 'error',
                });
        });

    }
};

module.exports = {
    toast,
    showError,
}