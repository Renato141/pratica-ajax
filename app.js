const buscarGatinhos = (e) => {
    e.preventDefault()
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.thecatapi.com/v1/images/search?limit=10')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const cats = JSON.parse(xhr.responseText)
                cats.forEach(cat => {
                    const imgContainer = document.createElement('div');
                    const img = document.createElement('img');
                    const idParagrafo = document.createElement('p');
                    const sizeParagrafo = document.createElement('p');

                    img.src = cat.url;
                    idParagrafo.textContent = `ID: ${cat.id}`;
                    sizeParagrafo.textContent = `Tamanho: ${cat.width} x ${cat.height}`;

                    imgContainer.appendChild(img);
                    imgContainer.appendChild(idParagrafo);
                    imgContainer.appendChild(sizeParagrafo);

                    document.querySelector("#gatinhos").appendChild(imgContainer);
                })
            } else {
                alert('Erro na requisição')
            }
        }
    }
    xhr.send()
}

const btnMostrar = document.querySelector("#mostrar-gatinhos")
btnMostrar.addEventListener("click", buscarGatinhos)
