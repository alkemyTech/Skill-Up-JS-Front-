import { Outlet, Link, Navigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectToken, setCredentials } from "../store/authSlice";

const Persist = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const effectRan = useRef(false);

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== "development") {
      const verifyRefreshToken = async () => {
        try {
          const tokens = localStorage.getItem("jwt");
          if (tokens) {
            dispatch(setCredentials({ token: tokens }));
          }

          setSuccess(true);
        } catch (err) {
          console.error(err);
        }
      };

      if (!token) verifyRefreshToken();
    }

    return () => (effectRan.current = true);
  }, []);

  let content;

  if (success) {
    content = <Outlet />;
  } else if (token) {
    content = <Outlet />;
  }

  return content;
};
export default Persist;
