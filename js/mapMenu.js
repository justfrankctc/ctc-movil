var j$ = jQuery.noConflict();

j$('#menu').toggle();

j$('#menuCollapse').click(function(){
    j$('#menu').toggle();
});

// Get the modal
var modalInd = j$('#modal-Ind');
var modalCom = j$('#modal-Com');
var modalAle = j$('#modal-Ale');
var modalGeo = j$('#modal-Geo');

// Get the trigger that opens the modal
var tgrInd = j$('#Ind');
var tgrCom = j$('#Com');
var tgrAle = j$('#Ale');
var tgrGeo = j$('#Geo');

// Get the <span> element that closes the modal
var span = j$('.close');

//listeners
tgrInd.click(function() {
    openModal(modalInd);
});

tgrCom.click(function() {
    openModal(modalCom);
});

tgrAle.click(function() {
    openModal(modalAle);
});

tgrGeo.click(function() {
    openModal(modalGeo);
});

span.click(function(event) {
    // debugger;
    closeModal(modalInd);
    closeModal(modalCom);
    closeModal(modalAle);
    closeModal(modalGeo);
    // if(event.target.dataset.target == modalInd[0].Id){
    //     closeModal(modalInd);
    // }
    // if(event.target.dataset.target == +modalCom[0].Id){
    //     closeModal(modalCom);
    // }
    // if(event.target.dataset.target == +modalAle[0].Id){
    //     closeModal(modalAle);
    // }
    // if(event.target.dataset.target == +modalGeo[0].Id){
    //     closeModal(modalGeo);
    // }
});

// When the user clicks the button, open the modal 
function openModal(modal) {
    
    modal[0].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal(modal) {
    
    modal[0].style.display = "none";
}

window.onclick = function(event) {
    // if (event.target == modal) {
        if(event.target == modalInd[0]){
            closeModal(modalInd);
        }
        if(event.target == modalCom[0]){
            closeModal(modalCom);
        }
        if(event.target == modalAle[0]){
            closeModal(modalAle);
        }
        if(event.target == modalGeo[0]){
            closeModal(modalGeo);
        }
    // }
}