
import express from 'express';
import * as WS from '../controllers/ws';

const app = express.Router();

app.get('/clima', WS.getData);

export = app;