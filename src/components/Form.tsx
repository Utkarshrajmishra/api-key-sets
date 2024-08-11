import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAPI } from '../redux/APISlice';
import '../styles/Form.css';

interface FormProps {
  closeModal: () => void;
}

const Form: FC<FormProps> = ({ closeModal }) => {
  const dispatch = useDispatch();

  // State for managing form inputs
  const [formData, setFormData] = useState({
    apiProvider: '',
    apiVersion: '',
    apiKey: '',
  });

  // State for managing validation errors
  const [error, setError] = useState({
    apiProviderError: '',
    apiVersionError: '',
    apiKeyError: '',
  });

  // Function to validate the form inputs
  const validateForm = (): boolean => {
    let isValid = true;
    const newError = {
      apiProviderError: '',
      apiVersionError: '',
      apiKeyError: '',
    };

    // Validate API Provider
    if (formData.apiProvider.trim() === '') {
      newError.apiProviderError = 'API Provider is required';
      isValid = false;
    }

    // Validate API Version
    if (formData.apiVersion.trim() === '') {
      newError.apiVersionError = 'API Version is required';
      isValid = false;
    }

    // Validate API Key
    if (formData.apiKey.trim() === '') {
      newError.apiKeyError = 'API Key is required';
      isValid = false;
    }

    // Update error state and return validation status
    setError(newError);
    return isValid;
  };

  // Handle changes to form inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate the form before submitting
    if (!validateForm()) return;

    // Dispatch the action to add API info to the Redux store
    dispatch(
      addAPI({
        apiProducer: formData.apiProvider,
        apiVersion: formData.apiVersion,
        apiKey: formData.apiKey,
      })
    );

    // Close the modal after successful submission
    closeModal();
  };

  return (
    <form onSubmit={onSubmit}>
      {/* API Provider input field */}
      <div className="inputDiv">
        <label htmlFor="apiProvider">Provider</label>
        <input
          type="text"
          value={formData.apiProvider}
          name="apiProvider"
          id="apiProvider"
          placeholder="Input the API Provider"
          onChange={handleChange}
        />
        {error.apiProviderError && (
          <p className="error">{error.apiProviderError}</p>
        )}
      </div>
      {/* API Version input field */}
      <div className="inputDiv">
        <label htmlFor="apiVersion">Default API Version</label>
        <input
          value={formData.apiVersion}
          type="text"
          name="apiVersion"
          id="apiVersion"
          placeholder="Input the API Version"
          onChange={handleChange}
        />
        {error.apiVersionError && (
          <p className="error">{error.apiVersionError}</p>
        )}
      </div>

      {/* API Key input field */}
      <div className="inputDiv">
        <label htmlFor="apiKey">Key</label>
        <input
          value={formData.apiKey}
          type="text"
          name="apiKey"
          id="apiKey"
          placeholder="Input the API Key"
          onChange={handleChange}
        />
        {error.apiKeyError && <p className="error">{error.apiKeyError}</p>}
      </div>

      {/* Checkbox for setting as default */}
      <div>
        <input
          type="checkbox"
          name="setDefault"
          id="setDefault"
          className="checkbox"
        />
        <label htmlFor="setDefault">Set as Default</label>
      </div>

      {/* Submit button */}
      <div className="formButton">
        <button type="button" className="btn-delete">
          Delete
        </button>
        <button className="btn-submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
