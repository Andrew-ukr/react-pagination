const paginate = (data) => {
  const visibleItem = 16;
  const paginationArray = Math.ceil(data.length / visibleItem);


  // масив в масиві array.from
  const newArr = Array.from({ length: paginationArray }, (item, i) => {
    const start = i * visibleItem; // початкова точка відліку яка буде збільшуватися на кількість видимих елементів при кожному прохолдженні масиву
    return data.slice(start, start + visibleItem);  // з початкового масиву даних вирізаємо ту кількість значень яка нам потрібна
  });

  return newArr;
};

export default paginate;
