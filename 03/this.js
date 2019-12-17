/*Se refiere a un objeto,
pero no se refiere a la función
como  un objeto en sí mismo.
Es un objeto especial llamado
contexto para la función.   */

let o ={
    cardId: 123,
    getId: function() {
        console.log(this);
        return this.cardId;
    }
};
console.log(o.getId());