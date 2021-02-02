import { saveEntry } from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    clickEvent.preventDefault()
    if (clickEvent.target.id === "postEntry") {
        debugger
        const newEntry = {
            date: document.querySelector('#journalDate').value,
            concept: document.querySelector('#conceptsCovered').value,
            entry: document.querySelector('#journalEntry').value,
            mood: document.querySelector('#mood').value
        }
        saveEntry(newEntry)
    }
})