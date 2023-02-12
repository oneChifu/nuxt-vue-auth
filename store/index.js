// import Cookies from 'js-cookie';
// import cookieParser from 'cookie-parser';
// import Cookies from 'js-cookie';
import cookieparser from 'cookieparser';
import jwtDecode from 'jwt-decode';
// import Cookies from 'js-cookie';

// const cookieParser = (cookie) => {
//     return cookie
//         .split(';')
//         .map((cookie) => cookie.split('='))
//         .reduce((acc, cookie) => {
//             acc[decodeURIComponent(cookie[0].trim())] = decodeURIComponent(
//                 cookie[1].trim()
//             );
//             return acc;
//         }, {});
// };

export const state = () => ({
    user: {},
});

export const actions = {
    nuxtServerInit({ commit, dispatch, state }, { $fire, req, res }) {
        // if (process.server && process.static) return;
        if (!req.headers.cookie) return;

        // console.log('process.server', process.server);
        // console.log('process.static', process.static);

        // const accessToken = cookieparser.parse(req.headers.cookie);
        // console.log('parsed', accessToken);
        const { access_token: accessToken } = cookieparser.parse(
            req.headers.cookie
        );
        const { user_id: uid, email } = jwtDecode(accessToken);

        commit('SET_USER', {
            uid,
            email,
        });

        // const
        // console.log('ENV', process.env.FIRE_API_KEY);
        // const isLoggedIn =
        // console.log('nuxtServerInit currentUser', $fire.auth.currentUser)
        // const user = await $fire.auth
        // console.log('nuxtServerInit user', user)
        // console.log('nuxtServerInit fire', $fire.auth.currentUser)
        // const user = $fire.auth.currentUser
        // const user = await $fire.auth.currentUser
        // console.log('res.locals.user', user)
        // if (user && user.uid) {
        //     const {
        //         // allClaims: claims,
        //         // accessToken: token,
        //         uid,
        //         email,
        //         emailVerified,
        //         displayName,
        //         phoneNumber,
        //         photoURL,
        //         metadata,
        //         accessToken,
        //     } = res.locals.user || user
        //     await dispatch('onAuthStateChangedAction', {
        //         uid,
        //         email,
        //         emailVerified,
        //         displayName,
        //         phoneNumber,
        //         photoURL,
        //         metadata,
        //         accessToken,
        //     })
        // }
    },

    onAuthStateChangedAction({ commit, dispatch }, user) {
        console.log('onAuthStateChangedAction', user);
        if (!Object.values(user).length) {
            dispatch('onSignOutAction');
            return;
        }

        const {
            stsTokenManager: { ...token },
            uid,
            email,
            emailVerified,
            displayName,
            phoneNumber,
            photoURL,
            metadata,
            isAnonymous,
        } = user;

        console.log('onAuthStateChangedAction 2', token);

        commit('SET_USER', {
            token,
            uid,
            email,
            emailVerified,
            displayName,
            phoneNumber,
            photoURL,
            metadata,
            isAnonymous,
        });
    },

    onSignOutAction({ commit }) {
        commit('SET_USER', {});
        console.log('SIGN OUT STATE');
    },
};

export const mutations = {
    SET_USER(state, data) {
        console.log('SET_USER', data);
        state.user = data;
    },
};

export const getters = {
    isUserAuth(state) {
        // console.log('SET_USER', data)
        return state.user.uid;
    },

    user(state) {
        // console.log('SET_USER', data)
        return state.user;
    },
};
