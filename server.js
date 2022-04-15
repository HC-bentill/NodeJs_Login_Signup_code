//mogodb
require( './config/db' );

const cors = require("cors");
const app = require( 'express' )(); 
const port = process.env.PORT || 3000;

const useRouter = require('./api/User')

//For accepting post from data
const bodyParser = require( 'express' ).json;
app.use( bodyParser() );

//allow cross origin
app.use(cors());

app.use('/user', useRouter)

app.listen( port, () => {
    console.log( `Server running on port ${port}` );
})