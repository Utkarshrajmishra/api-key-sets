import '../styles/Modal.css';
import Form from './Form';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

interface FormData {
  apiProvider: string;
  apiVersion: string;
  apiKey: string;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div id="default-modal" className="modal-container">
      <div className="modal-content">
        <div className="modal-close-icon">
          <button className="modal-close" onClick={onClose}>
            <img src="/images/cancel.svg" alt="Close Modal Button" width={15} />
          </button>
        </div>
        <div className="modal-header">
          <h3>API Key Set</h3>
          <p>Please provide your educational details</p>
        </div>
        <div className="modal-body">
          <Form closeModal={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
