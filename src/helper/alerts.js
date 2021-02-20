const { default: Swal } = require("sweetalert2")

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
})

module.exports = {
    toast,
}