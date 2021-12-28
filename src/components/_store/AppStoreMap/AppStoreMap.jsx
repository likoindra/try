import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./storeMap.css";
import { Button } from "@mui/material";

import map_dummy from "../../../assets/images/map-rec.png";
import PublishIcon from "@mui/icons-material/Publish";
function AppStoreMap() {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file) => (
    <div key={files.name}>
      <div>
        <img
          src={file.preview}
          style={{ width: 300, height: 170 }}
          alt="preview"
        />
      </div>
    </div>
  ));
  return (
    <div className="container__map-store">
      <div className="wrapper__container-map-store">
        <div className="wrapper__map-store">
          <img src={map_dummy} alt="" />
        </div>
        <div className="wrapper__search-icon">
          <input type="text" placeholder="" />
          <i className="bx bx-search"></i>
        </div>
      </div>
      <div className="main__container-bottom">
        <div className="container__items-bottom">
          <span> Coordinate</span>
          <input type="text" />
        </div>
        <div className="container__items-bottom-2">
          <div className="container__store-name">
            <span>Store Name</span>
            <input type="text" />
          </div>
          <div className="container__owner">
            <span> Owner</span>
            <input type="text" />
          </div>
        </div>
        <div className="container__phone-number">
          <span> Phone Number</span>
          <input type="number" />
        </div>
        {images.length ? (
          <div {...getRootProps()}>
            {images}
            <input type="text" {...getInputProps()} />
          </div>
        ) : (
          <div className="container__upload-image">
            <div className="wrapper__upload-image" {...getRootProps()}>
              <input type="text" {...getInputProps()} />
              <div className="box__input-image">
                <span>Upload Image Here</span>
                <div className="box__input-file">
                  <span>File must JPG or PNG</span>
                </div>
                <div className="box__input-or">
                  <span> OR </span>
                </div>
                <div className="container__input-image">{images}</div>
                <div className="box__input-button">
                  <Button>
                    <span>Browse File</span>
                    <PublishIcon />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="button__bottom-left">
          <Button className="button__bottom-main">
            <span>Save</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AppStoreMap;
