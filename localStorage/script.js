// 1ª parte: inserir dados
localStorage.setItem("name", "Pedro")

//2ª resgatar os dados
const name = localStorage.getItem("name");

console.log(name)

//item nao existente

const lastName = localStorage.getItem("lastname");

console.log(lastName);

if(!lastName)
    console.log("Sem sobrenome!");

//remover item

// localStorage.removeItem("name");

//6 limpar todos os itens
// localStorage.clear();