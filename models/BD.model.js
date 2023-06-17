export default class BD{
    static _data = [];

    static async listaUsuarios(){
        return this._data;
    }
    static async adicionaUsuario({ email, first_name, last_name, avatar }){
        const id = this._data.length;
        const usuario = {
            id, email, first_name, last_name, avatar
        };

        this._data.push(usuario);
    }
    static async atualizaUsuario({ id, email, first_name, last_name, avatar }){
        const novoUsuario = { id, email, first_name, last_name, avatar };

        this._data[id] = novoUsuario;
    }
    static async removeUsuario({ id }){
        const newData = this._data.filter(({ id: index }) => id !== index);

        this._data = newData;
    }
}