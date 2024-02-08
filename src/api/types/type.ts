import { IErrorRes } from 'utils/types';

export type TResponse = IEndpointRes | IErrorRes[];

/*
 Get Demographics
*/
export interface IEndpointReq {
  id?: string;
  categoryId?: string;
  asOfDate?: string;
}

export interface IEndpointRes {
  id: string;
  categoryId: string;
  asOfDate: string;
}

export interface IEndpointDbRes {
  id: string;
  startDate: string;
  endDate: string;
  categoryId: string;
}

export interface IPostReq {
  id: string;
  categoryId: string;
  asOfDate: string;
}
