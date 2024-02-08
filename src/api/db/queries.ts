import { IEndpointReq } from 'api/types/type';

export const getEndpointExpectedDataQuery = (rd: IEndpointReq) => {
  // only prodId is always required
  return `
    SELECT DISTINCT 
        ISNULL(MP.ID,'') AS id,
        CONVERT(NVARCHAR(10),MP.MS_START_DATE,23) AS asOfDate,
        ISNULL(MP.CATEGORY_REF_ID,'') AS categoryId,
    FROM 1=1
        ${
          rd.id
            ? " AND MP.ID = '" + rd.id + "' "
            : ''
        }
        ${
          rd.categoryId
            ? ' AND MP.CATEGORY_REF_ID = ' + rd.categoryId
            : ''
        }
        AND ('${rd.asOfDate?.replaceAll(
          '-',
          ''
        )}' BETWEEN 	MPE.BENEFIT_START_DATE AND MPE.BENEFIT_END_DATE)
        
  `;
};

export const getEndpointTestInputsQuery = (rd: IEndpointReq) => {
  return `
    SELECT TOP 1    
      MP.ID AS id,
      MP.CATEGORY_REF_ID AS categoryId,       
      CONVERT(NVARCHAR(10),MP.MS_START_DATE,23) AS asOfDate,
    FROM  SS_SQL.MEMBER_PRODUCT MP
    WHERE 
      MP.ID IS NOT NULL
      AND MP.CATEGORY_REF_ID IS NOT NULL
  `
};
