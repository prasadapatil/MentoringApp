import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    to,
    Link
  } from "react-router-dom";
import '../homepage.css';
import des_logo from'../imgsrc/logo_des.png';
import {StudentLogin} from "./StudentLogin";
import {TeacherLogin} from "./TeacherLogin";
import {AdminLogin} from "./AdminLogin";

export const HomePage = () => {
    return (
        <Router>
        <div className="App">
        <div className="container">
            <div className="menu">
                <h3>Deccan Education Society's</h3>
                <img className="company-logo" src={des_logo} alt="IMG NOT FOUND"/>
                <h2>FERGUSSON COLLEGE PUNE</h2>
                <h1 className="site-title">MENTORING</h1>
                <div className="login-tos">
                    <ul>
                        <li><i className="fa fa-angle-double-right"></i><Link to="/">Mentee / Student Login</Link></li>
                        <li><i className="fa fa-angle-double-right"></i><Link to="/TeacherLogin">Mentor / Teacher Login</Link></li>
                        <li><i className="fa fa-angle-double-right"></i><Link to="/AdminLogin">Admin Login</Link></li> 
                    </ul>
                </div>
            </div>
            <div className="secondary">
            <Switch>

          <Route exact path="/TeacherLogin">
            <TeacherLogin />
          </Route>
          <Route path="/AdminLogin">
            <AdminLogin />
          </Route>
          <Route path="/">
            <StudentLogin />
          </Route>

        </Switch>
                <div className="copyright">Copyright &copy;Fergusson college-2021</div>
        </div>
    </div>
    </div>
    </Router>
    )
}
