const formatDisplayData = (
  data: any,
  field: string,
  type: string,
  columnHandler: (data: any) => void
) => {
  let value = data[field]['f'];

  if (columnHandler) {
    value = columnHandler(data);
  } else {
    switch (type) {
      case 'boolean':
        value = true === value ? 'yes' : 'no';
        break;
      case 'date':
        value = value || 'N/A';
        break;
    }
  }

  return value;
};

export default formatDisplayData;
