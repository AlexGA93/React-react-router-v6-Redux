import { useNavigate } from "react-router-dom";
import { clearLocalStorage, userKey } from "../../../utilities";
import { PublicRoutes } from "../../../routes";
import { useDispatch } from "react-redux";
import { resetUser } from "../../../redux/states/user";

const Logout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const LogOut = () => {
        clearLocalStorage(userKey);
        dispatch(resetUser());
        navigate(`/${PublicRoutes.LOGIN}`, {replace: true});
    };

    return (<button onClick={LogOut}>Logout</button>)
}
export default Logout