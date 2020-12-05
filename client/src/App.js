import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import './styles/style.css';
import NavBar from './comp/navbar/navbar';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utills/setAuthToken';
import loadUser from './actions/auth';
import Firstpage from './comp/firstpage/firstpage';
import { useTranslation } from 'react-i18next';
import Menu from './comp/menu/menu';
import Diagnostika from './comp/pages/diagnostika/diagnostika';
import Tuning from './comp/pages/tuning/tuning';
import Repair from './comp/pages/repair/repair';
import Navigation from './comp/pages/navigation/navigation';
import Bmwkey from './comp/pages/bmw-key/bmw-key';
import Display from './comp/pages/display/display';
import Parking from './comp/pages/parking/parking';
import Smartphone from './comp/pages/smartphone/smartphone';
import Coding from './comp/pages/coding/coding';
import Support from './comp/pages/support/support';
import AutoPick from './comp/pages/autopick/autopick';
import Contacts from './comp/pages/contacts/contacts';
import CarPage from './comp/pages/carpage/carpage';
import Blog from './comp/pages/blog/blog';
import Post from './comp/pages/blog/comp/post';
import Others from './comp/pages/others/others';
import CatalogItemPage from './comp/pages/others/pages/catalog-item-page.js';
import ServicePage from './comp/pages/service-page/service-page.js';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div>
        <NavBar changeLanguage={changeLanguage} />
        <Menu />
        <section>
          <Switch>
            <Route exact path='/' component={Firstpage} />
            <Route path='/diagnostika' component={Diagnostika} />
            <Route path='/service/:name/:id' component={ServicePage} />
            <Route path='/carpage/:mark/:id' component={CarPage} />
            <Route path='/tuning' component={Tuning} />
            <Route path='/file-service' component={Repair} />
            <Route path='/navigation' component={Navigation} />
            <Route path='/support' component={Support} />
            <Route path='/coding' component={Coding} />
            <Route path='/smartphone' component={Smartphone} />
            <Route path='/autopick' component={AutoPick} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/other' component={Others} />
            <Route path='/parking' component={Parking} />
            <Route path='/bmw-key' component={Bmwkey} />
            <Route path='/displays' component={Display} />
            <Route path='/blog' component={Blog} />
            <Route path='/post/:id' component={Post} />
            <Route path='/service/:id' component={CatalogItemPage} />
          </Switch>
        </section>
      </div>
      <ScrollToTop />
    </Provider>
  );
};

export default App;
