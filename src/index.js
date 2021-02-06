require('module-alias/register');
const app = require('@src/app');

// Server initialization
const main = async() => {
    await app.listen(3000);
    console.log('Server on port 3000');
};
 main();