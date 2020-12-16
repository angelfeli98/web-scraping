
import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import app from './routes/ws';
require('./config/config');


export default class Server{

    private port: string | undefined;
    private server: express.Application;

    constructor(){
        this.port = process.env.PORT
        this.server = express();

        this.configurateServe();
        this.runServer();
    }

    private configurateServe = (): void => {
        this.server.use(cors());
        this.server.use(bodyparser.json());
        this.server.use(bodyparser.urlencoded({extended: true}));

        this.server.use('/ws', app);
    }

    private runServer = (): void => {
        this.server.listen(this.port, () => console.log(`Server ready at http://localhost:${this.port}/ws/clima`));
    }
}