import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    // setPersistence,
    // browserSessionPersistence,
    // browserLocalPersistence,
} from 'firebase/auth';

export default async ({ $firebase, env, store, app, ...ctx }, inject) => {
    const auth = await getAuth($firebase);

    auth.signInWithEmailAndPassword = signInWithEmailAndPassword;

    onAuthStateChanged(
        auth,
        async (authUser) => {
            if (process.client) {
                await store.dispatch('onAuthStateChangedAction', authUser);
            }
        },
        async () => {
            await signOut();
        }
    );

    ctx.$auth = auth;
    inject('auth', auth);
};
