import { initializeApp } from 'firebase/app';
import * as auth from 'firebase/auth';
import Cookies from 'js-cookie';

export default async ({ app, store, ...ctx }, inject) => {
    const options = JSON.parse('<%= JSON.stringify(options) %>');
    const firebaseApp = await initializeApp(options.config || {});
    const firebase = {
        auth,
    };

    const authentication = await firebase.auth.getAuth(firebaseApp);

    firebase.auth.onAuthStateChanged(
        authentication,
        async (authUser) => {
            console.log('authUser', authUser);

            if (process.client) {
                await store.dispatch(
                    'onAuthStateChangedAction',
                    authUser || {}
                );
            }

            if (authUser) {
                Cookies.set('access_token', authUser.accessToken);
            } else {
                Cookies.remove('access_token');
            }
        },
        async () => {
            console.log('SIGN OUT PLUGIN');
            await firebase.auth.signOut();
        }
    );

    firebase.authentication = authentication;
    firebase.auth.currentUser = authentication.currentUser;

    if (process.client) {
        // console.log('firebase', firebase);
    }
    ctx.$firebase = firebase;
    inject('firebase', firebase);
};
