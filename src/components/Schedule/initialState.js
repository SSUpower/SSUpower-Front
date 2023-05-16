export const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export const timeSlots = [];

for (let i = 9; i <= 17; i++) {
  for (let j = 0; j < 60; j += 30) {
    const hour = i;
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
