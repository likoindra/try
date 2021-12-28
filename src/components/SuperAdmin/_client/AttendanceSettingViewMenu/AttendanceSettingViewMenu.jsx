import React, { useState } from "react";

import { Switch, Checkbox } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TimePickerComponent from "../../../SuperAdmin/_attendance/time-picker/TimePickerComponent";

let Modal = (
  <div className="container-modal-add-scheme">
    <div className="wrapper-modal-add-scheme">
      <div className="card-pagi">
        <Checkbox />
        <span>Morning</span>
        <div className="container__time-picker">
          <TimePickerComponent />
          <span>to</span>
          <TimePickerComponent />
        </div>
      </div>
      <div className="card-pagi">
        <Checkbox />
        <span>Midle</span>
        <div className="container__time-picker">
          <TimePickerComponent />
          <span>to</span>
          <TimePickerComponent />
        </div>
      </div>
      <div className="card-pagi">
        <Checkbox />
        <span>Noon</span>
        <div className="container__time-picker">
          <TimePickerComponent />
          <span>to</span>
          <TimePickerComponent />
        </div>
      </div>
    </div>
  </div>
);

let ModalKeterlambatan = (
  <div className="container-modal-keterlambatan">
    <div className="wrapper-modal-keterlambatan">
      <div className="card-max">
        <div className="main-text-keterlambatan">
          <span>Set your max late</span>
        </div>
        <div className="item-sub-keterlambatan">
          <span className="box-input">
            <input type="number" />
            Minutes
          </span>
        </div>
      </div>
    </div>
  </div>
);

let ModalCutOff = (
  <div className="container-modal-keterlambatan">
    <div className="wrapper-modal-keterlambatan">
      <div className="card-max">
        <div className="main-text-keterlambatan">
          <span>From Date</span>
        </div>
        <div className="item-sub-keterlambatan">
          <span className="box-input">
            <input type="number" />
          </span>
        </div>
        <div className="main-text-keterlambatan">
          <span>To</span>
        </div>
        <div className="item-sub-keterlambatan">
          <span className="box-input">
            <input type="number" />
          </span>
        </div>
        <div className="main-text-keterlambatan">
          <span>Next Month</span>
        </div>
      </div>
      <div className="note-text-cutoff">* Absen Calculation</div>
    </div>
  </div>
);
export default function AttendanceSettingViewMenu() {
  const [listed, setListed] = useState({
    shown: true,
  });
  const [lembur, setLembur] = useState(true);
  const [cuti, setCuti] = useState(true);
  const [off, setOff] = useState(true);
  const [izin, setIzin] = useState(true);
  const [lockLokasi, setLockLokasi] = useState(true);
  const [jamKerja, setJamKerja] = useState(true);
  const [cutOff, setCutOff] = useState({
    cutOff: true,
  });

  const [keterlambatan, setKeterlambatan] = useState({
    keterlambatan: true,
  });
  const [wfh, setWfh] = useState(true);

  const handleChange = (event) => {
    setListed(event.target.checked);
  };
  const handleLembur = (event) => {
    setLembur(event.target.checked);
  };
  const handleCuti = (event) => {
    setCuti(event.target.checked);
  };
  const handleOff = (event) => {
    setOff(event.target.checked);
  };
  const handIzin = (event) => {
    setIzin(event.target.checked);
  };
  const handleLockLokasi = (event) => {
    setLockLokasi(event.target.checked);
  };
  const handleJamKerja = (event) => {
    setJamKerja(event.target.checked);
  };
  const handleIzin = (event) => {
    setIzin(event.target.checked);
  };
  const handleKeterlambatan = (event) => {
    setKeterlambatan(event.target.checked);
  };
  const handleWfh = (event) => {
    setWfh(event.target.checked);
  };
  const handleCutOff = (event) => {
    setCutOff(event.target.checked);
  };
  return (
    <div className="container__add-scheme">
      <div className="wrapper__form-add-scheme">
        <div className="box__form-add-scheme">
          <span>Scheme Name</span>
          <label style={{ paddingTop: 10 }}>Scheme 1</label>
        </div>
        <div className="box__form-add-scheme-desc">
          <span>Description</span>

          <label style={{ paddingTop: 10 }}>
            View Setting for user your clients
          </label>

          {/* <input type="text" /> */}
        </div>
      </div>
      <div className="main__add-scheme">
        <div className="wrapper__main-add-scheme">
          <span>Shifting</span>
          <Switch
            disabled
            checked={listed}
            onChange={handleChange}
            size="large"
            onClick={() => setListed({ shown: !listed.shown })}
          />
        </div>
        {listed ? Modal : null}
        <div className="wrapper__main-add-scheme">
          <span>Overtime</span>
          <Switch
            checked={lembur}
            onChange={handleLembur}
            size="large"
            disabled
          />
        </div>
        <div className="wrapper__main-add-scheme">
          <span>Paid Leave</span>
          <Switch checked={cuti} onChange={handleCuti} size="large" disabled />
        </div>
        <div className="wrapper__main-add-scheme">
          <span>Permit</span>
          <Switch checked={off} onChange={handleOff} size="large" disabled />
        </div>
        {/* <div className="wrapper__main-add-scheme">
            <span>Izin</span>
            <Switch checked={izin} onChange={handleIzin} size="large" />
          </div> */}
        <div className="wrapper__main-add-scheme">
          <span>Lock Location</span>
          <Switch
            checked={lockLokasi}
            onChange={handleLockLokasi}
            size="large"
            disabled
          />
        </div>
        <div className="wrapper__main-add-scheme">
          <span>Work Hour Total</span>
          <Switch
            checked={jamKerja}
            onChange={handleJamKerja}
            size="large"
            disabled
          />
        </div>
        <div className="wrapper__main-add-scheme">
          <span>Lateness</span>
          <Switch
            disabled
            checked={keterlambatan}
            onChange={handleKeterlambatan}
            size="large"
            onClick={() =>
              setKeterlambatan({ keterlambatan: !keterlambatan.keterlambatan })
            }
          />
        </div>
        {keterlambatan ? ModalKeterlambatan : null}
        {/*  */}
        <div className="wrapper__main-add-scheme">
          <span>WFH</span>
          <Switch checked={wfh} onChange={handleWfh} size="large" />
        </div>
        <div className="wrapper__main-add-scheme">
          <span>Cut Off</span>
          <Switch
            checked={cutOff}
            onChange={handleCutOff}
            size="large"
            onClick={() => setCutOff({ cutOff: !cutOff.cutOff })}
            disabled
          />
        </div>
        {cutOff ? ModalCutOff : null}
        <div style={{ paddingBottom: 20, paddingTop: 20 }}>
          <hr />
        </div>
        {/* <div className="button-save-adds-scheme">
          <button>Save</button>
        </div> */}
      </div>
    </div>
  );
}
