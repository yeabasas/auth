import { useContext } from "react";
import { Navigate, Route } from "react-router";
import { AuthContext } from "./Auth";

const PrivateRoute = ({component:RouteComponent,...rest}) => {
    const {user}=useContext(AuthContext)

    return ( 
        <Route 
            {...rest}
            render={routeProps => 
                !!user ? (
                <RouteComponent {...routeProps}/>
                ):(
                <Navigate to={"/login"}/> 
                )
            }
        />
     );
}
 
export default PrivateRoute;