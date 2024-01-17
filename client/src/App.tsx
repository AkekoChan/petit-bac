import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  age: number;
}

function App() {
  const [users, setUsers] = useState<User[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    fetch("http://localhost:8000/users", { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((e) => console.error(e));

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <ul>
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          users?.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age}
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default App;
