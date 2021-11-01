export const Modal = ({ children, onClose }) => {
  return (
    <>
      <div class="modal">
        <div class="modal__popup">
          <button class="modal__close" onClick={() => onClose()}>
            <i class="bi bi-x-lg"></i>
          </button>
          {children}
        </div>
      </div>
      <div class="modal__background" onClick={() => onClose()}></div>
    </>
  );
};
