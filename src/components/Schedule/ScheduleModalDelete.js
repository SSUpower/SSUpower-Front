import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

function ScheduleDelete({ scheduleList, onDelete, userId }) {
  const [selectedSchedule, setSelectedSchedule] = useState("");
  console.log(userId);
  console.log(selectedSchedule);
  console.log(scheduleList);

  const handleDelete = () => {
    if (!selectedSchedule) {
      return;
    }

    const [subject, day] = selectedSchedule.split("  (");
    const scheduleData = {
      subject: subject,
      day: day.replace(")", ""),
    };

    axios
      .delete(`/timetable/${userId}/delete`, { data: scheduleData })
      .then(() => {
        onDelete(selectedSchedule);
        setSelectedSchedule("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Select
        name="selectedSchedule"
        onChange={(e) => setSelectedSchedule(e.target.value)}
        value={selectedSchedule}>
        <Option value="">스케줄 선택</Option>
        {scheduleList.map((schedule) => (
          <Option key={schedule} value={schedule}>
            {schedule}
          </Option>
        ))}
      </Select>
      <Button onClick={handleDelete} disabled={!selectedSchedule}>
        삭제
      </Button>
    </div>
  );
}

export default ScheduleDelete;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 4px;
  font-size: 14px;
  font-family: "LINESeedKR-Rg";
`;

const Button = styled.button`
  background-color: #2e3a51;
  color: white;
  padding: 8px 8px;
  margin-left: 8px;
  border: 0.5px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-family: "LINESeedKR-Rg";

  color: #ffffff;
  background-color: #2e3a51;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #6f7687;
  }
`;

const Option = styled.option`
  font-family: "LINESeedKR-Rg";
`;
