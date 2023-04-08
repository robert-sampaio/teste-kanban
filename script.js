/** help */
function log(message) {
    console.log('> ' + message)
}

/** app */
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')


/** our cards */
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    // log('CARD: Start Dragging')
    // this = card
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

    this.classList.add('is-dragging')
}

function drag() {
    // log('CARD: Is Dragging')
}

function dragend() {    
    // log('CARD: Stop Drag!')
    // this = card
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')
}

/** place where we'll drop cards */
dropzones.forEach( dropzones => {
    dropzones.addEventListener('dragenter', dragcenter)
    dropzones.addEventListener('dragover', dragover)
    dropzones.addEventListener('dragleave', dragleave)
    dropzones.addEventListener('drop', drop)
})

function dragcenter() {
    // log('DROPZONE: Enter in zone!')
}

function dragover() {
    // log('DROPZONE: Over!')
    // this = dropzone
    this.classList.add('over')

    // get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)
}

function dragleave() {
    // log('DROPZONE: Leave!')
    // this = dropzone
    this.classList.remove('over')
}

function drop() {
    // log('DROPZONE: Dropped!')
    this.classList.remove('over')
}