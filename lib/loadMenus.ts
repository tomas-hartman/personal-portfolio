import { LinkConfig } from '../types';

export const loadMainMenu = async (): Promise<LinkConfig[]> => {
  const query = '*[_type=="menus"][0]';
  const apiUrl = 'https://dmlfco9b.api.sanity.io/v1/data/query/production?query=';
  
  const reqUrl = apiUrl + encodeURIComponent(query);

  const res = await fetch(reqUrl);
  const data = await res.json();
  
  return data.result.mainMenu;
};