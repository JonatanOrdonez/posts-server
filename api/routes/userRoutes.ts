import express, { Express } from "express";

class UserRoutes {
    
    public app: Express;

    constructor() {
        this.app = express();
        this.init();
    }

    private init(): void {
        this.app.get('/users', (req, res) => {res.status(200).json({user: 'jonatan'})});
    }
}

export default new UserRoutes().app;