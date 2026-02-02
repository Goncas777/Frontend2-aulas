
class ListaHandler<T> {

lista: T[] = [];

add(item: T): void {
    this.lista.push(item);
}

remove(item: T){
    const index = this.lista.indexOf(item);
    if (index !== -1) {
        this.lista.splice(index, 1);
    }
}

getAll(): T[] {
    return this.lista;
}
}

const numberList = new ListaHandler<number>();
numberList.add(10);
numberList.add(20);
numberList.remove(10);
console.log(numberList.getAll());