import express, { Application, Request, Response, NextFunction} from 'express';

const app: Application = express();

const add = (a: number, b: number) : number => a+b;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log(add(2,3));
    res.send('hello');
});

app.listen(5000, ()=> console.log('Server is running at port 5000'));