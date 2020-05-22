import { Request, Response } from 'express';

class TestController {
    public index (req: Request, res: Response) {
        res.send('Hello Test')
    }
    
    public api (req: Request, res: Response) {
        res.send('Hello Test api')
    }
}

export const testController = new TestController(); 