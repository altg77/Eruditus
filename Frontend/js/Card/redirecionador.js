function redirecionarParaCategoria(categoria) {
    const urlParams = new URLSearchParams();
    urlParams.append('categoria', categoria);

    // Redireciona para a página categorias.html com o parâmetro de categoria
    const newUrl = `/Frontend/categorias.html?${urlParams.toString()}`;
    window.location.href = newUrl;
}



