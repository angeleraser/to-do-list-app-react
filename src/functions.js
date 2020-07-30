export const getDateNow = () => {
  const dateNow = new Date();
  const getFormatedNumber = (n) => (n < 10 ? `0${n}` : n);
  return `${dateNow.getFullYear()}-${getFormatedNumber(
    dateNow.getMonth()
  )}-${getFormatedNumber(dateNow.getDay())}T${getFormatedNumber(
    dateNow.getHours()
  )}:${getFormatedNumber(dateNow.getMinutes())}`;
};

export const getFormatedTime = (str) => {
  const [date, time] = str.split("T");
  const [hr, min] = time.split(":");
  const AM_PM = hr >= 12 ? "pm" : "am";
  let formatedTime;
  if (AM_PM === "pm") {
    formatedTime = `${hr > 12 ? hr - 12 : hr}:${min} ${AM_PM}`;
  } else {
    formatedTime = `${hr}:${min} ${AM_PM}`;
  }
  return `${getFormtedDate(date.split("-"))} / ${formatedTime}`;
};

const getFormtedDate = (date) => {
  const newDate = new Date(date.join("/"));
  const [,,day] = date;
  return `${day} ${getMonthName(newDate.getMonth())} ${newDate.getFullYear()} - ${getDayName(newDate.getDay())}`;
};

const getMonthName = (n) => {
  let month = parseInt(n, 10);
  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthNames[month];
};

const getDayName = (n) => {
  const day = parseInt(n, 10);
  const dayNames = [
    "Monday",
    "Tuesdey",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return dayNames[day - 1];
};

export const storageList = (name, list) => {
  localStorage.setObject(name, list);
};
export const getList = (name) => localStorage.getObject(name);

export const saveIDCounter = (value) => {
  localStorage.setItem("IDCount", value);
};
export const getIDCount = () => localStorage.getItem("IDCount") * 1;
