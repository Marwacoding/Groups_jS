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

        console.log(student_list)
    }

}



//first input into a var

const userInput = document.querySelector("#inputName");
const displayGroup = document.querySelector(".displayGroup");

// click event to store link it to the click event
// inner HTMl, value == write element value in HTML

let btn_add = document.querySelector("#btnadd")

btn_add.addEventListener("click", (e) => {
    my_arr(userInput.value)

        let arr_shuffle = shuffle(student_list)
        console.log(arr_shuffle)
        localStorage.setItem('list', student_list)
        ul = document.querySelector('#student_list')

        function add_li_html() {

        if (userInput.value.length > 0) {

            const li_element = document.createElement('li');
            li_element.innerHTML = userInput.value;
            li_element.classList.add('li_element')
            ul.appendChild(li_element);

        }}

        add_li_html()
        userInput.value = '';
        
})

btn_add.addEventListener("keypress", (e) => {
    console.log('hello')
    if (e.keyCode === 'Enter') { 
        //arr(userInput.value)
        console.log('hello')
        ///add_li_html()
    };
});

//Partie 2
//Former les groups

// Variable 
//Event listener => store la valeur de l'input dans une variable

let diviserBtn = document.querySelector("#makeGroup")

numberPeople.addEventListener("input", function peoplePerGroup() {  
    nbrPerGroups = numberPeople.value
    console.log('this is my nbrPerGroups', nbrPerGroups)

});

diviserBtn.addEventListener("click", (e) => {

    const nbrPerGroups = document.querySelector("#numberPeople").value 
    console.log('variable nbr_per_groups', nbrPerGroups)
    const divGroups = document.querySelector(".forming_groups");
    let finalGroups = groupsGenerator(student_list, nbrPerGroups)
    console.log('this is my final groups',finalGroups)


    divGroups.innerHTML = " ";
    for (let i = 0; i < finalGroups.length; i++) {
        divGroups.appendChild(createDiv(finalGroups[i]))
    }
 
});


//fuction that add input to an array
function my_arr(names) {

    student_list.push((document.querySelector('.name').value))

}

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
   console.log("show the arr element : ", an_arr)
}
    return formedGroups
    
}

function createDiv(i){

    let div = document.createElement('div');
    div.classList.add('groupDiv');

    let titleDiv = document.createElement('div');
    titleDiv.classList.add('titleDiv')
    titleDiv.innerText = `Groupe ${i.join(" ")}`

    let groupDiv = document.createElement('div')
    groupDiv.classList.add('groupName')

    div.appendChild(titleDiv)
    titleDiv.appendChild(groupDiv)

    return div
}

createDiv()