class UserResource {
    constructor(axiosInst) {
        this.axiosInst = axiosInst
    }

    login(data) {
       return this.axiosInst.post('/login', data);
    }

    register(data) {
        return this.axiosInst.post('/register', data);
    }
}

export default UserResource