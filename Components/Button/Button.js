export default function Button({ onClick, children, className }) {
    console.log(className)
  return <button className={className} onClick={onClick}>{children}</button>;
}
