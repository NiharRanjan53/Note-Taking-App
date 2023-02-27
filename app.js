const addBtn = document.querySelector("#addBtn")
const main = document.querySelector(".main")
const saveNotes = () => {
    const notes =  document.querySelectorAll(".note textarea");
    //console.log(notes);
    const data = [];
    notes.forEach(
        (note) =>{
            data.push(note.value);
        }
    )
    //console.log(data);

    if(data.length === 0){
        localStorage.removeItem("notes")
    }else{
        localStorage.setItem("notes", JSON.stringify(data));
    }

}

addBtn.addEventListener(
    "click",
    function () {
        //alert("Hello")
        addNote()
    }
)


const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tool">
        <i class="save fa-solid fa-floppy-disk"></i>
        <i class="trash fa-solid fa-trash"></i>
    </div>
    <textarea name="" id="" cols="30" rows="10" placeholder = "Write">${text}</textarea>
    `;
    note.querySelector(".trash").addEventListener(
        "click",
        function () {
            note.remove();
            saveNotes();
        }

    )
    note.querySelector(".save").addEventListener(
        "click",
        function () {
            saveNotes()
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            saveNotes()

        }
    )
    main.append(note);
    saveNotes();
}
(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        //console.log(lsNotes)
        if(lsNotes === null){
            addNote()
        }else{
            lsNotes.forEach(
                (lsNote) =>{
                    addNote(lsNote);
                }
            )
        }
    }
)()

