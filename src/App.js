import React from 'react';
import {Route} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
function App() {
  return (
    <div>
     <Layout>
      <Route path='/' exact component={BurgerBuilder}/>
      <Route path='/checkout' component={Checkout}/>
      <Route path='/logout' component={Logout}/>
      <Route path='/orders' component={Orders}/>
      <Route path='/auth' component={Auth}/>
     </Layout>
    </div>
  );
}

export default App;
