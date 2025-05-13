// components/MainContent.js
import React, { useState } from "react";
import "../styles/MainContent.css";
import { FaCloudRain, FaSatellite, FaArchive, FaBook } from "react-icons/fa";

function MainContent() {
  const [selectedImage, setSelectedImage] = useState("/img/airmas.png");

  const handleImageClick = (imagePath) => {
    setSelectedImage(imagePath);
  };

  return (
    <div className="main-content">
      <div className="sidebar">
        {/* Meteosat-8 Channel Imagery */}
        <div className="category">
          <h2>
            <FaSatellite className="category-icon" /> Meteosat-8 Channel Imagery
          </h2>
          <div className="links-grid">
            <a
              href="#"
              onClick={() => handleImageClick("/img/ir3d.png")}
              title="Infrared10.8-3Dimensional"
            >
              IR-10.8(3D-View)
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/cir108.png")}
              title="Infrared10.8-colorized"
            >
              IR-10.8(Troll)
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/vis6.png")}
              title="Visible0.6"
            >
              VIS-0.6*
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/vis8.png")}
              title="Visible0.8"
            >
              VIS-0.8*
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/ir16.png")}
              title="Infrared1.6"
            >
              IR-1.6*
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/ir39.png")}
              title="Infrared3.9"
            >
              IR-3.9
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/ir87.png")}
              title="Infrared8.7"
            >
              IR-8.7
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/ir97.png")}
              title="Infrared9.7"
            >
              IR-9.7
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/ir108.png")}
              title="Infrared10.8"
            >
              IR-10.8
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/ir120.png")}
              title="Infrared12.0"
            >
              IR-12.0
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/ir134.png")}
              title="Infrared13.4"
            >
              IR-13.4
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/wv62.png")}
              title="Watervapor6.2"
            >
              WV-6.2
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/wv73.png")}
              title="Watervapor7.3"
            >
              WV-7.3
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/lightnAniIITM.gif")}
              title="Lightning"
            >
              Lightning
            </a>
          </div>

          <div className="full-disk-links">
            <a
              href="/img/fulldisk108.png"
              target="_blank"
              rel="noopener noreferrer"
              title="Infrared10.8-FullDisk"
            >
              IR-Full Disk
            </a>
            <a
              href="/img/fulldiskHRV.png"
              target="_blank"
              rel="noopener noreferrer"
              title="HRV-FullDisk"
            >
              HRV*
            </a>
            <a
              href="/img/fulldiskcir.png"
              target="_blank"
              rel="noopener noreferrer"
              title="HRV-FullDisk"
            >
              Full Disk(Troll)
            </a>
          </div>
        </div>

        {/* Himawari Channel Imagery */}
        <div className="category">
          <h2>
            <FaSatellite className="category-icon" /> Himawari Channel Imagery
          </h2>
          <div className="links-grid">
            <a
              href="/img/fulldiskAHI.png"
              target="_blank"
              rel="noopener noreferrer"
              title="Infrared10.4-FullDiskAHI"
            >
              IR-Full Disk
            </a>
            <a
              href="/img/BoBani.gif"
              target="_blank"
              rel="noopener noreferrer"
              title="AHI-BoB"
            >
              IR-BoB-region
            </a>
          </div>
        </div>

        {/* Meteosat-8 RGB Products */}
        <div className="category">
          <h2>
            <FaCloudRain className="category-icon" /> Meteosat-8 RGB Products
          </h2>
          <div className="links-grid">
            <a
              href="#"
              onClick={() => handleImageClick("/img/airmas.png")}
              title="Air Mass"
            >
              Air Mass
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/conv.png")}
              title="Convective Activity"
            >
              Convection*
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/daymicrop.png")}
              title="DayMicroPhysics"
            >
              Day-Microphysics*
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/nfog.png")}
              title="Night Fog"
            >
              Night Fog
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/dst.png")}
              title="Dust"
            >
              Dust
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/rgb.png")}
              title="RGB Color Composite"
            >
              RGB_IR
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/truecolor.png")}
              title="True Color Image"
            >
              True Colour*
            </a>
          </div>
        </div>

        {/* Additional Links */}
        <div className="category">
          <div className="additional-links">
            <a
              href="/archive"
              target="_blank"
              rel="noopener noreferrer"
              className="special-link"
            >
              <FaArchive className="link-icon" /> ARCHIVE
            </a>
            <a
              href="/Guide/METEOSAT-8_RGB_interpretation_guideV1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="special-link"
            >
              <FaBook className="link-icon" /> User Guide
            </a>
            <a
              href="http://foreignsat.imd.gov.in:8085"
              target="_blank"
              rel="noopener noreferrer"
            >
              GEFS
            </a>
            <a
              href="#"
              onClick={() => handleImageClick("/img/groundln.png")}
              title="Lightning in last 3 hour"
            >
              Lightning(3hours)
            </a>
          </div>
          <p className="note">* Not to be used in Night time</p>
        </div>
      </div>

      <div className="image-viewer">
        <img src={selectedImage} alt="Weather Imagery" />
      </div>
    </div>
  );
}

export default MainContent;
