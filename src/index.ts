import express from 'express';
import path from 'path';

// Import Routes
import IndexRoutes from './routes'
import TestRoutes from './routes/test'

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware´s
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', IndexRoutes);
app.use('/test', TestRoutes);

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

// Start
app.listen(
    app.get('port'),
    () => {
        console.log(`Server on port ${app.get('port')}`);
    }
);