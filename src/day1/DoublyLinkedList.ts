type Node<T> = {
  value: T;
  prev?: Node<T>;
  next?: Node<T>;
}
export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    
    

    constructor() {
      this.length = 0;
      this.head = undefined;    
      this.tail = undefined;    
    }

    prepend(item: T): void {
      const node = { value: item } as Node<T>;
      this.length++;

      if (!this.head) {
        this.head = this.tail =  node;
        return
      }

      node.next = this.head;
      this.head.prev = node;
      this.head = node;
}
    insertAt(item: T, idx: number): void {
      if (idx > this.length) {
        throw new Error("Index out of bounds");
      } 
      if (idx === this.length) {
        this.append(item);
        return
      } else if (idx === 0) {
        this.prepend(item);
        return
      }
      this.length++
      let curr = this.head;
      for (let i = 0; curr && i < idx; ++i){
        curr = curr.next
      }
      
      curr = curr as Node<T>
      const node = { value: item } as Node<T>;

      node.next = curr
      node.prev = curr.prev

      node.prev = node
      if( curr.prev ) {
        curr.prev.next = curr
      }

    }
    append(item: T): void {
      const node = { value: item } as Node<T>;
      this.length++;

      if (!this.tail) {
        this.tail = this.head =  node;
        return
      }

      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    remove(item: T): T | undefined {
      if ( this.length === 0 ){
        throw new Error('Lista vazia')
      }
      let curr = this.head
      for (let i = 0; curr && i < this.length; ++i) { 
        if (curr.value =item) {
          break;
        }
        curr = curr.next
        } 
        if (!curr){
          return
        }
        return
}
    get(idx: number): T | undefined {
      return
}
    removeAt(idx: number): T | undefined {
      return
}
}