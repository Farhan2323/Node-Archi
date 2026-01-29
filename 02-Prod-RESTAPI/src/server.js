//Entry point
const pool = require('./db');
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error connecting to the database', err); 
    } else {
        console.log('Database connected:', res.rows[0]);
    }   
});


const app = require('./app'); 
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

