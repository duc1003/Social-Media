"use client";
import React, { useState } from "react";
import styles from "./hideDay.module.css";
import CloseIcon from "@mui/icons-material/Close";
import CreateIcon from "@mui/icons-material/Create";
import CustomDatePicker from "../../../Components/memories/customSelect/CustomSelect";

const Page = () => {
  const [startDay, setStartDay] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");

  const [endDay, setEndDay] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");

  const [hideBox,setHideBox] = useState(true);
  const handleMemoriesDay = () => {
    const startDate = `${startDay}/${startMonth}/${startYear}`;
    const endDate = `${endDay}/${endMonth}/${endYear}`;
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    setHideBox(true)
  };
  const handleCancel = ()=>{
    setHideBox(true)
  }
  const handleAdd = () =>{
    setHideBox(false)
  }
  const handleEdit = ()=>{
    if(hideBox){
      setHideBox(false)
    }
  }
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Ẩn Kỷ niệm về khoảng ngày</h4>
      <p className={styles.content}>
        Hãy cho biết có ngày hoặc khoảng ngày cụ thể nào mà bạn không muốn thấy
        trong kỷ niệm của mình không.
      </p>
      {/* time */}
      <div className={styles.boxTime}>
        <p><span>11/06/2024</span> đến <span>11/06/2024</span></p>
        <span className={styles.itemIcon}>
          <CloseIcon />
          <CreateIcon  onClick = {handleEdit} />
        </span>
      </div>
      {/* nút */}
      {hideBox ? <button onClick={handleAdd}>Thêm khoảng ngày mới</button> :<div></div>}

      {/* box */}
      <div className={`${styles.customSelect } ${hideBox ?styles.active: ''}`}>
        <h5>Ngày bắt đầu</h5>
        <CustomDatePicker
          selectedDay={startDay}
          setSelectedDay={setStartDay}
          selectedMonth={startMonth}
          setSelectedMonth={setStartMonth}
          selectedYear={startYear}
          setSelectedYear={setStartYear}
        />
        <h5>Ngày kết thúc</h5>
        <CustomDatePicker
          selectedDay={endDay}
          setSelectedDay={setEndDay}
          selectedMonth={endMonth}
          setSelectedMonth={setEndMonth}
          selectedYear={endYear}
          setSelectedYear={setEndYear}
        />
        <div className={`${styles.customSelectButton}`}>
          <button onClick={handleCancel}>Hủy</button>
          <button onClick={handleMemoriesDay}>Lưu</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
