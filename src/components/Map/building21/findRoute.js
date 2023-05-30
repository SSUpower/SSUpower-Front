import BFS from "../BFS";

const findRoute21 = (classID, gate, base, array3D) => {
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
    default:
      console.log(`Invalid classID: ${classID}`);
      return;
  }

  console.log(
    `Depth: ${Destdepth}, Class Location: ${classLocation} Sdepth: ${start[0]}, Srow: ${start[1]}, Scol: ${start[2]}`
  );
  // BFS 호출
  const route = BFS(start, Destdepth+base, classLocation, array3D);
  return route;
};

export default findRoute21;
