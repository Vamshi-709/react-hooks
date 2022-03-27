import React, { useState } from "react";

function UseLocalStorage(key, initialValue) {
  const [localStorageValue, setLoacalStorageValue] = useState(() =>
    getLoacalStorageValue(key, initialValue)
  );
  const setValue = (value) => {
      // checking the function  
      const valueToStore = value instanceof Function ? value (localStorageValue) :value
    console.log(value);
    // set to state
    setLoacalStorageValue(value)
    // set to localStorage
    localStorage.setItem(key,JSON.stringify(valueToStore))
  };
  return [localStorageValue, setValue];
}
function getLoacalStorageValue(key,initialValue){
    const itemFromStorage= localStorage.getItem(key)
    return itemFromStorage ?JSON.parse( itemFromStorage) :initialValue
}
export default UseLocalStorage;
