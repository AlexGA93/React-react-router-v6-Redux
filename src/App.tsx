import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import "./App.css";
import { AuthGuard, RoleGuard } from "./guards";
import { store } from "./redux/store";
import { PrivateRoutes, PublicRoutes } from "./routes";
import { RouteWithNotFound } from "./utilities";
import Logout from "./pages/Public/Logout/Logout";
import { Roles } from "./models";
import Admin from "./pages/Private/Admin/Admin";

// lazy-loading - imported lazy our login route
const Login = lazy(() => import('./pages/Public/Login/Login'));
const Private = lazy(() => import('./pages/Private/Private'));

function App() {
  return (
    <div className="App">
      {/* lazy loading */}
      <Suspense fallback={<>LOADING...</>}>
        <Provider store={store}>
          <BrowserRouter>
            {/* LOGOUT */}
            <Logout />
            <RouteWithNotFound>
              {/* root */}
              <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
              {/* public routes */}
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              {/* private routes */}
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
              {/* protected by roles routes */}
              <Route element={<RoleGuard role={Roles.ADMIN} />}>
                <Route path={PrivateRoutes.ADMIN} element={<Admin />} />
              </Route>
              {/* error route */}
            </RouteWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
