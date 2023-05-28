const addBtn = document.querySelector('.add')
const deleteAllBtn = document.querySelector('.delete-all')
const deleteNoteBtn = document.getElementById('.delete-note')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textArea = document.querySelector('#text')
const error = document.querySelector('.error')
let selectedValue
let cardID = 0

const panelShow = () => {
	notePanel.style.display = 'flex'
}

const panelClose = () => {
	notePanel.style.display = 'none'
	error.style.visibility = 'hidden'
	category.selectedIndex = 0
	textArea.value = ''
	error.style.visibility = 'hidden'
}
const addNote = () => {
	if (category.value === 0 || textArea.value === '') {
		error.style.visibility = 'visible'
	} else {
		error.style.visibility = 'hidden'
		createNote()
		panelClose()
	}
}
const createNote = () => {
	cardID++
	const newNote = document.createElement('div')
	newNote.classList.add('note')
	newNote.setAttribute('id', cardID)
	const headerNote = document.createElement('div')
	headerNote.classList.add('note-header')
	const textNote = document.createElement('div')
	textNote.classList.add('note-body')
	const titleNote = document.createElement('h3')
	const closeNoteBtn = document.createElement('button')
	selectValue()
	textNote.textContent = textArea.value
	titleNote.classList.add('note-title')
	titleNote.textContent = `${selectedValue} #${cardID}`
	closeNoteBtn.classList.add('delete-note')
	closeNoteBtn.innerHTML = '<i class="fas fa-times icon"></i>'

	headerNote.append(titleNote, closeNoteBtn)
	newNote.append(headerNote, textNote)
	noteArea.append(newNote)
	checkColor(newNote)
}
const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text
}
const checkColor = note => {
	switch (selectedValue) {
		case 'Zakupy':
			note.style.backgroundColor = 'rgb(72,255,0)'
			break
		case 'Praca':
			note.style.backgroundColor = 'rgb(255,243,0)'
			break
		case 'Inne':
			note.style.backgroundColor = 'rgb(0,170,255)'
			break
	}
}

const deleteNote = e => {
	if (e.target.closest('.delete-note')) {
		console.log(e.target.closest('.note'))
		e.target.closest('.note').remove()
	}
}

const deleteAll = () => {
	const notes = document.querySelectorAll('.note')
	notes.forEach(note => {
		note.remove()
	})
}
addBtn.addEventListener('click', panelShow)
cancelBtn.addEventListener('click', panelClose)
saveBtn.addEventListener('click', addNote)
window.addEventListener('click', deleteNote)
deleteAllBtn.addEventListener('click', deleteAll)
