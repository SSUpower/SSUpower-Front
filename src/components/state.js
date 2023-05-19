import React, { useState,useEffect } from "react";
import { atom, selector, useRecoilState } from 'recoil';

export const LoginState = atom({
    key: 'LoginState',
    default: false,
});

export const userState = atom({
    key: 'userState',
    default: null,
  });
  
export const isLoggedInState = selector({
    key: 'isLoggedInState',
    get: ({ get }) => {
        const user = get(userState);
        return user !== null;
    },
});