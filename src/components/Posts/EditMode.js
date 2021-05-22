import { settings } from '../../App'

export const EditMode = ({value}) => {
  return (
    <button onClick={() => settings({ isEditMode: !value })}>
      Edit Mode
    </button>
  )
}
