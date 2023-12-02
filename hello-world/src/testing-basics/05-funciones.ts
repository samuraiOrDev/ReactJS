
// User
const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

// Tarea
const getUsuarioActivo = (nombre: string) => ({
    uid: 'ABC567',
    username: nombre
})

// const usuarioActivo = getUsuarioActivo('Fernando');
// console.log(usuarioActivo);
export {
    getUsuarioActivo,
    getUser
}



