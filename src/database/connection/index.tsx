import * as SQLite from 'expo-sqlite';

export const DBConnection = SQLite.openDatabase('yourlist.db');
