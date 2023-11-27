import React, { useEffect, useState } from "react";

function Test() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://j1sonplaceholder.typicode.com/users");
        const json = await res.json();
        setUser(json);
      } catch (error) {
        setError(true);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {!user.length && !error && <h2>loading ... </h2>}
      {error && <h2>we have error</h2>}
      <ul>
        {user.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
