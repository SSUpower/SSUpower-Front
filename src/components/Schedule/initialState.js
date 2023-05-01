export const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

export const timeSlots = [];

for (let i = 9; i <= 19; i++) {
  for (let j = 0; j < 60; j += 30) {
    const hour = i % 12 === 0 ? 12 : i % 12;
    const minute = j === 0 ? "00" : j;
    const period = i < 12 ? "AM" : "PM";
    const time = `${hour}:${minute} ${period}`;
    timeSlots.push(time);
  }
}

const initialState = {
  schedule: daysOfWeek.reduce((acc, day) => {
    acc[day] = timeSlots.reduce((acc, time) => {
      acc[time] = {
        subject: "",
        room: "",
      };
      return acc;
    }, {});
    return acc;
  }, {}),
  subject: "",
  room: "",
};

export default initialState;
