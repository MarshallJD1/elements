// create element variables :
const addToListBtn = document.querySelector('#addToListButton'); //relevent to html
const listTextInput = document.querySelector('#listTextInput');
const myList = document.querySelector('#myList');



// Add event listener to the button 
addToListBtn.addEventListener('click', addToList);



// Add event listener to the textbox
listTextInput.addEventListener('keypress', addToList);


function addToList(e) {

    //create a function to add an item to the list
    //check too see if the eneter key was pressed
    if (e.keyCode == 13 || e.target.textContent == "Add To List") {


        //check that there is text to add
        if (listTextInput.value) {



            // create a new list item object <li>
            const newListElement = document.createElement("li");

            //add an event listenet to the li - 
            newListElement.addEventListener('click', removeFromList);
            //add text and some html for delete button // inline java scriot
            newListElement.innerHTML = listTextInput.value + "<buton onclick='removeFromList'>Delete</button>";
            //add new list item to the list
            myList.appendChild(newListElement);

            //clear text box
            listTextInput.value = "";
            //focus on the text box
            listTextInput.focus();


        }
    }
}
//create a function to remove an item from the list
function removeFromList(e) {
    //confirm deletion
    if (confirm('Are you sure you want to delete this item?')) {
        //remove the item from the list
        const listItem = e.target.parentNode;
        //remove the item from the list
        listItem.parentNode.removeChild(listItem);
        //focus on the text box
        listTextInput.focus();
    }
}

