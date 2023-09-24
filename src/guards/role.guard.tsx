import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { Roles, UserInfo } from "../models";
import { AppStore } from "../redux/store";
import { PrivateRoutes } from "../routes";

interface Props {
  role: Roles;
}

const RoleGuard = ({ role } : Props) => {

  const userState: UserInfo = useSelector((store: AppStore) => store.user);

  return userState.role === role ? <Outlet /> : <Navigate to={PrivateRoutes.PRIVATE} />
}
export default RoleGuard