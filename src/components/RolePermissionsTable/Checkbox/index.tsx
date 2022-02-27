import { CheckboxContainer } from './style';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

interface CheckboxProps {
  permissions: string[],
  permissionType: string,
  id: string
}

export default function Checkbox({ id, permissionType, permissions }: CheckboxProps) {
  return (
    <CheckboxContainer>
      <input type="checkbox" name={permissionType} id={id} checked={permissions.includes(permissionType)} readOnly />
      <label htmlFor="Clientes">
        <ImCheckboxChecked className="checked"/>
        <ImCheckboxUnchecked className="unchecked"/>
      </label>
    </CheckboxContainer>
  )
}
