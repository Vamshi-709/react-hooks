import React, { useState, useEffect, useRef } from "react";

function Todo() {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});
  const isMounted = useRef(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/2")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data);
            setLoading(false);
          }
        }, 3000);
      },[isMounted]);
    //when it is runs component is unmounted
    return () => {
      console.log("vamshi");
      isMounted.current = false;
    };
  }, []);
  return loading ? <h2>loading....</h2> : <h3>{todo.title}</h3>;
}

export default Todo;
