import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import SignIn from './pages/signIn/SignIn';
import Sales from './pages/sales/Sales'
import Analyics from '../components/pages/analyics/Analyics'
import Inventory from './pages/inventory/Inventory';


const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Sales} />
                {/* <Route exact path='/SignIn' component={SignIn} /> */}
                <Route exact path='/Sales' component={Sales} />
                <Route exact path='/Inventory' component={Inventory} />
                <Route exact path='/Analyics' component={Analyics} />
            </Switch>
        </>
    )
}
export default Routes
