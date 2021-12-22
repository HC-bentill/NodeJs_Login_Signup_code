//mogodb
require( './config/db' );

const app = require( 'express' )(); 
const port = process.env.PORT || 3000;

const useRouter = require('./api/User')

//For accepting post from data
const bodyParser = require( 'express' ).json;
app.use( bodyParser() );

app.use('/user', useRouter)

app.listen( port, () => {
    console.log( `Server running on port ${port}` );
})