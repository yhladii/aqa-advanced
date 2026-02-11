const averageGrade = 60;

switch (true) {
  case averageGrade < 60:
    console.log("Nezadovilno");
    break;
  case averageGrade >= 60 && averageGrade <= 70:
    console.log("Zadovilno");
    break;
  case averageGrade <= 80:
    console.log("Dobre");
    break;
  case averageGrade <= 90:
    console.log("Duzhe dobre");
    break;
  case averageGrade <= 100:
    console.log("Vidminno");
    break;
  default:
    console.log("Invalid grade");
}
