"use client";
import React, { createContext, useContext, useState } from "react";
import { iThemes, MediaItem } from "@/utils/types";
import { InitialList } from "@/utils/MockMyList";

interface MyListContextType {
  myList: MediaItem[];
  addToMyList: (item: MediaItem) => void;
  removeFromMyList: (id: number) => void;
}

const MyListContext = createContext<MyListContextType | undefined>(undefined);

export const MyListProvider = ({ children, themes }: { children: React.ReactNode, themes: iThemes }) => {
  const [myList, setMyList] = useState<MediaItem[]>(InitialList);

  const addToMyList = (item: MediaItem) => {
    setMyList((prev) => {
      if (prev.some((movie) => movie.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFromMyList = (id: number) => {
    setMyList((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    <MyListContext.Provider value={{ myList, addToMyList, removeFromMyList }}>
      {children}
    </MyListContext.Provider>
  );
};

export const UseMyList = () => {
  const context = useContext(MyListContext);
  if (!context) throw new Error("useMyList deve ser usado dentro do MyListProvider");
  return context;
};
