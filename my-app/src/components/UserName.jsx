import { useContext } from "react";
import { UserContext } from "./UserContext";
export default function UserName() {
 const userName = useContext(UserContext);
    return (
    <>
      <h2>name:{userName}</h2>
    </>
  );
}