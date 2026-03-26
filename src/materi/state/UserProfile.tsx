import { useState } from "react";

type User = {
  name: string;
  statusMenikah: "Sudah" | "Belum";
};

const UserProfile = () => {
  const [user, setUser] = useState<User>({
    name: "Faiz",
    statusMenikah: "Sudah",
  });

  const handleClick = () => {
    setUser({
      ...user,
      statusMenikah: user.statusMenikah == "Sudah" ? "Belum" : "Sudah",
    });
  };

  return (
    <div>
      <p>Nama: {user.name}</p>
      <p>Status Menikah: {user.statusMenikah}</p>
      <button onClick={handleClick}>Update Status</button>
    </div>
  );
};

export default UserProfile;
