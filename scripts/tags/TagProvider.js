const eventHub = document.querySelector('.container')


eventHub.addEventListener('tagEvent', customEvent => {
    console.log("tag event heard: ", customEvent.detail)
}) 