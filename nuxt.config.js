import colors from 'vuetify/es5/util/colors';

export default {
    ssr: true,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'server',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - nuxt-app',
        title: 'nuxt-vue-auth',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: true,
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
            },
        ],
    },

    env: {
        FIRE_API_KEY: 'AIzaSyD9gk0HaiuNsXLH5DzDGmhX5cMUbhNCWyw',
        FIRE_AUTH_DOMAIN: 'lavrus-main.firebaseapp.com',
        FIRE_PROJECT_ID: 'lavrus-main',
        FIRE_STORAGE_BUCKET: 'lavrus-main.appspot.com',
        FIRE_MESSAGING_SENDER_ID: '862596851892',
        FIRE_APP_ID: '1:862596851892:web:056809c4d616004528cfe1',
        FIRE_MEASUREMENT_ID: 'G-V5VVDK1F5L',
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{ src: '~/plugins/firebase' }, { src: '~/plugins/auth' }],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/axios'],

    // Nuxt.js Middleware
    router: {
        middleware: ['router-auth'],
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/scss/variables.scss'],
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: colors.blue,
                    accent: colors.grey,
                    secondary: colors.amber.darken1,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },

    fireTEST: {
        // config: {
        //     apiKey: 'AIzaSyD9gk0HaiuNsXLH5DzDGmhX5cMUbhNCWyw',
        //     authDomain: 'lavrus-main.firebaseapp.com',
        //     projectId: 'lavrus-main',
        //     storageBucket: 'lavrus-main.appspot.com',
        //     messagingSenderId: '862596851892',
        //     appId: '1:862596851892:web:056809c4d616004528cfe1',
        //     measurementId: 'G-V5VVDK1F5L',
        // },
        services: {
            auth: {
                performance: true,
                analytics: true,
                ssr: {
                    serverLogin: {
                        // Takes a duration in milliseconds
                        sessionLifetime: 0,
                        // Takes a duration in milliseconds
                        loginDelay: 50,
                    },
                },
                initialize: {
                    onAuthStateChangedAction: 'onAuthStateChangedAction',
                },
            },
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
