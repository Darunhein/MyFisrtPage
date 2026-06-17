function showAlert2() {

    //Create event in this case alert
    alert('Hello there from Js inside another File')
}

    //Call for button by id
    const btnFile = document.getElementById('btn-file')

    //Give event to button
    btnFile.addEventListener('click', showAlert2)