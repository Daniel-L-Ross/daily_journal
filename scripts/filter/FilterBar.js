import { getMoods, useMoods } from "../JournalDataProvider.js"


const contentTarget = document.querySelector('.moodFilter')

export const filterBar = () => {
    getMoods()
    .then(() => {
        const moods = useMoods()
        render(moods)
    })
}

const render = moods => {
    console.log(moods)
    contentTarget.innerHTML = `
    <form action="">
    <fieldset class="moodFilter__options">
    <legend>Filter Journal Entries by Mood</legend>
    ${moods.map(mood => 
        `<input type="radio" name="moodFilter" value="${mood.id}">
        <label for="moodFilter--${mood.label}">${mood.label}</label>`
        )}
    <input type="radio" name="moodFilter" value="2">
    <label for="moodFilter--excited">Excited</label>
    </fieldset>
    </form>`
}