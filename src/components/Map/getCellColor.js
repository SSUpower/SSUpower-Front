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
      case 'H':
      case 'h':
        return '#E4BCB1';
      case 'i':
      case 'I':
        return '#FAE39D';
      case 'J':
      case 'j':
        return '#ACBD98';
      case 'K':
      case 'k':
        return '#A2D0DB';
      case 'L':
      case 'l':
        return '#C4B9D0';
      case 'M':
      case 'm':
        return '#FFE5DB';
      case 'N':
      case 'n':
        return '#D0c8B6';
      case 'O':
      case 'o':
        return '#E4BCB1';
      case 'P':
      case 'p':
        return '#FAE39D';
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
  