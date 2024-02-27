import { useState } from "react";

export function useSelectOptions(initialSelectedOptions, initialIsOpen, defaultValue, updateMainValue) {
  const [selectedOptions, setSelectedOptions] = useState(initialSelectedOptions);
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [value, setValue] = useState(defaultValue); // Set the default value here

  const handleOptionClick = (index, option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] = option;
    setSelectedOptions(updatedOptions);
    setIsOpen((prevState) => prevState.map((value, idx) => (idx === index ? false : value)));

    // Call the callback function to update the main value state
    if (updateMainValue) {
      updateMainValue(option.label);
    }

    // Update the main value state
    setValue(option.label);
  };

  const toggleDropdown = (index) => {
    setIsOpen((prevState) => prevState.map((value, idx) => (idx === index ? !value : value)));
  };

  return {
    selectedOptions,
    isOpen,
    value, // Return the value state
    handleOptionClick,
    toggleDropdown,
  };
}
