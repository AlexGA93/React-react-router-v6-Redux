import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../routes"
import { RouteWithNotFound } from "../../utilities"
import { lazy } from "react"

// lazy-loading
const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const Home = lazy(() => import('./Home/Home'));

const Private = () => {
  return (
    <RouteWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />}/>
    </RouteWithNotFound>
  )
}
export default Private