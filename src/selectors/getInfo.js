export const getInfo = (datas) => {
  const data = [];
  for (const key in datas) {
    data.push({ data: key, value: datas[key] });
  }

  return data;
};
