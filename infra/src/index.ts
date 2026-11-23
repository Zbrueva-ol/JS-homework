function onMaxClick() {
    // ...
}

const getRandomColor = (): string => {
    const colors = [`red`, `blue`, `green`, `purple`]
    return colors[Math.floor(Math.random() * colors.length)]!
}

// Находим кнопку
const maxButton = document.querySelector<HTMLButtonElement>(`.max-button`)

// Проверяем, что она есть, и вешаем обработчик клика
if (maxButton) {
    maxButton.addEventListener(`click`, () => {
        maxButton.style.color = getRandomColor()
    })
}
