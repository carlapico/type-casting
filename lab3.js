function assignGrade(gradeNumber){
    if (gradeNumber >= 90){
        return "A"
    } else
    if (gradeNumber >= 80 ) {
        return "B"
    } else
    if (gradeNumber >= 70){
        return "C"
    } else
    if (gradeNumber >= 60) {
        return "D"
    } else 
    if (gradeNumber >= 0)
        return "F"
}

const testGrade = assignGrade (85)

console.log(testGrade)


