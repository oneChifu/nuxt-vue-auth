<template>
    <div>
        <h1>Home page</h1>

        <pre>{{ isUserAuth }}</pre>

        <div v-if="isUserAuth">
            <h3>You are is logged in</h3>
            <pre>{{ user }}</pre>

            <v-btn @click="onLogout">Logout</v-btn>
        </div>

        <div v-else>
            <h3>You are not logged in.</h3>

            <v-btn @click="onLogin">Login</v-btn>
        </div>

        <!-- onLoginData -->
        <!-- <pre>{{ onLoginData }}</pre> -->

        <!-- <nuxt-link to="/login">Login</nuxt-link> -->
        <!-- <nuxt-link to="/profile">Profile</nuxt-link> -->
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'HomePage',

    // middleware: 'auth',

    asyncData({
        $auth,
        isDev,
        route,
        store,
        env,
        params,
        query,
        req,
        res,
        redirect,
        error,
    }) {
        // console.log('asyncData', $auth.authUser.uid);
    },

    data: () => ({
        // isUserAuth: false,
        // userAuth: {},
        // onLoginData: {},
    }),

    computed: {
        ...mapGetters(['isUserAuth', 'user']),
    },

    created() {},

    methods: {
        ...mapActions(['onSignOutAction']),

        async onLogin() {
            // this.$auth.browserSessionPersistence.type = 'LOCAL';
            // console.log(
            //     'this.$auth.browserLocalPersistence',
            //     this.$auth.browserLocalPersistence
            // );

            // const browserLocalPersistence =
            // new this.$auth.browserLocalPersistence;

            try {
                // await this.$auth.setPersistence(
                //     this.$auth,
                //     this.$auth.browserLocalPersistence
                // );
                const { user } = await this.$firebase.auth.signInWithEmailAndPassword(
                    this.$firebase.authentication,
                    'onechifu@gmail.com',
                    '123456'
                );
                console.log('onLogin', user);
            } catch (e) {
                console.error(e);
            }

            // try {
            //     const { user } = await this.$auth.signInWithEmailAndPassword(
            //         this.$auth,
            //         'onechifu@gmail.com',
            //         '123456'
            //     );

            //     console.log('onLogin', user);
            // } catch (e) {
            //     console.error(e);
            // }
        },
        async onLogout() {
            console.log('FIREBASE', this.$firebase.auth)
            // try {
                await this.$firebase.authentication.signOut();
                console.log('SIGN OUT PAGE')
            //     // this.onSignOutAction();
            // } catch (e) {
            //     console.error(e);
            // }
        },
    },

    // async created() {
    // const result = await this.$fire.auth.createUserWithEmailAndPassword(
    //     'onechifu@gmail.com',
    //     '123456'
    // )
    // const result = await this.$fire.auth.signInWithEmailAndPassword(
    //     'onechifu@gmail.com',
    //     '123456'
    // )
    // console.log('Auth result', result)
    // const resultOut = await this.$fire.auth.signOut()
    // console.log('Auth Out result', resultOut)
    // },

    // mounted() {
    //     console.log('USER', this.$store.state.user)
    // },
};
</script>
