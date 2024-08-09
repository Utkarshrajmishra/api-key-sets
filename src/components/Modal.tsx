import '../styles/Modal.css';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div id="default-modal" className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h3>API Key Set</h3>
          <button className="modal-close" onClick={onClose}>
           <img src="/images/cancel.svg" alt="Close Modal Button" />
          </button>
        </div>
        <div className="modal-body">
          <p>
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>  
        </div>
        <div className="modal-footer">
          <button className="btn-accept" onClick={onClose}>
            I accept
          </button>
          <button className="btn-decline" onClick={onClose}>
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
