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

    uploadFile(data) {
        return this.axiosInst.post('/upload', data, {headers: {'content-type': 'multipart/form-data;'}})
    }

    getList() {
        return this.axiosInst.get('/list');
    }
}

export default UserResource