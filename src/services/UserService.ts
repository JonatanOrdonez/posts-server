export default class UserService {
    constructor() {

    }

    async SignIn(username: string, password: string) {
        return {username: username, password: password};
    }
}