import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('database.db');

export const Database = {
  init: () => {
    return new Promise<void>((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS tasks (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              title TEXT,
              description TEXT,
              category TEXT,
              difficulty TEXT
            );`,
            [],
            () => {
              resolve();
            },
            (_, error) => {
              reject(error);
              return false;
            }
          );
        },
        (error) => {
          reject(error);
        },
        () => {
          resolve();
        }
      );
    });
  },
};

Database.init()
  .then(() => {
    console.log('Database initialized');
  })
  .catch((error) => {
    console.log('Error initializing database:', error);
  });
