import { config } from "./config.mjs";
import mysql from "mysql"
import query from "./src/models/table.model.mjs"

var connection;
export const mysqlClient = async () => {
    const dbConfig = {
        host: config.database.host,
        database: config.database.name,
        user: config.database.user,
        password: config.database.password,
    };
  
    const getConnection = async () => {
        try {
            connection = mysql.createConnection(dbConfig)
            connection.connect(error => {
                if (error) {
                    console.log('ERROR CONNECTING DATABASE', error.sqlMessage);
                    return;
                }
                console.log("Successfully connected to the database.");
            })
            connection.query(query, (err) => {
                if (err) {
                    console.log('ERROR CREATING TABLES', err.sqlMessage);
                    return;
                }
            });
            return connection;
        } catch ( err ) {
            console.log('ERROR CONNECTING SQL SERVER', err);
            return;
        }
    };
  
    return {
        sqlConn: getConnection()
    };
};

export const getSqlConnection = () => {
    return connection;
}