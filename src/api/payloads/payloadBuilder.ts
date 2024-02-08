import { IPostReq } from '../types/type';

const payloadWrapper = (data: object) => {
  return {
    data: JSON.stringify(data),
  };
};

export const getPostEndpointPayload = (rd: IPostReq) => {
  const reqBody: IPostReq = {
    id: rd.id,
    categoryId: rd.categoryId,
    asOfDate: rd.asOfDate,
  };

  return payloadWrapper(reqBody);
};
