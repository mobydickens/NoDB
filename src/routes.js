import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Favorites from './components/Favorites.jsx';
import AddBook from './components/AddBook.jsx';
import Recommendations from './components/Recommendations.jsx';

export default (
    <Switch>
        <Route component={ Recommendations } exact path="/" />
        <Route component={ AddBook } path="/addbook" />
        <Route component={ Favorites } path="/favorites" />
    </Switch>
)


//I have THREE routes
//HOME OR recommendations
//ADD BOOK
//FAVORITES

