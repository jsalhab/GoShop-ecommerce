import React, { Component } from 'react';
import Homepage from './pages/homepage/Homepage';
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from './pages/shop/ShopPage';
import "./App.scss"
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import {auth, createUserProfileDocument} from "./firebase/firebase.utiles";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/actions/userAction";
import ShoppingCart from './pages/shopping-cart/ShoppingCart';
import CollectionPage from './pages/collection/CollectionPage';
import CollectionItemDetails from './components/collection-item-details/CollectionItemDetails';
import Footer from './components/footer/Footer';
import NotFound from './components/not-found/NotFound';
import OrderSuccess from './components/order-success/OrderSuccess';
import Checkout from './components/check-out/Checkout';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/selectors/userSelectors';

class App extends Component {
 
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

     this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
       if(userAuth) {
            const userRef = await createUserProfileDocument(userAuth);
            userRef.get().then(snapShot => {
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              });
            });
            
       }

       setCurrentUser(userAuth);
      
      });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
 <div className="App">
      <Header/>
      <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
          <Route exact path="/check-out" component={Checkout} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/shop/:collectionId" component={CollectionPage} />
          <Route exact path="/shopping-cart" render={() => this.props.currentUser ? (<ShoppingCart/>) : (<SignInAndSignUpPage />)} />
          <Route exact path="/shop/:collectionId/:itemId" component={CollectionItemDetails} />
          <Route exact path="/order-success" render={() => this.props.currentUser ? (<OrderSuccess/>) : (<SignInAndSignUpPage />)} />
          <Route path='*'  component={NotFound} />
      </Switch>
      <Footer />
    </div>
   
  );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);


    
