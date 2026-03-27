import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const UserList = () => {
  const baseUrl = "https://jsonplaceholder.typicode.com/users";

  const [user, setUser] = useState<User[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await fetch(baseUrl);

      if (!response.ok) {
        throw new Error("Failed to fecth user");
      }

      const data: User[] = await response.json();
      setUser(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError((error as Error).message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (loading) {
    return <p>Loading Data...</p>;
  }

  const newUser: Omit<User, "id"> = {
    name: "User",
    username: "Username",
    email: "user@mail.com",
  };

  const createUser = async () => {
    try {
      setLoading(true);
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error("Failed post add data user");
      }
      const data = await response.json();
      setUser([...user, data]);
      setLoading(false);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const handleAddNewUser = () => {
    createUser();
  };

  const deleteUser = async (id: number) => {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed delete data user");
      }
      setUser((prev) => prev.filter((user) => user.id !== id));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError((error as Error).message);
    }
  };

  const handleDeleteUser = (id: number) => {
    deleteUser(id);
  };

  const updateUser: Omit<User, "id"> = {
    name: "User Updated",
    username: "Username Updated",
    email: "email_updated@mail.com",
  };

  const updateData = async (id: number) => {
    try {
      setLoading(true);

      const response = await fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(updateUser),
      });

      const data = await response.json();
      setUser((prev) => prev.map((user) => (user.id === id ? data : user)));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError((error as Error).message);
    }
  };

  const handleUpdate = (id: number) => {
    updateData(id);
  };

  return (
    <div>
      <button onClick={handleAddNewUser}>Add New User</button>
      <ul>
        {user.map((user, key) => {
          return (
            <li key={key}>
              {user.name} - {user.username} - {user.email}
              <button
                onClick={() => {
                  handleUpdate(user.id);
                }}
              >
                Update
              </button>
              <button
                onClick={() => {
                  handleDeleteUser(user.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
