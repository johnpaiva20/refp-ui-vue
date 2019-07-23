export default new Vuex.Store({
    state: {
        packageVersion: JSON.parse(unescape(process.env.PACKAGE_JSON || '%7Bversion%3A0%7D')).version,
        // the rest of your state here},
        getters: {
            appVersion: (state) => {
                return state.packageVersion
            }
            // the rest of your getters here  
        },
    }
})