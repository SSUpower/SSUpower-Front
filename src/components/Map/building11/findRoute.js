import BFS from "./BFS";

const findRoute = (classID, gate, stair, elevator, array3D) => {
  classID = String(classID);
  let Destdepth = parseInt(classID.charAt(0)) - 1;
  let classLocation = "";
  let start = gate;

  switch (classID.slice(1)) {
    case "01":
      classLocation = "A";
      break;
    case "02":
      classLocation = "B";
      break;
    case "03":
      classLocation = "C";
      break;
    case "04":
      classLocation = "D";
      break;
    case "05":
      classLocation = "E";
      break;
    case "06":
      classLocation = "F";
      break;
    case "07":
      classLocation = "G";
      break;
    case "08":
      classLocation = "H";
      break;
    case "09":
      classLocation = "I";
      break;
    case "10":
      classLocation = "J";
      break;
    case "11":
      classLocation = "K";
      break;
    case "12":
      classLocation = "L";
      break;
    case "13":
      classLocation = "M";
      break;
    case "14":
      classLocation = "N";
      break;
    case "15":
      classLocation = "O";
      break;
    case "16":
      classLocation = "P";
      break;
    default:
      console.log(`Invalid classID: ${classID}`);
      return;
  }

  console.log(
    `Depth: ${Destdepth}, Class Location: ${classLocation} Sdepth: ${start[0]}, Srow: ${start[1]}, Scol: ${start[2]}`
  );
  // BFS 호출
  // console.log(`${array3D[0][5][4]}`);
  const route = BFS(start, Destdepth, classLocation, stair, elevator, array3D);
  return route;
};

export default findRoute;
