import { getSqlConnection } from "../../database.mjs"

class UserModel {
    createUser(data) {
        return new Promise((resolve, reject)=>{
            const userQuery = `INSERT INTO USER(name, email, password) VALUES('${data.name}', '${data.email}', '${data.password}');`
            getSqlConnection().query(userQuery,  (error, elements)=>{
                if(error){
                    return reject({
                        message: error.sqlMessage
                    });
                }
                return resolve(elements);
            });
        });
    }

    getUser(data) {
        return new Promise((resolve, reject) => {
            const getUserQuery = `SELECT * FROM USER WHERE email='${data.email}' and password='${data.password}'`;
            getSqlConnection().query(getUserQuery,  (error, elements)=>{
                if(error){
                    return reject({
                        message: error.sqlMessage
                    });
                }
                return resolve(elements);
            });
        })
    }
}

export default UserModel