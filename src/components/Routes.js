import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';


const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route exact path='/SignIn' component={SignIn} />
            </Switch>
        </>
    )
}
export default Routes