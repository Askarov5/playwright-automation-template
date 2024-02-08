/**
 * This file is used to connect to the SQL Server database and run queries.
 * It can run queries on multiple SQL servers and databases.
 * It uses the mssql/msnodesqlv8 package to connect to the database.
 * It also uses the .env file to store the database connection details.
 * The runQuery function takes a query string and runs it on the database.
 * It also takes the SQL server and database type as parameters.
 * The getSqlConfig function is used to get the SQL configuration based on the SQL server and database type.
 * The runQuery function is an async function that connects to the database, runs the query, and returns the result.
 */

import dotenv from 'dotenv';
import { connect, query, config } from 'mssql/msnodesqlv8';
import { TDbType, TSqlServer } from './types';

dotenv.config({ path: `./environments/.env.${process.env.NODE_ENV}` });

// sql configs
const sqlConfig1: config = {
  server: process.env.SQL_SERVER_SSDS as string,
  driver: process.env.SQL_DRIVER_SSDS,
  user: process.env.SQL_USER_SSDS, //ATTENTION: Please make sure to change it to your own Windows Local ID in the env document
  password: process.env.SQL_PASSWORD_SSDS,
  database: process.env.SQL_DATABASE_SSDS,
  options: {
    trustedConnection: false,
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

// sql configs
const sqlConfig2 = (dbType: TDbType) => {
  const db =
    dbType == 'cust'
      ? process.env.SQL_DATABASE_FACETS_CUST
      : process.env.SQL_DATABASE_FACETS_BASIC;
  return {
    server: process.env.SQL_SERVER_FACETS as string,
    driver: process.env.SQL_DRIVER_FACETS,
    user: process.env.SQL_USER_FACETS, //ATTENTION: Please make sure to change it to your own Windows Local ID in the env document
    password: process.env.SQL_PASSWORD_FACETS,
    database: db,
    options: {
      trustedConnection: false,
      trustServerCertificate: true, // change to true for local dev / self-signed certs
    },
  };
};

const getSqlConfig = (sqlServer: TSqlServer, dbType: TDbType) => {
  switch (sqlServer) {
    case 'dbServer1':
      return sqlConfig1;
    case 'dbServer2': {
      if (dbType == 'cust') return sqlConfig2(dbType);
      else return sqlConfig2(dbType);
    }
    default:
      return sqlConfig1;
  }
};

export const runQuery = async (
  queryStr: string,
  sqlServer: TSqlServer,
  dbType: TDbType = 'basic'
) => {
  let connection;
  let result;
  try {
    connection = await connect(getSqlConfig(sqlServer, dbType));
    result = await query(queryStr);
    return result;
  } catch (err) {
    console.error('DB error: ' + err);
  } finally {
    await connection?.close();
  }
};
