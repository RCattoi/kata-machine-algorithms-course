export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  const q: (BinaryNode<Number> | null)[] = [head];

  while (q.length) {
    
    const curr = q.shift() as BinaryNode<Number> | undefined | null;
    if (!curr) {
      continue;
    }

    if (curr.value === needle) {
      return true;
    }

    q.push(curr.left)
    q.push(curr.right)
  
  }

  return false
}