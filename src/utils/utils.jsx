export const pagination = (data) => {
  const itemsPerPage = 6;
  const pages = Math.ceil(data.length / itemsPerPage);
  const NewData = Array.from({ length: pages }, (_, idnex) => {
    const start = idnex * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });
  return NewData;
};
