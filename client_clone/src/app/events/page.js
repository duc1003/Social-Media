"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./events.module.css";
import BoxEvent from "../../Components/events/boxEvent/BoxEvent";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from "@mui/icons-material/Search";
import NearMeIcon from "@mui/icons-material/NearMe";
import LanguageIcon from "@mui/icons-material/Language";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

export default function Events() {
  const [value, setValue] = useState(dayjs("2022-04-17"));
  const [closeCalendar, setCloseCalendar] = useState(false);
  //
  const [openPopper, setOpenPopper] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Vị trí của tôi");
  //search
  const [activeInput, setActiveInput] = useState(0);
  const [cityName, setCityName] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [openFocus, setOpenFocus] = useState(false);
  //calendar
  const calendarRef = useRef(null);
  const popperRef = useRef(null);
  const apiKey = "YwpoqLrxaML5NkwdB7tHiA==sw9XBw5h4HllMXLH";
  const handleLocation = (e) => {
    setSelectedLocation(e);
  };
  const handleOpenCalendar = () => {
    setCloseCalendar(!closeCalendar);
  };

  const handleOpenPopper = () => {
    setOpenPopper(!openPopper);
  };
  const handleFocus = () => {
    setOpenFocus(true);
  };

  //api city
  useEffect(() => {
    if (cityName.length > 0) {
      fetch(`https://api.api-ninjas.com/v1/city?name=${cityName}&country=vn`, {
        method: "GET",
        headers: { "X-Api-Key": apiKey },
        contentType: "application/json",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          return response.json();
        })
        .then((result) => {
          setSuggestions(result);
        })
        .catch((error) => {
          setSuggestions([]);
        });
    } else {
      setSuggestions([]);
    }
  }, [cityName, apiKey]);

  useEffect(() => {
    if (cityName.length > 0) {
      const filtered = suggestions.filter((city) =>
        city.name.toLowerCase().startsWith(cityName.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  }, [cityName, suggestions]);
  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSuggestionClick = (city) => {
    console.log(city);
    setCityName("");
    setFilteredSuggestions([]);
    setOpenPopper(false);
    setSelectedLocation(city.name);
  };
  //

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setCloseCalendar(false);
      }
      if (popperRef.current && !popperRef.current.contains(event.target)) {
        setOpenPopper(false);
        setOpenFocus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  console.log(value);
  return (
    <div className={styles.home}>
      <div className={styles.homeContent}>
        <h4 className={styles.homeTitle}>Khám phá sự kiện</h4>
        <div className={styles.boxFilter}>
          <div className={styles.filter} onClick={handleOpenPopper}>
            <LocationOnIcon className={styles.filterIcon} />
            <p>{selectedLocation}</p>
          </div>
          {openPopper ? (
            <div ref={popperRef} className={styles.filterLocation}>
              <div className={styles.search}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Tìm kiếm theo thành phố"
                  onFocus={handleFocus}
                  value={cityName}
                  onChange={handleInputChange}
                />
                <SearchIcon className={styles.searchIcon} />
                {filteredSuggestions.length > 0 ? (
                  <div className={styles.popperSearch}>
                    {filteredSuggestions.map((city, index) => (
                      <div
                        key={index}
                        className={styles.searchLocation}
                        onClick={() => handleSuggestionClick(city)}
                      >
                        <LocationOnIcon />
                        <p>{city.name}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className={styles.filterRadio}>
                <label
                  htmlFor="filterRadio1"
                  className={styles.boxInputLocation}
                >
                  <label htmlFor="filterRadio1">
                    <NearMeIcon />
                    <p>Vị trí của tôi</p>
                  </label>
                  <input
                    type="radio"
                    id="filterRadio1"
                    style={{ width: "18px" }}
                    name="filterRadio"
                    checked={activeInput === 0}
                    onChange={(e) => {
                      setActiveInput(0);
                      handleLocation("Vị trí của tôi");
                    }}
                  />
                </label>
                <hr />
                <label
                  htmlFor="filterRadio2"
                  className={styles.boxInputLocation}
                  style={{ margin: "0" }}
                >
                  <label htmlFor="filterRadio2">
                    <LanguageIcon />
                    <p>Online</p>
                  </label>
                  <input
                    type="radio"
                    id="filterRadio2"
                    style={{ width: "18px" }}
                    name="filterRadio"
                    checked={activeInput === 1}
                    onChange={(e) => {
                      setActiveInput(1);
                      handleLocation("Online");
                    }}
                  />
                </label>
              </div>
            </div>
          ) : (
            <div className={styles.noneDiv}></div>
          )}
          <div className={styles.filter} onClick={handleOpenCalendar}>
            <CalendarMonthIcon className={styles.filterIcon} />
            <p>Ngày bất kỳ</p>
          </div>
          {closeCalendar ? (
            <div ref={calendarRef} className={styles.calendar}>
              <DateCalendar
                value={value}
                onChange={(newValue) => {
                  console.log(newValue);
                  setValue(newValue);
                }}
                className={styles.calendarDay}
              />
              <button
                onClick={() => setCloseCalendar(false)}
                className={styles.buttonCalendar}
              >
                Áp dụng
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className={styles.boxEvent}>
          <BoxEvent id={"1"} />
          <BoxEvent id={"1"} />
          <BoxEvent id={"1"} />
          <BoxEvent id={"1"} />
          <BoxEvent id={"1"} />
          <BoxEvent id={"1"} />
          <BoxEvent id={"1"} />
        </div>
      </div>
    </div>
  );
}
