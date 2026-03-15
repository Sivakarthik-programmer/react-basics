// - name (current name)
// - onChange (function to update name)
function NameInput({ name, onChange }) {
  return (
    <div>
      <input type="text" value={name} onChange={onChange} />
    </div>
  )
}

export default NameInput