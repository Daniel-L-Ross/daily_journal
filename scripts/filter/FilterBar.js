import { getMoods, useMoods } from "../JournalDataProvider.js"
import { moodFilter } from './MoodFilter.js'

const contentTarget = document.querySelector('.moodFilter')
const eventHub = document.querySelector('.container')

export const filterBar = () => {
    getMoods()
        .then(() => {
            const moods = useMoods()
            const render = () => {
                contentTarget.innerHTML = moodFilter(moods)
            }
            render()
        })
}


eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.name === "moodFilter") {
        console.log("mood filter selected")
    }
})