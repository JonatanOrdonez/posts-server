import { Express } from 'express';
import ExpressLoader from './express';

export default class Loader {

    private app: Express;

    constructor(app: Express) {
        this.app = app;
    }

    public async init(): Promise<any> {
        new ExpressLoader(this.app).init();
    }
}