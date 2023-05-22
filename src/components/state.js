import React, { useState,useEffect } from "react";
import { atom, selector, useRecoilState } from 'recoil';

export const LoginState = atom({
    key: 'LoginState',
    default: false,
});

export const isLoggedInState = selector({
    key: 'isLoggedInState',
    get: ({ get }) => {
        return get(LoginState);
    },
});

export const userState = atom({
    key: 'userState',
    default: [],
  });
  

export const isUserState = selector({
    key: 'isUserState',
    get: ({ get }) => {
        return get(userState);
    },
});
