import React, { useState } from "react";
import "./ClientEditMenu.css";

import { useDropzone } from "react-dropzone";
import PublishIcon from "@mui/icons-material/Publish";
import { Button } from "@mui/material";
export default function ClientEditMenu() {
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
    <div className="container-client-edit-menu">
      <div className="wrapper-add-menu-client">
        <div className="item-row-add-menu-item">
          <div className="container-row-add-menu-item">
            <span>Client Name</span>
            <input type="text" style={{ width: 402 }} />
          </div>
          <div className="container-row-add-menu-item">
            <span>Adress</span>
            <input type="text" style={{ width: 609 }} />
          </div>
        </div>
        <div
          className="item-row-add-menu-item"
          style={{
            paddingTop: 24,
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div className="container-row-add-menu-item">
            <span>Contact</span>
            <input type="number" style={{ width: 292 }} />
          </div>
          <div className="container-row-add-menu-item">
            <span>Join Date</span>
            <input type="text" style={{ width: 240 }} />
          </div>
        </div>
        {images.length ? (
          <div
            {...getRootProps()}
            style={{ paddingTop: 40, paddingBottom: 20 }}
          >
            {images}
            <input type="text" {...getInputProps()} />
          </div>
        ) : (
          <div className="container__upload-image-client-menu">
            <div
              className="wrapper__upload-image-client-menu"
              {...getRootProps()}
            >
              <input type="text" {...getInputProps()} />
              <div className="box__input-image-client-menu">
                <span>Upload Image Here</span>
                <div className="box__input-file-client-menu">
                  <span>File must JPG or PNG</span>
                </div>
                <div className="box__input-or-client-menu">
                  <span> OR </span>
                </div>
                <div className="container__input-image-client-menu">
                  {images}
                </div>
                <div className="box__input-button-client-menu">
                  <Button>
                    <span>Browse File</span>
                    <PublishIcon />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="button-item-add-menu-item-client-menu">
          <Button className="button__bottom-main-client-menu">
            <span>Save</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
