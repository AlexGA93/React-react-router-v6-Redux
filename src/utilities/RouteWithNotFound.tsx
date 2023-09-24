import { Route, Routes } from "react-router-dom";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const RouteWithNotFound = ({children}: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Routes>
  )
}
export default RouteWithNotFound;