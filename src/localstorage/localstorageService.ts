interface apiInfo {
  apiProvider: string;
  apiDefaultVersion: string;
  apiKey: string;
}

export const localStorageSaveAPIInfo = (APIInfo: apiInfo) => {
  localStorage.setItem('APIInfo', JSON.stringify(APIInfo));
};

export const localStorageGetAPIInfo = () => {
  const data = localStorage.getItem('APIInfo');
  if (!data) return [];
  return JSON.parse(data);
};
