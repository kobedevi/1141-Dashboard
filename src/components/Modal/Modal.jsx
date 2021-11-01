export const Modal = ({ children, onClose }) => {
  return (
    <>
      <div className="modal">
        <div className="modal__popup">
          <button className="modal__close" onClick={() => onClose()}>
            <i className="bi bi-x-lg"></i>
          </button>
          {children}
        </div>
      </div>
      <div className="modal__background" onClick={() => onClose()}></div>
    </>
  );
};
