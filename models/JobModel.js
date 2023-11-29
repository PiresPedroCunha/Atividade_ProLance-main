module.exports = class Job {
    constructor(idUser, titulo, descricao, data_publicacao) {
        this.idUser = idUser;
        this.titulo = titulo;
        this.descricao = descricao;
        this.data_publicacao = data_publicacao;
    }
}