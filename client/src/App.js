import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
// import ScrollToTop from 'react-router-scroll-top';
// import './styles/style.css';
import './styles/style.sass';
import NavBar from './comp/navbar/navbar';
import {Provider} from 'react-redux';
import store from './store';
import setAuthToken from './utills/setAuthToken';
import loadUser from './actions/auth';
import Firstpage from './comp/firstpage/firstpage';
import {useTranslation} from 'react-i18next';
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

    const {t, i18n} = useTranslation();

    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <div>
                <NavBar changeLanguage={changeLanguage}/>
                <Menu/>
                <section>
                    <Routes>
                        <Route exact path='/' element={<Firstpage/>}/>
                        <Route path='/diagnostika' element={<Diagnostika/>}/>
                        <Route path='/service/:name/:id' element={<ServicePage/>}/>
                        <Route path='/carpage/:mark/:id' element={<CarPage/>}/>
                        <Route path='/tuning' element={<Tuning/>}/>
                        <Route path='/file-service' element={<Repair/>}/>
                        <Route path='/navigation' element={<Navigation/>}/>
                        <Route path='/support' element={<Support/>}/>
                        <Route path='/coding' element={<Coding/>}/>
                        <Route path='/smartphone' element={<Smartphone/>}/>
                        <Route path='/autopick' element={<AutoPick/>}/>
                        <Route path='/contacts' element={<Contacts/>}/>
                        <Route path='/other' element={<Others/>}/>
                        <Route path='/parking' element={<Parking/>}/>
                        <Route path='/bmw-key' element={<Bmwkey/>}/>
                        <Route path='/displays' element={<Display/>}/>
                        <Route path='/blog' element={<Blog/>}/>
                        <Route path='/post/:id' element={<Post/>}/>
                        <Route path='/service/:id' element={<CatalogItemPage/>}/>
                    </Routes>
                </section>
            </div>
            {/*<ScrollToTop />*/}
        </Provider>
    );
};

export default App;
