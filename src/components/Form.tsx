import { FC, useState } from 'react';
import '../styles/Form.css';

interface FormProps {
  closeModal:()=>void
}

const Form: FC<FormProps> = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    apiProvider: '',
    apiVersion: '',
    apiKey: '',
  });

  const [error, setError] = useState({
    apiProviderError: '',
    apiVersionError: '',
    apiKeyError: '',
  });

  const validateForm = () => {
    let isValid = true;
    let newError = {
      apiProviderError: '',
      apiVersionError: '',
      apiKeyError: '',
    };

    if (formData.apiProvider.trim() === '') {
      newError.apiProviderError = 'API Provider is required';
      isValid = false;
    }
    if (formData.apiVersion.trim() === '') {
      newError.apiVersionError = 'API Version is required';
      isValid = false;
    }
    if (formData.apiKey.trim() === '') {
      newError.apiKeyError = 'API Key is required';
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    closeModal()
  };

  return (
    <form onSubmit={onSubmit}>
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
      <div>
        <input
          type="checkbox"
          name="setDefault"
          id="setDefault"
          className="checkbox"
        />
        <label htmlFor="setDefault">Set as Default</label>
      </div>
      <div className='formButton'>
        <button className="btn-delete" type='button' onClick={closeModal}>Delete</button>
        <button className='btn-submit' type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default Form;
