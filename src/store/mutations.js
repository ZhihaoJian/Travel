const mutations = {
    changeCity(state, city) {
        state.city = city;
        try {
            localStorage.setItem('city', city)
        } catch (error) {
            console.warn(error);
        }
    }
}

export default mutations;