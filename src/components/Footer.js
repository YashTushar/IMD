// components/Footer.js
import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        Acknowledgement: The data has been received through EUMETSAT's EUMETCAST
        service at the National Centre for Medium Range Weather Forecasting
        (NCMRWF) through the National Knowledge Network (NKN) infrastructure,
        under the license agreement with the India Meteorological Department
        (IMD). The data has been processed using the PyTroll Software Project at
        NCMRWF. Any unauthorized or commercial use will be a violation of
        Copyrights Act and is a punishable offence.
      </p>
    </footer>
  );
}

export default Footer;
