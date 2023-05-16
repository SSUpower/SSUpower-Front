import getCellColor from './getCellColor';

const getCellStyle = (char) => {
  const color = getCellColor(char);
  return { border: `1px solid ${color}`, backgroundColor: color };
};

export default getCellStyle;
