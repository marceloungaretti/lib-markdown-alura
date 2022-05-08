import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Arquivo não encontrado.'));
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.green(texto))
    } catch(erro) {
        trataErro(erro);
    }
}

pegaArquivo('./arquivos/texto1.md');