import BFS from "../BFS";

const findRoute21 = (classID, array3D) => {
  classID = String(classID);
  let Destdepth = parseInt(classID.charAt(0)) - 1;
  let classLocation = "";
  let start = [0, 5, 4];

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
    default:
      console.log(`Invalid classID: ${classID}`);
      return;
  }

  console.log(
    `Depth: ${Destdepth}, Class Location: ${classLocation} Sdepth: ${start[0]}, Srow: ${start[1]}, Scol: ${start[2]}`
  );
  // BFS 호출
  // console.log(`${array3D[0][5][4]}`);
  const route = BFS(start, Destdepth, classLocation, array3D);
  return route;
};

export default findRoute21;
