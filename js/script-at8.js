function buscarpoke() {
    let numero = document.getElementById('NUMERO').value;
    fetch(' https://pokeapi.co/api/v2/pokemon/' + numero)

        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.table(data)
            document.getElementById('nome').innerText = data.name;

            document.getElementById('imgpoke').src = data.sprites.other.dream_world.front_default;

        })
}
