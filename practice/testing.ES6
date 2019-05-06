const students = [{
    "name":"Maggie",
    "surname": "Moteno",
    "age": "19",
},
{
    "name":"COllen",
    "surname":"Maphike",
    "age":"20",
}

]
let studentsNames= students.filter((students)=>{
    return students.age==="20"
})
console.log(studentsNames);
