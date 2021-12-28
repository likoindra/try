import React from "react";
import "./ClientUserSettingsMenu.css";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function ClientUserSettingsMenu() {
  return (
    <div className="client-user-settings-menu">
      <div className="wrapper-user-settings-menu">
        <div className="title-user-settings-menu">
          <span> Employee Setting</span>
        </div>
        <div>
          <hr style={{ width: "100%", color: "#ECE6E6", marginBottom: 10 }} />
        </div>
        <div className="wrapper-items-user-menu-settings">
          <div className="container-client-items-menu-settings">
            <div className="items-checkbox-user-settings">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={
                  <span
                    style={{ fontSize: 16, fontWeight: 400, color: "#616161" }}
                  >
                    {" "}
                    Sales Promotion Girl
                  </span>
                }
              />
            </div>
            <div className="items-checkbox-user-settings-right">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={
                  <span
                    style={{ fontSize: 16, fontWeight: 400, color: "#616161" }}
                  >
                    {" "}
                    Sales Promotion Girl
                  </span>
                }
              />
            </div>
          </div>
          <div className="container-client-items-menu-settings">
            <div className="items-checkbox-user-settings">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={
                  <span
                    style={{ fontSize: 16, fontWeight: 400, color: "#616161" }}
                  >
                    {" "}
                    Merchandiser
                  </span>
                }
              />
            </div>
            <div className="items-checkbox-user-settings-right" style={{ paddingRight: 108}}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={
                  <span
                    style={{ fontSize: 16, fontWeight: 400, color: "#616161" }}
                  >
                    {" "}
                    Leader
                  </span>
                }
              />
            </div>
          </div>
          <div className="container-client-items-menu-settings">
            <div className="items-checkbox-user-settings">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={
                  <span
                    style={{ fontSize: 16, fontWeight: 400, color: "#616161" }}
                  >
                    {" "}
                    Product Designer
                  </span>
                }
              />
            </div>
          </div>
          <div className="button-user-settings">
            <button>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
