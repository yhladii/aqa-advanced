const averageGrade = 82;

if (averageGrade < 60) {
  console.log("Nezadovilno");
} else if (averageGrade >= 60 && averageGrade <= 70) {
  console.log("Zadovilno");
} else if (averageGrade <= 80) {
  console.log("Dobre");
} else if (averageGrade <= 90) {
  console.log("Duzhe dobre");
} else if (averageGrade <= 100) {
  console.log("Vidminno");
}
