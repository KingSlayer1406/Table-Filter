// Value Entry
let entry =document.getElementById("entry");
entry.addEventListener("click", displayDetails);
let row=1;
function displayDetails(){
    let name = document.getElementById("name").value;     /*storing the value in each of the id's*/
    let age = document.getElementById("age").value;       /*storing the value in each of the id's*/
    let grade = document.getElementById("grade").value;   /*storing the value in each of the id's*/

    if(!name || !age || !grade){
        alert("please fill all of the boxes");
        return;
    }

    let display = document.getElementById("display");
    let newRow = display.insertRow(row);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
cell1.innerHTML = name;
cell2.innerHTML = age;
cell3.innerHTML = grade;

row++;

}

// Search Function

let searchBox_1 = document.getElementById("searchBox-1");
searchBox_1.addEventListener("keyup", function(){
    let keyword = this.value;
    keyword = keyword.toUpperCase();
    let table_1 = document.getElementById("display");
    let all_tr = table_1.getElementsByTagName("tr");
    for(let i = 0; i<all_tr.length;i++){
        let all_column = all_tr[i].getElementsByTagName("td");
        for(j=0;j<all_column.length;j++){
            if(all_column[j]){
                let column_value = all_column[j].textContent || all_column[j].innerText;
                column_value = column_value.toUpperCase();
             if(column_value.indexOf(keyword)>-1){
                    all_tr[i].style.display ="";
                    break;
                  }else{
                    all_tr[i].style.display = "none";
                  }
        
            }

        }
        }})