


//List of student
list_name = [];
 document.querySelector("#name_btn").addEventListener("click", () => 
 {
     let studentName  = document.querySelector("#input_Name").value
     console.log(studentName)

     list_name.push(studentName)
     console.log(list_name)

     let strArr = JSON.stringify(list_name);
 
     // to save your array
     localStorage.setItem("YOUR_KEY",strArr);
 
     // to read from localstorage
     var yourOriginalArray = localStorage.getItem("YOUR_KEY");
 })

 document.querySelector("#forming_groups").addEventListener("click", () => {
    groups = len(list_name)/
    console.log(list_name)



 })


