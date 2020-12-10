import express, { Express } from 'express';
import Loader from './loaders';
import config from './config';
import userRoutes from './api/routes/userRoutes';

class App {

    private app: Express;

    constructor() {
        this.app = express();
    }

    public async init(): Promise<any> {
        await new Loader(this.app).init();
        this.addRoutes();
        this.startServer();
    }

    private addRoutes(): void {
        this.app.use(userRoutes);
    }

    private startServer(): void {
        this.app.listen(config.port, () => {
            return console.log(`server listening on http://localhost:${config.port}`);
        });
    }
}

new App().init();