import "./LandingPage.css";
// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
 
import LogIn from "./app/LoginPage/LoginPage";
import CreateAccount from "./app/CreateAccountPage/CreateAccountPage.jsx";
 
function LandingPage() {
    return (
        <Router>
            <div className="landing-page">
                <Switch>
                    <Route path="/login">
                        <LogIn />
                    </Route>
                    <Route path="/create-account">
                        <CreateAccount />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
 
export default LandingPage;