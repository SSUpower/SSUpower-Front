import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

function ScheduleDelete({ scheduleList, onDelete, userId }) {
  const [selectedSchedule, setSelectedSchedule] = useState("");
  console.log(userId);
  console.log(selectedSchedule);
  const handleDelete = () => {
    if (!selectedSchedule) {
      return;
    }

    const subject = selectedSchedule.split("  (");
    console.log(subject[0]);
    subject[0] = encodeURIComponent(subject[0]);
    console.log(subject[0]);
    // 삭제 요청을 보내고 응답을 처리하는 로직
    axios
      .delete(`/timetable/${userId}/${subject[0]}/delete`)
      .then(() => {
        // 선택한 스케줄 삭제 후 처리할 로직
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
        <option value="">스케줄 선택</option>
        {scheduleList.map((schedule) => (
          <option key={schedule} value={schedule}>
            {schedule}
          </option>
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
  font-family: "ChosunGu";
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
  font-family: "ChosunGu";

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
