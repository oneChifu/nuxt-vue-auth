export default ({ app, route, store, redirect }) => {
    // if (process.client) {
    console.log('Route middleware user', store.state.user);
    // }
    if (!store.state.user && !route.path.includes('login')) {
        return redirect('/login');
    } else if (store.state.user && route.path.includes('login')) {
        return redirect('/');
    }
};
