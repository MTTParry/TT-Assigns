var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
//cycles through and applies this functionality to all of the buttons with the "collpasible" class
    coll[i].addEventListener("click", function() {
    //this.classList.toggle("active");
        var content = this.nextElementSibling;
        //sibling after button; "this" refers to the button element
        if (content.style.display === "block") {
        //if next sibling is displayed
            content.style.display = "none";
            //switches to not being displayed
        } else {
            content.style.display = "block";
            //if not block, it changes to block (display)
        }
    });
}
