const getCellColor = (char) => {
    switch (char) {
      case 'A':
      case 'a':
        return '#E4BCB1';
      case 'B':
      case 'b':
        return '#FAE39D';
      case 'C':
      case 'c':
        return '#ACBD98';
      case 'D':
      case 'd':
        return '#A2D0DB';
      case 'E':
      case 'e':
        return '#C4B9D0';
      case 'F':
      case 'f':
        return '#FFE5DB';
      case 'G':
      case 'g':
        return '#D0c8B6';
      case '0':
        return '#D3D3D3';
      case '9':
        return '#515E63';
      case '2':
        return '#DEEFFF';
      case '3':
        return '#CDE2F4';
      case '4':
        return '#C0DFF0';
      case '%':
        return '#2e3a51';
      default:
        return '#FAFAFA';
    }
  };
  
  export default getCellColor;
  