import{Route,Redirect} from "react-router-dom"

const isAuth = () =>{
    return localStorage.getItem('userinfo') ? true : false
  }

function PrivateRoute({ children, ...rest }) {
    return (
      <Route {...rest} render={({ location }) => {
        return isAuth() === true
          ? children
          : <Redirect to={{
              pathname: '/signin',
              state: { from: location }
            }}
   />
      }} />
    )
  }

  export default PrivateRoute