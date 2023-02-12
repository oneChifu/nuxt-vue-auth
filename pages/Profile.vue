<template>
    <div>
        <h1>Profile</h1>
    </div>
</template>

<script>
export default {
    name: 'ProfilePage',

    // router: {
    //     params: {
    // isNeedAuth: true
    //     }
    // }

    // asyncData()
    middleware: 'auth'
}
</script>
