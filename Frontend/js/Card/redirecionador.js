function redirecionarParaCategoria(categoria) {
    const urlParams = new URLSearchParams();
    urlParams.append('categoria', categoria);

    // Redireciona para a página categorias.html com o parâmetro de categoria
    const newUrl = `/Frontend/categorias.html?${urlParams.toString()}`;
    window.location.href = newUrl;
}

function redirecionarParaLammec(lammecs) {
    const urlParams = new URLSearchParams();
    urlParams.append('lammecs', lammecs);

    // Redireciona para a página categorias.html com o parâmetro de categoria
    const newUrl = `/Frontend/lammecs.html?${urlParams.toString()}`;
    window.location.href = newUrl;
}



