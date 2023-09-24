import { useSelector } from "react-redux";
import { UserInfo } from "../models";
import { AppStore } from "../redux/store";
import { Outlet, Navigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../routes";

interface Props {
  privateValidation: boolean;
}

const privateValidationFragment = <Outlet />;
const publicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />

export const AuthGuard = ({ privateValidation }: Props): JSX.Element => {
  const useState: UserInfo = useSelector((store: AppStore) => store.user);
  return useState.name ? (
    privateValidation ? (
        privateValidationFragment
    ) : (
        publicValidationFragment
    )
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};

export default AuthGuard;
