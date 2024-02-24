import { useState } from "react";
import "./styles.css";
import faqs from "../data";
const Accordion = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [multiSelectEnabled, setMultiSelectEnabled] = useState(false);

  const toggleSelection = (id) => {
    setSelectedIds((prevSelectedIds) => {
      if (multiSelectEnabled) {
        return prevSelectedIds.includes(id)
          ? prevSelectedIds.filter((selectedId) => selectedId !== id)
          : [...prevSelectedIds, id];
      } else {
        return prevSelectedIds.includes(id) ? [] : [id];
      }
    });
  };

  const toggleMultiSelection = () => {
    setMultiSelectEnabled((prevMultiSelectEnabled) => !prevMultiSelectEnabled);
  };

  return (
    <div className="wrapper">
      <button onClick={toggleMultiSelection}>
        {multiSelectEnabled
          ? "Disable Multi-Selection"
          : "Enable Multi-Selection"}
      </button>
      <div className="accordion">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq">
            <div className="title" onClick={() => toggleSelection(faq.id)}>
              <h3>{faq.question}</h3>
              <span>{selectedIds.includes(faq.id) ? "-" : "+"}</span>
            </div>
            <div
              className="content"
              style={{
                maxHeight: selectedIds.includes(faq.id) ? "1000px" : "0",
                transition: "max-height 0.8s ease-in-out",
                overflow: "hidden",
              }}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
