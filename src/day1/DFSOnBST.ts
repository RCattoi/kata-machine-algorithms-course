function search(curr: BinaryNode<Number>|null,needle: Number): boolean {
  if (!curr){
    return false;
  }
  if (curr.value === needle){
    return true
  }

  if (curr.value < needle) {
    return search(curr.right ,needle)
  }

  return search(curr.left , needle)

}
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return search(head,needle)
}