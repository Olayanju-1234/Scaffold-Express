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
    
    const componentFiles = ['index.js', 'index.test.js'];
    componentFiles.forEach((file) => {
        const filePath = path.join(componentsPath, file);
        fs.writeFileSync(filePath, '');
    });

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

    const configFiles = ['database.js', 'default.json', 'development.json', 'production.json'];
    configFiles.forEach((file) => {
        const filePath = path.join(configPath, file);
        fs.writeFileSync(filePath, '');
    }
    );

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