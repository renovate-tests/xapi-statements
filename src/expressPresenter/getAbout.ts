import { Request, Response } from 'express';
import catchErrors from './utils/catchErrors';
import Config from './Config';

export default (config: Config) => {
  return catchErrors(config, async (_req: Request, res: Response): Promise<void> => {
    const xapiVersion = '1.0.1';
    res.status(200).json({
      'X-Experience-API-Version': xapiVersion,
      version: [xapiVersion]
    });
  });
};
