export function HamburgerMenu ({ onClick }: {onClick: () => void}) {
  return (
    <span className="space-y-2 pt-2" onClick={onClick}>
      <span className="block w-8 h-1 bg-brown"></span>
      <span className="block w-8 h-1 bg-brown"></span>
      <span className="block w-8 h-1 bg-brown"></span>
    </span>
  )
}