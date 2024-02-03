import React, { useContext, createContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [loggedin, setLoggedin] = useState(false);
  const [playing, setPlaying] = useState(false);
  // etc

  const fetchSongsFromUser = async (user) => {};
  const fetchallSongs = async () => {};
  const uploadSong = async (user, song) => {};
  const makeAccount = async (form) => {};
  // etc

  return (
    <StateContext.Provider
      value={{
        setLoggedin,
        setPlaying,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
