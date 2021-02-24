import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Authorization from './Authorization';
import Home from './Home';
import Barmen from './Barmen';
import Register from './Register';

function Routes(props) {
    const myOnNameChange = props.onNameChange;
    const userInfo = props.userInfo.name;
    const userLogin = props.userInfo.login;
    const points = props.userInfo.points;
    return (
        <main>
            <Switch>
                <Route exact path='/'
                       render={(props) =>
                           (<Home {...props}
                                  userName={userInfo}

                           />)}/>
                <Route path='/authorize'
                       render={(props) =>
                           (<Authorization {...props}
                                           onNameChange={myOnNameChange}
                           />)}
                />
                <Route path='/barmen'
                       render={(props) =>
                           (<Barmen {...props}
                                    userInfo={userInfo}
                                    userLogin={userLogin}
                                    points={points}
                           />)}/>
                <Route path='/register'
                       render={(props) =>
                           (<Register {...props}
                                      userInfo={userInfo}
                                      onNameChange={myOnNameChange}
                           />)}
                />
            </Switch>
        </main>
    );
}

export default Routes;
