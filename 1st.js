const studentsNames = ["Abu", "Hurayra", "Touhid", "John", "Doe"];

const searchTheStudentByName = (searchText, studentsNames)=>{

   for (let i = 0; i < studentsNames.length; i++) {
    if(studentsNames[i] === searchText){
        console.log("Found", searchText)
    }
    
   }
}

const result =  searchTheStudentByName("Abus", studentsNames)
