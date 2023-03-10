import path from 'path';
// import { initializeApp } from 'firebase/app';
// import {
//     getAuth,
//     onAuthStateChanged,
//     signOut,
//     // pppp;';
//     // setPersistence,
//     // browserSessionPersistence,
//     // browserLocalPersistence,
// } from 'firebase/auth';
export default function firebaseModule(moduleOptions) {
    // console.log('options', arguments);
    const options = Object.assign({}, this.options.firebase, moduleOptions);

    // // console.log('options', this.context);
    // // console.log('inject', inject);

    // // const config = {
    //     //     apiKey: env.FIRE_API_KEY,
    //     //     authDomain: env.FIRE_AUTH_DOMAIN,
    //     //     projectId: env.FIRE_PROJECT_ID,
    //     //     storageBucket: env.FIRE_STORAGE_BUCKET,
    //     //     messagingSenderId: env.FIRE_MESSAGING_SENDER_ID,
    //     //     appId: env.FIRE_APP_ID,
    //     //     measurementId: env.FIRE_MEASUREMENT_ID,
    //     // };

    // if (options?.services.auth) {
    this.addPlugin({
        src: path.resolve(__dirname, '../plugins/firebase.js'),
        fileName: 'firebase.js',
        options,
    });
    // }

    // this.$firebase = options;

    // console.log('moduleOptions', this.$firebase);

    // this.nuxt.hook('modules:done', nuxt => {
    //     // nuxt.ctx.$firebase = firebase;
    //     // nuxt.inject('firebase', firebase);
    //     console.log('modules:done')
    // })

    // this.nuxt.hook('ready', nuxt => {
    //     // nuxt.ctx.$firebase = firebase;
    //     // nuxt.inject('firebase', firebase);
    //     console.log('Nuxt is ready')
    // })

    // this.ctx.$firebase = firebase;
    // inject('firebase', firebase);
}

// export default async ({ env, store, app, ...ctx }, inject) => {
//     // console.log('env', env);
//     // console.log('process.env.FIRE_API_KEY', process.env.FIRE_API_KEY);

//     const config = {
//         apiKey: env.FIRE_API_KEY,
//         authDomain: env.FIRE_AUTH_DOMAIN,
//         projectId: env.FIRE_PROJECT_ID,
//         storageBucket: env.FIRE_STORAGE_BUCKET,
//         messagingSenderId: env.FIRE_MESSAGING_SENDER_ID,
//         appId: env.FIRE_APP_ID,
//         measurementId: env.FIRE_MEASUREMENT_ID,
//     };

//     const firebase = await initializeApp(config);

//     // const auth = await getAuth(firebase);

//     // onAuthStateChanged(auth, async (authUser) => {
//     //     store.dispatch('onAuthStateChangedAction', authUser);
//     // })

//     ctx.$firebase = firebase;
//     inject('firebase', firebase);
//     // inject('auth', auth);
//     // ctx.$auth = auth;

//     // console.log('cookie', this);

//     // ctx.$firebase = firebase;
//     // window.nuxt.$firebase = firebase;
//     // } else {
//     //     const firebase = await initializeApp(config);
//     //     // auth service
//     //     const auth = await getAuth(firebase);

//     //     auth.browserLocalPersistence = browserLocalPersistence;
//     //     auth.browserSessionPersistence = browserSessionPersistence;

//     //         if (authUser) {
//     //             // User is signed in, see docs for a list of available properties
//     //             // https://firebase.google.com/docs/reference/js/firebase.User
//     //             store.dispatch('onAuthStateChangedAction', authUser);
//     //         } else {
//     //             try {
//     //                 await signOut(auth);
//     //                 store.dispatch('onSignOutAction');
//     //             } catch (e) {
//     //                 console.error(e);
//     //             }
//     //         }
//     //     });

//     // const injectKey = '$' + key
//     // inject('firebase', firebase);
//     // ctx.$firebase = firebase;
//     // inject('auth', auth);
//     // ctx.$auth = auth;
//     // }
// };
