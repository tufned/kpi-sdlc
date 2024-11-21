import express from 'express';
import serverSetup from './init/serverSetup.js';

const app = express();

serverSetup(app);
