import { SelectContainer, Dropdown } from './style';
import { MdChevronLeft } from 'react-icons/md';
import React, { useState } from 'react';

interface SelectDropdownProps {
  selectOptions: string[]
}

export default function SelectDropdown({ selectOptions }: SelectDropdownProps) {

  const [selectValue, setSelectValue] = useState(selectOptions[0])
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleLabelClick = (e: any) => {
    setSelectValue(e.target.value)
    setIsOpen(!isOpen)
  }

  return (
    <SelectContainer>
      <button type="button" onClick={handleDropdown} >
        <span>{selectValue}</span>
        <div>
          <MdChevronLeft />
        </div>
      </button>
      <Dropdown isOpen={isOpen} itemsCount={selectOptions.length}>
        {
          selectOptions.map((option) => (
            <div key={option}>
              <input onClick={handleLabelClick} type="radio" name="where" id={option} value={option}/>
              <label htmlFor={option}>{option}</label>
            </div>
          ))
        }
      </Dropdown>
    </SelectContainer>
  )
}