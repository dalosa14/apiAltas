console.log(process.env)
let database = {
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_DATABASE || 'pd',
        host: process.env.DB_HOST || 'localhost'
}


module.exports ={
    database
    
}