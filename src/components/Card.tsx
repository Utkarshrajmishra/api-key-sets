import '../styles/Card.css'
import Button from './Button';
import { GoEyeClosed, GoEye } from 'react-icons/go';
import { useState } from 'react';

const Card = () => {
  const [toggleKey, setToggleKey] = useState(false);

  return (
    <section className="card-container">
      <div className="card-head">
        <p className="card-heading">API Key Set 1</p>
        <Button vairant="edit" message="Edit" />
      </div>
      <div className="divider"></div>
      <div>
        <p className="text-small">Provider</p>
        <p className="api-provider">Open AI</p>
      </div>
      <div>
        <p className="text-small">Default Model Versions</p>
        <p className="api-model">ChatGPT 4.0 Mini</p>
      </div>
      <div className="flex">
        <div>
          <p className="text-small">API Key</p>
          <p className="api-key">
            {toggleKey ? 'YOUR_API_KEY_HERE' : '***********************'}
          </p>
        </div>
        {toggleKey ? (
          <GoEye
            onClick={() => setToggleKey(false)}
            fontSize={17}
            color="#939596"
            className="icon"
          />
        ) : (
          <GoEyeClosed
            onClick={() => setToggleKey(true)}
            fontSize={17}
            color="#939596"
            className="icon"
          />
        )}
      </div>
      <div className="card-foot">
        <p>
          <i>Last Used: 12 min ago</i>
        </p>
        <p className="default-batch">DEFAULT</p>
      </div>
    </section>
  );
};

export default Card;
