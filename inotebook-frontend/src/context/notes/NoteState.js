import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "64170a85ffa5e2c21eca6f38",
      user: "64157cb8fe7578ac571ee77e",
      title: "Samruddhi's Notes1",
      description: "DSA is very interesting1",
      tag: "personal1",
      date: "2023-03-19T13:13:41.951Z",
      __v: 0,
    },
    {
      _id: "64170c728ea27d53c0dc974e",
      user: "64157cb8fe7578ac571ee77e",
      title: "Samruddhi's Notes2 updated",
      description: "DSA is very interesting2",
      tag: "personal2",
      date: "2023-03-19T13:21:54.488Z",
      __v: 0,
    },
    {
      _id: "641affb6e43bb362cf591c7c",
      user: "64157cb8fe7578ac571ee77e",
      title: "Saurav",
      description: "I am all rounder and a free lancer",
      tag: "Educational",
      date: "2023-03-22T13:16:38.396Z",
      __v: 0,
    },
    {
      _id: "641affcde43bb362cf591c7e",
      user: "64157cb8fe7578ac571ee77e",
      title: "Nancy",
      description: "I am a travel freak",
      tag: "Travel",
      date: "2023-03-22T13:17:01.133Z",
      __v: 0,
    },
    {
      _id: "641affe5e43bb362cf591c80",
      user: "64157cb8fe7578ac571ee77e",
      title: "Enid",
      description: "I love colors in my life",
      tag: "Personal",
      date: "2023-03-22T13:17:25.521Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
