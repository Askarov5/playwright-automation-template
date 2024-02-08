export interface IErrorRes {
  detail: string;
  status: number;
  title: string;
  type: string;
}
// DB
export type TSqlServer = 'dbServer1' | 'dbServer2';
export type TDbType = 'basic' | 'cust';

// Environments
export type TEnvironments = 'dev' | 'qa' | 'uat' | 'prod';
