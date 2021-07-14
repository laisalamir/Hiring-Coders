interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario{
    return{
        nome: 'Laisa',
        email: 'laisa@gmail.com'
    }
}

function setUser(usuario: Usuario){
    //...
}