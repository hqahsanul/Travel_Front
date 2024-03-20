import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const DataNotFoundAlert = ({ message }) => {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    title: message,
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
  });

  return null; // Since this component is only for showing the alert, return null to render nothing
};

export default DataNotFoundAlert;
