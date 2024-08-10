import '../styles/Dashboard.css';
import Button from '../components/Button';
import Card from '../components/Card';
import Modal from '../components/Modal';
import { useState } from 'react';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <main>
      <section className="main-container">
        <div>
          <p className="dashboard-heading">My Keys</p>
          <div className="divider"></div>
        </div>
        <div className="bottom-container">
          <Button
            onClick={handleModal}
            message="Add New Keys"
            vairant="primary"
          />

          <Card />
        </div>
      </section>
      <Modal
        show={showModal}
        onClose={() => setShowModal((showModal) => !showModal)}
      />
    </main>
  );
};

export default Dashboard;
