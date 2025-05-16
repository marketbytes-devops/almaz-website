import React, { useState, useEffect, useRef } from "react";
import Icons from "../../components/Icons";
import PropTypes from "prop-types";
 
const FormField = ({ type, name, placeholder, value, onChange, onClick, options, required, disabled }) => {
  const containerStyles = `
    w-full
  `;
 
  const wrapperStyles = `
    flex items-center w-full px-4 py-3 border border-gray-300 rounded-lg
    bg-white text-gray-500 gap-3 placeholder-gray-400 placeholder:text-sm placeholder:font-normal
    transition-all duration-200
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;
 
  const inputStyles = `
    w-full border-none focus:outline-none bg-transparent text-gray-500
    placeholder-gray-500 placeholder:text-sm placeholder:font-normal
    ${disabled ? 'cursor-not-allowed' : ''}
    ${type === 'number' ? `
      [appearance:textfield]
      [&::-webkit-outer-spin-button]:appearance-none
      [&::-webkit-inner-spin-button]:appearance-none
    ` : ''}
  `;
 
  const iconStyles = `
    text-black hover:text-secondary transition-colors
  `;
 
  const renderIcon = () => {
    switch (name) {
      case "fullName":
        return <Icons.User className={iconStyles} size={20} />;
      case "phoneNumber":
        return <Icons.Phone className={iconStyles} size={20} />;
      case "serviceType":
        return <Icons.ServiceType className={iconStyles} size={20} />;
      case "email":
        return <Icons.Mail className={iconStyles} size={20} />;
      case "message":
        return <Icons.Message className={iconStyles} size={20} />;
      case "trackingNumber":
        return <Icons.Location className={iconStyles} size={20} />;
      default:
        return null;
    }
  };
 
  const renderInput = () => {
    switch (type) {
      case "select":
        const CustomDropdown = () => {
          const [isOpen, setIsOpen] = useState(false);
          const dropdownRef = useRef(null);
 
          const toggleDropdown = () => {
            if (!disabled) setIsOpen(!isOpen);
          };
 
          const handleOptionClick = (option) => {
            if (!disabled) {
              const event = {
                target: { name, value: option.value },
              };
              onChange(event);
              setIsOpen(false);
            }
          };
 
          useEffect(() => {
            const handleClickOutside = (event) => {
              if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
              }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
          }, []);
 
          const selectedLabel = options.find((opt) => opt.value === value)?.label || placeholder;
 
          return (
            <div className="relative w-full" ref={dropdownRef}>
              <div className={wrapperStyles}>
                {renderIcon()}
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="w-full text-left text-sm flex justify-between items-center focus:outline-none"
                  disabled={disabled}
                >
                  <span className={value ? "text-gray-500" : "text-gray-500"}>{selectedLabel}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              {isOpen && (
                <div className="w-full bg-white border border-gray-300 rounded-md mt-1 z-10">
                  {options.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleOptionClick(option)}
                      className="w-full text-left px-3 py-2 hover:bg-gray-100 text-gray-500"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
              {isOpen && type === "select" && (
                <div className="mt-4">
                </div>
              )}
            </div>
          );
        };
        return <CustomDropdown />;
      default:
        return (
          <div className={wrapperStyles}>
            {renderIcon()}
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onClick={onClick}
              className={inputStyles}
              required={required}
              disabled={disabled}
              pattern={name === "phoneNumber" ? "[0-9]*" : undefined}
              inputMode={name === "phoneNumber" ? "numeric" : undefined}
            />
          </div>
        );
    }
  };
 
  return <div className={containerStyles}>{renderInput()}</div>;
};
 
FormField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};
 
FormField.defaultProps = {
  placeholder: "",
  value: "",
  onChange: () => { },
  onClick: () => { },
  options: [],
  required: false,
  disabled: false,
};
 
export default FormField;