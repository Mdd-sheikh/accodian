const AccordionItem = ({ children, title, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onToggle}>
        {title}
        {isOpen ? <span>-</span> : <span>+</span>}
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};
export default AccordionItem;