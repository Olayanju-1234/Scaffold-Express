const fs = require('fs');
const path = require('path');

const scaffoldExpress = (projectName) => {
    const targetPath = path.join(process.cwd(), projectName);
    fs.mkdirSync(targetPath);

    const srcPath = path.join(targetPath, 'src');
    fs.mkdirSync(srcPath);

    // components
    const componentsPath = path.join(srcPath, 'components');
    fs.mkdirSync(componentsPath);
    
    const componentContent = `
        const express = require('express');

        const router = express.Router();

        router.get('/', (req, res) => {
            res.send('Hello World!');
        });

        module.exports = router;
    `;
    
    const componentPath = path.join(componentsPath, 'index.js');
    fs.writeFileSync(componentPath, componentContent);

    // test
    const testPath = path.join(srcPath, 'test');
    fs.mkdirSync(testPath);

    const testFiles = ['index.test.js'];
    testFiles.forEach((file) => {
        const filePath = path.join(testPath, file);
        fs.writeFileSync(filePath, '');
    }
    );

    // config
    const configPath = path.join(srcPath, 'config');
    fs.mkdirSync(configPath);

    const databaseContent = `
        const database = {
            development: {
                username: 'root',
                password: 'password',
                database: 'database_development',
                host: '',
            },

            test: {

            },

            production: {

            },

        };

        module.exports = database;
    `;
    const databasePath = path.join(configPath, 'database.js');
    fs.writeFileSync(databasePath, databaseContent);

    const defaultContent = `
        {
            "database": {

            }
        }
    `;
    const defaultPath = path.join(configPath, 'default.json');
    fs.writeFileSync(defaultPath, defaultContent);

    const developmentContent = `
        
    `;
    const developmentPath = path.join(configPath, 'development.json');
    fs.writeFileSync(developmentPath, developmentContent);

    const productionContent = `

    `;
    const productionPath = path.join(configPath, 'production.json');
    fs.writeFileSync(productionPath, productionContent);

    const configIndexContent = `
        const database = require('./database');
        const defaultConfig = require('./default.json');
        const developmentConfig = require('./development.json');
        const productionConfig = require('./production.json');

        module.exports = {
            database,
            defaultConfig,
            developmentConfig,
            productionConfig,
        };
    `;

    const configIndexPath = path.join(configPath, 'index.js');
    fs.writeFileSync(configIndexPath, configIndexContent);

    // utils
    const utilsPath = path.join(srcPath, 'utils');
    fs.mkdirSync(utilsPath);

    const utilsFiles = ['index.js'];
    utilsFiles.forEach((file) => {
        const filePath = path.join(utilsPath, file);
        fs.writeFileSync(filePath, '');
    }
    );

    // services
    const servicesPath = path.join(srcPath, 'services');
    fs.mkdirSync(servicesPath);

    const servicesFiles = ['index.js'];
    servicesFiles.forEach((file) => {
        const filePath = path.join(servicesPath, file);
        fs.writeFileSync(filePath, '');
    }
    );

    // middlewares
    const middlewaresPath = path.join(srcPath, 'middlewares');
    fs.mkdirSync(middlewaresPath);

    const middlewaresFiles = ['index.js'];
    middlewaresFiles.forEach((file) => {
        const filePath = path.join(middlewaresPath, file);
        fs.writeFileSync(filePath, '');
    }
    );

    // errors
    const errorsPath = path.join(srcPath, 'errors');
    fs.mkdirSync(errorsPath);

    const customErrorContent = `
        class CustomError extends Error {
            constructor(message, statusCode) {
                super(message);
                this.statusCode = statusCode;
            }
        }

        module.exports = CustomError;
    `;
    const customErrorPath = path.join(errorsPath, 'CustomError.js');
    fs.writeFileSync(customErrorPath, customErrorContent);

    const errorsIndexContent = `
        const CustomError = require('./CustomError');

        module.exports = {
            CustomError,
        };
    `;
    const errorsIndexPath = path.join(errorsPath, 'index.js');
    fs.writeFileSync(errorsIndexPath, errorsIndexContent);


    // app.js
    const appContent = `
        require('dotenv').config();
        require('express-async-errors')

        const express = require('express');
        const cors = require('cors');
        const morgan = require('morgan');
        const helmet = require('helmet');
        const compression = require('compression');
        const bodyParser = require('body-parser');
        const cookieParser = require('cookie-parser');

        const app = express();

        const port = process.env.PORT || 3000;

        app.use(cors());
        app.use(morgan('dev'));
        app.use(helmet());
        app.use(compression());
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cookieParser());

        app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        const start = async () => {
            // TODO: connect to database

            app.listen(port, () => {
                console.log(\`Listening on port \${port}\`);
            });
        };

        start();
    `;

    const appPath = path.join(srcPath, 'app.js');
    fs.writeFileSync(appPath, appContent);

    console.log('Scaffolding express project', projectName);
};

module.exports = scaffoldExpress;