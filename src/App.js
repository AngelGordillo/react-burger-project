import React from 'react';
import {Route} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurguerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
function App() {
  return (
    <div>
     <Layout>
      <Route path='/' exact component={BurguerBuilder}/>
      <Route path='/checkout' component={Checkout}/>
      <Route path='/orders' component={Orders}/>
     </Layout>
    </div>
  );
}

export default App;
