const getMarcas = () => {
    const tarefas = fetch('https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json')

    tarefas
        .then(resposta => resposta.json())
        .then(marcas => {
            const ul = document.createElement('ul')
            marcas.forEach(marca => {
                const li = document.createElement('li')
                const logo = document.createElement('img')

                logo.src = marca.image?.optimized
                const nomeMarca = marca.name; 
                const textoMarca = document.createTextNode(nomeMarca); 
                const p = document.createElement('p');
                p.appendChild(textoMarca);
                li.appendChild(logo);
                li.appendChild(p);
                ul.appendChild(li);

                console.log(marca);
            })
            document.body.appendChild(ul);
        })
        .catch(erro => console.log(erro))
}

const btnMarcas = document.querySelector("#marcas")
btnMarcas.addEventListener("click", getMarcas)
