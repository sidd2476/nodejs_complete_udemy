const greeter = (name = 'user', age) => {
    console.log('Hello ' + name)
}

greeter('Andrew')

greeter()


fetch('https://puzzle.mead.io/puzzle').then((response) =>{
    response.json().then((data) =>{
        console.log(data);
    })
})