import React, { useState } from "react";

export const inputTypes = [
  { label: "Text", value: "text" },
  { label: "Number", value: "number" },
  { label: "Email", value: "email" },
  { label: "Password", value: "password" },
  { label: "Date", value: "date" },
];

const DropdownForm = () => {
  const [selectedInputTypes, setSelectedInputTypes] = useState([]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleDropdown = () => {
    if (!isDropDownOpen) {
      setShowForm(false);
    }
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleOptionChange = (value) => {
    if (selectedInputTypes.includes(value)) {
      setSelectedInputTypes(
        selectedInputTypes.filter((inputType) => inputType !== value)
      );
    } else {
      setSelectedInputTypes([...selectedInputTypes, value]);
    }
  };

  const handleSubmit = () => {
    setShowForm(true);
    setIsDropDownOpen(false);
  };

  const handleBtnState = () => {
    return selectedInputTypes.length === 0 || showForm;
  };

  const handleToggle = () => {
    if (!isDropDownOpen) {
      setShowForm(false);
    }
    setIsDropDownOpen(!isDropDownOpen);
  };

  const btnstate = () => {
    return selectedInputTypes.length === 0 || showForm;
  };

  const changeSelected = (value) => {
    if (selectedInputTypes.includes(value)) {
      setSelectedInputTypes(
        selectedInputTypes.filter((item) => item !== value)
      );
    } else {
      setSelectedInputTypes([...selectedInputTypes, value]);
    }
  };

  const handleSub = () => {
    setIsDropDownOpen(false);
    setShowForm(true);
  };

  // return (
  //   <div>
  //     <button onClick={toggleDropdown}>
  //       {isDropDownOpen ? 'Close Dropdown' : 'Open Dropdown'}
  //     </button>

  //     {isDropDownOpen && (
  //       <div className="dropdown">
  //         {inputTypes.map((inputType) => (
  //           <div key={inputType.value}>
  //             <input
  //               type="checkbox"
  //               id={inputType.value}
  //               value={inputType.value}
  //               checked={selectedInputTypes.includes(inputType.value)}
  //               onChange={() => handleOptionChange(inputType.value)}
  //             />
  //             <label htmlFor={inputType.value}>{inputType.label}</label>
  //           </div>
  //         ))}
  //         <button onClick={handleSubmit} disabled={handleBtnState()}>
  //           Submit
  //         </button>
  //       </div>
  //     )}

  //     {showForm && (
  //       <form>
  //         {selectedInputTypes.map((inputType) => (
  //           <div key={inputType}>
  //             <label>{inputType}</label>
  //             <input type={inputType} />
  //           </div>
  //         ))}
  //       </form>
  //     )}
  //   </div>
  // );

  return (
    <div>
      <button onClick={toggleDropdown}>
        {isDropDownOpen ? "close" : "open"}
      </button>

      {isDropDownOpen && (
        <div class="dropdown">
          {inputTypes.map((item) => (
            <div key={item.value}>
              <input
                type="checkbox"
                id={item.value}
                checked={selectedInputTypes.includes(item.value)}
                value={item.value}
                onChange={() => {
                  handleOptionChange(item.value);
                }}
              />
              <label for={item.value}>{item.label}</label>
            </div>
          ))}
          <button onClick={handleSubmit} disabled={handleBtnState()}>
            Submit
          </button>
        </div>
      )}
      {showForm && (
        <form>
          {selectedInputTypes.map((item) => (
            <div key={item}>
              <label>{item}</label>
              <input type={item}></input>
            </div>
          ))}
        </form>
      )}
      
    </div>
  );
};

export default DropdownForm;
