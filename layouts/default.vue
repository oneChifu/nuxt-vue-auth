<template>
    <v-app>
        <v-main>
            <v-container>
                <!-- <div><v-btn @click="onSignIn">Sign In</v-btn></div>
                <div><v-btn @click="onLogout">Logout</v-btn></div>
                <pre>User - {{ user }}</pre> -->

                <Nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
    name: 'DefaultLayout',

    computed: {
        // ...mapGetters(['user']),
    },

    // methods: {
    //     async onSignIn() {
    //         try {
    //             await this.$fire.auth.signInWithEmailAndPassword(
    //                 'onechifu@gmail.com',
    //                 '123456'
    //             );
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     },
    //     async onLogout() {
    //         try {
    //             await this.$fire.auth.signOut();
    //             console.log('LOGOUT', this.$fire.auth.currentUser);
    //             this.$router.app.refresh();
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     },
    // },
};
</script>
