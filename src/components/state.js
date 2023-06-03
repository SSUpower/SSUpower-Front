import React, { useState, useEffect } from "react";
import { atom, selector, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const LoginState = atom({
  key: "LoginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const isLoggedInState = selector({
  key: "isLoggedInState",
  get: ({ get }) => {
    return get(LoginState);
  },
});

export const userState = atom({
  key: "userState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const isUserState = selector({
  key: "isUserState",
  get: ({ get }) => {
    return get(userState);
  },
});
