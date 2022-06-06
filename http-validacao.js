function geraArrayDeUrls(arrayLinks){
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
}

function validaURLs(arrayLinks){
    return geraArrayDeUrls(arrayLinks);
}

export default validaURLs;