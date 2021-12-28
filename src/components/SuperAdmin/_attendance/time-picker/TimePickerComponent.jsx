import React from "react";
import "./TimePicker.css";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Stack from "@mui/material/Stack";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import MobileTimePicker from "@mui/lab/MobileTimePicker";
import DesktopTimePicker from "@mui/lab/DesktopTimePicker";
export default function TimePickerComponent() {
  const [value, setValue] = React.useState(
    new Date("2018-01-01T00:00:00.000Z")
  );
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <TimePicker
            value={value}
            onChange={setValue}
            renderInput={(params) => (
              <TextField size="small" {...params} style={{ width: 150 }} />
            )}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
}
