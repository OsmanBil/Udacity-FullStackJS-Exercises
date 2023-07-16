const jwt = require('jsonwebtoken');

// Definiere den Payload für das Token
const payload = {
  user_id: 123,
  username: 'john_doe',
  role: 'admin'
};

// Definiere den geheimen Schlüssel, der zum Signieren des Tokens verwendet wird
const secretKey = 'dein_geheimer_schluessel';

// Generiere das JWT
const token = jwt.sign(payload, secretKey, { algorithm: 'HS256' });
console.log('Generiertes Token:', token);

try {
  // Überprüfe das Token
  const decodedToken = jwt.verify(token, secretKey);
  console.log('Entschlüsseltes Token:', decodedToken);

  // Du kannst auf spezifische Eigenschaften des Payloads zugreifen
  console.log('user_id:', decodedToken.user_id);
  console.log('username:', decodedToken.username);
  console.log('role:', decodedToken.role);
} catch (error) {
  console.error('Token-Überprüfung fehlgeschlagen:', error);
}





// import bcrypt from 'bcrypt';
// const Client = require("../database").default;


// const pepper = 'your-pepper-value';
// const saltRounds = 10;


// export type User = {
//     username: string;
//     email: string;
//     password: string;
// }



// const hash = bcrypt.hashSync(u.password + pepper, saltRounds);

// export class UserStore {

//     async create(u: User): Promise<User> {
//         try {
//           // @ts-ignore
//           const conn = await Client.connect()
//           const sql = 'INSERT INTO users (username, password_digest) VALUES($1, $2) RETURNING *'
    
//           const hash = bcrypt.hashSync(
//             u.password + pepper, 
//             saltRounds
//           );
    
//           const result = await conn.query(sql, [u.username, hash])
//           const user = result.rows[0]
    
//           conn.release()
    
//           return user
//         } catch(err) {
//           throw new Error(`unable create user (${u.username}): ${err}`)
//         } 
//       }
    
//       async authenticate(username: string, password: string): Promise<User | null> {
//         const conn = await Client.connect()
//         const sql = 'SELECT password_digest FROM users WHERE username=($1)'
    
//         const result = await conn.query(sql, [username])
    
//         console.log(password+pepper)
    
//         if(result.rows.length) {
    
//           const user = result.rows[0]
    
//           console.log(user)
    
//           if (bcrypt.compareSync(password+pepper, user.password_digest)) {
//             return user
//           }
//         }
    
//         return null
//       }
// }
