/*
  Url builder 
  This file contains all the url builder for the application.
  It makes it easy to manage all the urls in one place with the help of environment variables.
  It also makes it easy to change the urls in the future. For example, if API version changes, we can change it in one place.
*/
const baseUrl = process.env.BASE_URL;
const version = '/v1';
const endpointApiPath = `/api/endpoint`;

const baseUrlPublic = process.env.BASE_URL_PUBLIC;

export const buildUrl = {
  getHealthCheck: () => baseUrl + endpointApiPath + `/health`,
  getPrivateEndPointUrl: () => baseUrl + endpointApiPath + version + `/search`,
  getPublicEndPointUrl: () => baseUrlPublic + `/endpoint/${version}/search`,
};
