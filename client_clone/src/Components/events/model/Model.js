"use client";
import React, { useState } from "react";
import styles from "./model.module.css";
import CloseIcon from "@mui/icons-material/Close";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Model = ({ onClose, onSave }) => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const dayToday = year + "-" + month + "-" + day;
  const now = new Date();
  const yearHour = now.getFullYear();
  const monthHour = (now.getMonth() + 1).toString().padStart(2, "0");
  const dayHour = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const dateTimeString = `${yearHour}-${monthHour}-${dayHour}T${hours}:${minutes}`;
  const [value2, setValue2] = React.useState(dayjs(dateTimeString));
  const [value, setValue] = React.useState(dayjs(dayToday));
  const [file, setFile] = useState("");
  const handleFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const [meet, setMeet] = React.useState("");
  const [see, setSee] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [nameEvent, setNameEvent] = React.useState("");
  const check =
    nameEvent !== "" &&
    meet !== "" &&
    meet !== "None" &&
    see !== "" &&
    see !== "None" &&
    desc !== "";
  
  const handleNameEvent = (e) => {
    setNameEvent(e.target.value);
  };
  const handleChangeSee = (event) => {
    setSee(event.target.value);
  };
  const handleChange = (event) => {
    setMeet(event.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleSave = () => {
    if (check) {
      const eventData = {
        nameEvent,
        meet,
        see,
        desc,
        file,
        startDate: value,
        startTime: value2,
      };
      onSave(eventData);
      onClose();
    } 
  };

  return (
    <div className={styles.container}>
      <div className={styles.popper}>
        <div className={styles.boxHeader}>
          <div className={styles.header}>
            <h4>Tạo sự kiện</h4>
            <div className={styles.headerIcon} onClick={onClose}>
              <CloseIcon />
            </div>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.boxMain}>
            {file === "" ? (
              <div className={styles.nullFile}></div>
            ) : (
              <img src={file} className={styles.imgFile} />
            )}
            <input
              type="file"
              className={styles.inputFile}
              onChange={handleFile}
              id="inputFile"
            />
            <label htmlFor="inputFile" className={styles.labelFile}>
              <LibraryAddIcon />
              <p>Thêm</p>
            </label>
          </div>
          <div className={styles.boxContent}>
            <input
              className={styles.nameInput}
              value={nameEvent}
              onChange={handleNameEvent}
              placeholder="Tên sự kiện"
            />
            <div className={styles.contentDay}>
              <DemoContainer components={["DatePicker", "DatePicker"]}>
                <DatePicker
                  label="Ngày bắt đầu"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
              </DemoContainer>
              <div className={styles.hour}>
                <TimeField
                  label="Giờ bắt đầu"
                  value={value2}
                  onChange={(newValue) => setValue2(newValue)}
                  className={styles.boxHour}
                />
              </div>
            </div>
            <div className={styles.meet}>
              <FormControl
                sx={{ m: 1, minWidth: "100%" }}
                className={styles.formMeet}
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Trực tiếp hay trên mạng
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={meet}
                  onChange={handleChange}
                  autoWidth
                  label="Trực tiếp hay trên mạng"
                >
                  <MenuItem value="None">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Trực tiếp">Trực tiếp</MenuItem>
                  <MenuItem value="Trên mạng">Trên mạng</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={styles.see}>
              <FormControl
                sx={{ m: 1, minWidth: "100%" }}
                className={styles.formMeet}
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  Ai có thể nhìn thấy sự kiện này
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={see}
                  onChange={handleChangeSee}
                  autoWidth
                  label="Ai có thể nhìn thấy sự kiện này"
                >
                  <MenuItem value="None">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Bạn bè">Bạn bè</MenuItem>
                  <MenuItem value="Riêng tư">Riêng tư</MenuItem>
                  <MenuItem value="Nhóm">Nhóm</MenuItem>
                  <MenuItem value="Công khai">Công khai</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                }}
                className={styles.inputDesc}
              >
                <TextField
                  fullWidth
                  label="Hãy mô tả chi tiết về sự kiện"
                  id="fullWidth"
                  value={desc}
                  onChange={handleDesc}
                />
              </Box>
            </div>
          </div>
        </div>
        <div className={styles.boxFooter}>
          <div className={`${styles.footer} ${check ? "" : styles.footerDis}`}>
            <button onClick={handleSave}>Lưu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
