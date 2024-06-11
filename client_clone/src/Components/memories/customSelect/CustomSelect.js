'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from './CustomSelect.module.css';

const CustomSelect = ({ label, options, selectedValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.customSelect} ref={selectRef}>
      <span className={styles.selectedValue} onClick={toggleDropdown}>
        {selectedValue || label}
      </span>
      {isOpen && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li
              key={option.value}
              className={styles.option}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const CustomDatePicker = ({ selectedDay, setSelectedDay, selectedMonth, setSelectedMonth, selectedYear, setSelectedYear }) => {
  const [days, setDays] = useState([]);
  const [months] = useState(
    [...Array(12).keys()].map((i) => ({ value: i + 1, label: `Tháng ${i + 1}` }))
  );
  const [years] = useState([...Array(20).keys()].map((i) => ({ value: i + 2005, label: i + 2005 })));

  useEffect(() => {
    const today = new Date();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth() + 1; // getMonth() trả về giá trị từ 0 đến 11
    const todayYear = today.getFullYear();

    setSelectedDay(todayDay);
    setSelectedMonth(todayMonth);
    setSelectedYear(todayYear);

    const daysCount = daysInMonth(todayMonth, todayYear);
    setDays([...Array(daysCount).keys()].map((i) => ({ value: i + 1, label: i + 1 })));
  }, [setSelectedDay, setSelectedMonth, setSelectedYear]);

  useEffect(() => {
    if (selectedMonth && selectedYear) {
      const daysCount = daysInMonth(selectedMonth, selectedYear);
      setDays([...Array(daysCount).keys()].map((i) => ({ value: i + 1, label: i + 1 })));
    }
  }, [selectedMonth, selectedYear]);

  return (
    <div className={styles.customDatePicker}>
      <CustomSelect
        label="Ngày"
        options={days}
        selectedValue={selectedDay}
        onSelect={setSelectedDay}
      />
      <CustomSelect
        label="Tháng"
        options={months}
        selectedValue={months.find(m => m.value === selectedMonth)?.label}
        onSelect={setSelectedMonth}
      />
      <CustomSelect
        label="Năm"
        options={years}
        selectedValue={selectedYear}
        onSelect={setSelectedYear}
      />
    </div>
  );
};

export default CustomDatePicker;


