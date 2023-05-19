import React from "react";
import ScheduleMain from "./Schedule/ScheduleMain";
import GlobalStyle from "../fonts/GlobalStyle";
import { useRecoilState } from 'recoil';
import { userState } from './state'

const Main = () => {
  const user = useRecoilState(userState);

  return (
    <>
      <GlobalStyle />
      <ScheduleMain user={user} />
    </>
  );
};

export default Main;
