import { Router } from 'express';

import sampleRouter from './sample';

const router = Router();

router.use('/sample', sampleRouter);
router.get('/', (req, res) => {
  res.json('Hello World')
})

const notFoundHandler = (req, res, next) => {
  return res.status(404).json({
    success: false,
    message: 'Not found.'
  });
}

const errorHandler = (err, req, res, next) => {
  return res.status(500).json({
    success: false,
    message: 'Internal Server Error.',
  });
}

router.use(notFoundHandler);
router.use(errorHandler);

export default router;
