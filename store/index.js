export const state = () => ({
    authUser: null,
});

export const actions = {
    nuxtServerInit({ commit, dispatch, state }, { $fire, req, res }) {
        // console.log('ENV', process.env.FIRE_API_KEY);
        // const isLoggedIn =
        // console.log('nuxtServerInit currentUser', $fire.auth.currentUser)
        // const user = await $fire.auth
        // console.log('nuxtServerInit user', user)
        // console.log('nuxtServerInit fire', $fire.auth.currentUser)
        // const user = $fire.auth.currentUser
        // console.log('authUser', authUser)
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
        //     // console.log('USER', authUser)
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

    onAuthStateChangedAction({ commit, dispatch }, authUser) {
        console.log('onAuthStateChangedAction', authUser);
        if (!authUser) {
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
        } = authUser;

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
        commit('SET_USER', null);
    },
};

export const mutations = {
    SET_USER(state, data) {
        console.log('SET_USER', data);
        state.authUser = data;
    },
};

export const getters = {
    isAuthUser(state) {
        // console.log('SET_USER', data)
        return Boolean(state.authUser && state.authUser.uid);
    },

    authUser(state) {
        // console.log('SET_USER', data)
        return state.authUser;
    },
};
