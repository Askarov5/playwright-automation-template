import { IEndpointDbRes, IEndpointReq } from 'api/types/type';
import { runQuery } from 'utils/sqlDb';
import { getEndpointTestInputsQuery, getEndpointExpectedDataQuery } from './queries';
import { IRecordSet } from 'mssql';

export const getEndpointExpectedData = async (reqData: IEndpointReq) => {
  const res = await runQuery(getEndpointExpectedDataQuery(reqData), 'dbServer2');

  const results: IEndpointDbRes[] =
    res?.recordset as IRecordSet<IEndpointDbRes>;
  return results;
};

export const getEndpointTestInputs = async (rd: IEndpointReq) => {
  const res = await runQuery(getEndpointTestInputsQuery(rd), 'dbServer2');

  return res?.recordset[0];
};
