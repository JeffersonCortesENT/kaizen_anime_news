import Swal from 'sweetalert2';

const sweetAlert = {
  success: (title, text) => {
    return Swal.fire({
      title,
      text,
      icon: 'success',
      confirmButtonText: 'OK',
    });
  },
  error: (title, text) => {
    return Swal.fire({
      title,
      text,
      icon: 'error',
      confirmButtonText: 'Reload page?',
    });
  },
  // Add more custom functions as needed
};

export default sweetAlert;