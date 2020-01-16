import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './pages/signIn/SignIn';
import Sales from './pages/sales/Sales'
import Inventory from './pages/inventory/Inventory';
import Analyics from './pages/analyics/Analyics';


const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Sales} />
                <Route exact path='/SignIn' component={SignIn} />
                <Route exact path='/Sales' component={Sales} />
                <Route exact path='/Inventory' component={Inventory} />
                <Route exact path='/Analyics' component={Analyics} />
            </Switch>
        </>
    )
}
export default Routes
