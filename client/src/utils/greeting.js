function greet(name) {
    if (name === '') {
        return 'Войдите или зарегистрируйтесь'
    }
    return `Привет, ${name}!`

}

module.exports = greet;