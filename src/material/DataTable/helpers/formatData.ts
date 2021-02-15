const convertByType = (data, type) => {
  switch (type) {
    case 'date':
      data = new Date(data).getTime();

      break;

    case 'money':
      console.log(1321321);

      break;
  }

  return data;
};

const formatData = (data, columns) => {
  return data.length
    ? data.map((item) => {
        for (const property in item) {
          if (typeof item[property] === 'object' && item[property] !== null) {
            if (!('f' in item[property])) {
              item[property]['f'] = item[property]['v'];
            }
          } else {
            item[property] = {
              v: item[property],
              f: item[property]
            };
          }

          try {
            item[property]['v'] = convertByType(
              item[property]['v'],
              columns.filter((column) => column.field === property)[0]['type']
            );
          } catch (e) {
            // console.error('Convert By Type: Something went wrong');
          }
        }

        return item;
      })
    : [];
};

export default formatData;
