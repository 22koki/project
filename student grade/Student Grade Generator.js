function calculateGrade(){
  const marks = prompt("Enterstudent's marks(between 0 and 100):");



if (marks > 79) {
        return  'A';
      } else if (marks >= 60 && marks <= 79) {
        return 'B';
      } else if (marks >= 50 && marks <= 59) {
        return 'C';
      } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
      } else {
        return 'E';
      }
    }
    
    
