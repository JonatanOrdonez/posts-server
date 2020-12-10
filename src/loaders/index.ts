import { Application as ExpressApp } from 'express';
import ExpressLoader from './express';

export default class Loader {
    private app: ExpressApp;

    constructor(expressApp: ExpressApp) {
        this.app = expressApp;
    }

    public async init(): Promise<any> {
        new ExpressLoader(this.app).init();
    }
}