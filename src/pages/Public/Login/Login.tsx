import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMorty } from "../../../api";
import { createUser, resetUser } from "../../../redux/states/user";
import { PrivateRoutes, PublicRoutes } from "../../../routes";
import { Roles } from "../../../models";
import { useEffect } from "react";
import { clearLocalStorage, userKey } from "../../../utilities";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // NOTE: POSSIBILLITY 1 - use useEffect hook
  useEffect(() => {
    clearLocalStorage(userKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, {replace: true});
  }, [dispatch, navigate])

  // NOTE: POSSIBILLITY 2 - Guard
  

  const login = async() => {
    try {
      const result = await getMorty();
      dispatch(createUser({...result, role: Roles.ADMIN}));
      navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true});
    } catch (error)  {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Este es el Login</h2>
      <button onClick={login}>LOGIN</button>
    </div>
  )
}
export default Login