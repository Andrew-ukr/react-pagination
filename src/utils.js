const paginate = (data) => {
  const visibleItem = 16;
  const paginationArray = Math.ceil(data.length / visibleItem);

  const newArr = Array.from({ length: paginationArray }, (item, i) => {
    const start = i * visibleItem;
    return data.slice(start, start + visibleItem);
  });

  return newArr;
};

export default paginate;
