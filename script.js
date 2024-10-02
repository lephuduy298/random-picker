const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key == 'Enter'){
        setTimeout(() => {
            e.target.value = ''
        }, 10);

        randomSelect()
    }
})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '')
    .map(tag => tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect(){
    const times = 50

    const interval = setInterval(() => {
        const randomTag = pickrandomTag()

        if(randomTag !== undefined){
            highlightTag(randomTag)

            setTimeout(() => {
                unHighlightTag(randomTag)
            }, 200)
        }
    }, 200)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const tag = pickrandomTag()
            highlightTag(tag)
        }, 200)

    }, times * 200)
    
}

function pickrandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}

function unHighlightTag(tag){
    tag.classList.remove('highlight')
}
