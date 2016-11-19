import './main.scss';

import * as React from 'react';
import {
   Router,
   Route,
   browserHistory
} from 'react-router';

import { AppNavigator } from './app/navigator';
import { BooksWrapper } from './app/books';
import { AllRightsReserved } from './components/all-rights-reserved';

export class App extends React.Component {
   constructor() {
      super();
   }

   render() {
      return (
         <div className="main-layer">
            <header className="main-header"></header>
            <mian className="main-container">
               <div className="navigator-container">
                  <AppNavigator />
               </div>
               <div className="frame-container">
                  <Router history={browserHistory}>
                     <Route path="/app" component={BooksWrapper} />
                  </Router>
               </div>
            </mian>
            <footer className="main-footer">
               <AllRightsReserved />
            </footer>
         </div>
      );
   }
}