export default function CustomButton({ label, onPress }) {
  return <button onClick={() => onPress()}>{label}</button>
}
