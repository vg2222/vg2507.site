const modal = document.getElementById('modal')
const open = document.getElementById('open-anyways')
const cancel = document.getElementById('cancel')

const page1 = document.getElementById('page-1')
const page2 = document.getElementById('page-2')

let page2Opened = false

let currentLink = "none"

function openLink(link) {
    modal.classList.remove("hidden")

    currentLink = link

    const verified = document.getElementById('verified')

    document.getElementById('unverified-link').textContent = link

    if (link.startsWith("https://drive.google.com") || link.startsWith("https://t.me")) {
        verified.textContent = '(данный домен зарегестрирован как безопасный)'
        verified.style.color = '#76b183'
    } else {
        verified.textContent = '(данный домен не найден в списке безопасных)'
        verified.style.color = '#b17676ff'
    }
}

function openPage(pageNumber) {
    const pages = [page1, page2]
    const active = pageNumber === 1 ? page1 : page2
    const inactive = pageNumber === 1 ? page2 : page1

    active.style.display = ""

    inactive.classList.add("hidden")
    active.classList.remove("hidden")

    setTimeout(() => {
        inactive.style.display = "none"
    }, 200)
}

open.addEventListener('click', function() {
    window.open(currentLink, "_blank");
})

cancel.addEventListener('click', function() {
    modal.classList.add("hidden")
})

document.getElementById('title').addEventListener('click', function() {
    page2.classList.add("hidden")
    page1.classList.remove("hidden")
})

document.getElementById('products-link').addEventListener('click', function() {
    if (page2Opened == false) {
        openPage(2)

        page2Opened = true
    } else {
        openPage(1)

        page2Opened = false
    }
})

document.getElementById('telegram-link').addEventListener('click', function() {
    openLink('https://t.me/vg2763')
})

const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')

p1.addEventListener('click', function() {
    openLink('https://drive.google.com/uc?export=download&id=1DLQxTXAByG8Y-ZoBROpavaTK4t27m5kR')
})

p2.addEventListener('click', function() {
    openLink('https://drive.google.com/uc?export=download&id=1cUwd70HNg86Z-tGwtLeidFXmb93m7M0s')
})