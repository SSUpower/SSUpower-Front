import * as React from "react";
import Timetable from "react-timetable-events";

const TimetableMain = () => (
  <Timetable
    events={{
      monday: [
        {
          id: 1,
          name: "AI",
          type: "custom",
          startTime: new Date("2023-03-27T15:00:00"),
          endTime: new Date("2023-03-27T16:15:00"),
        },
      ],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
    }}
    style={{ height: "500px" }}
  />
);

export default TimetableMain;
