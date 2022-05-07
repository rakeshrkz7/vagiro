import express, { Application, Request, Response, NextFunction} from 'express';
import { testRoute } from './routes/products.route';
const app: Application = express();

app.use('/products', testRoute);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Welcome!');
});


app.listen(5000, ()=> console.log('Server is running at port 5000'));