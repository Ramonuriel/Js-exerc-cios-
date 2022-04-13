function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}


const usuarios = new Map();

usuarios.set('Ramon', 'Admin');
usuarios.set('Samuel', 'Admin');
usuarios.set('Gabriel', 'User');
usuarios.set('Mateus', 'User');


console.log(getAdmins(usuarios));