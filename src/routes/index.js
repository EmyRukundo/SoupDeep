import express from 'express';
import {addMessage,messagesPage ,indexPage } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage)
indexRouter.post('/messages', addMessage);

export default indexRouter;
