import { Router } from 'express';

const sampleRouter = Router();

sampleRouter.get('/', async (req, res, next) => {
  return res.json('sample response.')
})

export default sampleRouter;
