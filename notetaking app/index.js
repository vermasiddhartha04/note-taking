function saveNote() {
    var noteInput = document.getElementById("noteInput");
    var noteList = document.getElementById("noteList");
  
    if (noteInput.value.trim() !== "") {
      var li = document.createElement("li");
      li.textContent = noteInput.value;
      noteList.appendChild(li);
      noteInput.value = "";
  
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-btn";
      deleteButton.onclick = function() {
        noteList.removeChild(li);
      };
      li.appendChild(deleteButton);
    } else {
      alert("Please enter a note.");
    }
  }
  