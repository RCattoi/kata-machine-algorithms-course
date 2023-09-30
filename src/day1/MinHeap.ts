export default class MinHeap {
    public length: number;
    private data: number[];

    

    constructor() {
      this.length = 0;
      this.data = [];
    
    }

    insert(value: number): void {
      this.data[this.length] = value
      this.heapfyUp(this.length++)
}
    delete(): number{
      if (this.length === 0 ){
        return -1
      }

      const out = this.data[0];
      this.length--
      if (this.length === 0) {
        this.data = []
        return out
      }

      this.data[0] = this.data[this.length];
      this.heapfyDown(0);
      return out

}
  private heapfyDown(idx: number): void{
    const Lidx = this.leftChild(idx);
    const Ridx = this.rightChild(idx);

    if (idx >= this.length || Lidx > this.length){
      return
    }

    const lv = this.data[Lidx]
    const rv = this.data[Ridx]
    const v = this.data[idx]

    if (lv > rv && v > rv) {

      this.data[idx] = rv
      this.data[Ridx] = v
      this.heapfyDown(Ridx)
    }
    else if (rv > lv && v > lv) {
      this.data[idx] = lv
      this.data[Lidx] = v
      this.heapfyDown(Lidx)
    }

  }
  private heapfyUp(idx: number): void {
  if( this.length === 0) {
    return
  }
  const p = this.parent(idx)
  const parentV = this.data[p]
  const v = this.data[idx]

  if (parentV > v){
    this.data[idx] = parentV
    this.data[p] = v

    this.heapfyUp(p)
    }

  this.parent
  }
  private parent(idx: number): number{
    return Math.floor((idx - 1) / 2)  
    }

  private leftChild(idx: number): number{
    return idx * 2 + 1
    }

  private rightChild(idx: number): number{
    return idx * 2 + 2
    }
}