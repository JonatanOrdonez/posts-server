export default class UserService {
    constructor() {

    }

    public SignIn(username: string, password: string): any {
        return {username: username, password: password};
    }
}