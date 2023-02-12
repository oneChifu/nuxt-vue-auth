<template>
    <v-form ref="form">
        <v-text-field
            v-model="email"
            label="E-mail"
            type="email"
            required
        ></v-text-field>
        <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
        ></v-text-field>

        <v-btn color="primary"> Login </v-btn>
    </v-form>
</template>

<script>
export default {
    name: 'LoginPage',

    middleware: 'auth',

    data: () => ({
        email: 'onechifu@gmail.com',
        password: '123456',
    }),
}
</script>
