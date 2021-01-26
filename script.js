//Partie 1
//Creer la liste de nom
student_list = []

function listStored(){
    if (localStorage.getItem("list") === null) {
        student_list = []
    }
    else {
        student_list = localStorage.getItem("list").split(",")
        document.getElementById("student_list").innerText = student_list

         document.querySelector("#student_list").innerHTML += 
        "<li>"+document.querySelector('.name').value+"</li>";

        console.log(student_list)
    }

}

listStored()


//first input into a var

const userInput = document.querySelector("#inputName");
const displayGroup = document.querySelector(".displayGroup");


// click event to store link it to the click event

let btn_add = document.querySelector("#btnadd")

btn_add.addEventListener("click", (e) => {
    arr(userInput.value)

    
    let arr_shuffle = shuffle(student_list)
    console.log(arr_shuffle)
    localStorage.setItem('list', student_list)
    ul = document.querySelector('student_list')

    if (userInput.value.length > 0) {
        const li_element = document.createElement('li');
        li_element.innerHTML = userInput.value;
        ul.appendChild(li_element);
        userInput.value = '';
    }


})

//Partie 2
//Former les groups

// Variable 
//Event listener => store la valeur de l'input dans une variable
let nbrPerGroups = document.querySelector("#groups_name")
let diviserBtn = document.querySelector("#makeGroup")

numberPeople.addEventListener("input", function(event) {
      usersChoiceGroups = numberPeople.value
      console.log(numberPeople.value)
});


diviserBtn.addEventListener("click", (e) => {
    
    let finalGroups = groupsGenerator(student_list, 2) //usersChoiceGroups )
    console.log("log of final groups ", finalGroups)
    

    //document.getElementById()

    //let div = document.createElement


});



//fuction that add inpur to an array
function arr(names) {

    student_list.push((document.querySelector('.name').value))

}

let arr_shuffle = shuffle("name", student_list)


//Shuffle function
function shuffle(arr) {
    let new_arr = [];
       for (let i = arr.length-1; i > 0; i--) {
        j = Math.floor(Math.random() * i);
        [arr[i], arr[j]] = [arr[j], arr[i]] 
  };
  return arr
  }


//function that generates groups
function groupsGenerator(an_arr, diviser) {
formedGroups = []

for (let i=0; i < an_arr.length; i+=diviser) {

    // separe l'array par groupe /r au diviseur
    formedGroups.push(an_arr.slice(i, i+diviser))
   // console.log("show the arr element : ", formedGroups)
    
}
    
    return formedGroups
    
}

