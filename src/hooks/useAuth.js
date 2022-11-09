import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { selectToken } from "../store/authSlice";

const useAuth = () => {
  const token = useSelector(selectToken);
  console.log({ "token es": token });
  if (token) {
    const decoded = jwtDecode(token);
    console.log({ "El decoded": decoded });
    const { id } = decoded;

    return { id };
  }

  return { id: null };
};
export default useAuth;
