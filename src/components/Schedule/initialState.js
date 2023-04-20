export const daysOfWeek = ["월요일", "화요일", "수요일", "목요일", "금요일"];

export const timeSlots = [];

for (let i = 9; i <= 17; i++) {
  for (let j = 0; j < 60; j += 30) {
    const hour = i % 12 === 0 ? 12 : i % 12;
    const minute = j === 0 ? "00" : j;
    const time = `${hour}:${minute}`;
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
