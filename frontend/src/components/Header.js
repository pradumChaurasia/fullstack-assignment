
import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import "./Header.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = ({ onCardCreated }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [cardData, setCardData] = useState({
        title: "",
        description: "",
    })

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleSave = async () => {
        if (!cardData.title.trim()) {
            toast.error("Title cannot be empty");
            return;
          }
        
          if (!cardData.description.trim()) {
            toast.error("Description cannot be empty");
            return;
          }
        try {
            const response = await axios.post('http://localhost:3000/api/cards', cardData);
            onCardCreated(response.data);
            closeModal();
            setCardData({ title: "", description: "" });
        } catch (error) {
            console.error('Error creating card:', error);
        }
    };

    return (
        <>
            <div className="header">
                <div className="left-header">
                    <img src="/logo.PNG" alt="logo"/>
                    Abstract
                    <div className="help">
                        |  Help Center
                    </div>
                </div>
                <div className="right-header">
                    <button className="submit-button" onClick={openModal}>
                        Submit a Request
                    </button>
                </div>
            </div>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal" overlayClassName="overlay" style={{ height: '60vh' }}
            >
                <h2 style={{ marginBottom: '12px' }}>Submit a Request</h2>
                <div className="modal-content" style={{border:'none'}}>
                    <div className='modal-title'>
                        <p>Title</p>
                        <input
                            type="text"
                            className='modaltitle'
                            value={cardData.title}
                            onChange={(e) => setCardData({ ...cardData, title: e.target.value })}
                            required
                        />
                    </div>
                    <div className='modal-description'>
                        <p>Description</p>
                        <textarea
                        className='modaldescription'
                            value={cardData.description}
                            onChange={(e) => setCardData({ ...cardData, description: e.target.value })}
                            required
                        />
                    </div>
                </div>
                <div className="modal-buttons">
                    <button className='modal-button1' onClick={handleSave}>Save</button>
                    <button className='modal-button22' onClick={closeModal}>Cancel</button>
                </div>
            </Modal>
            <ToastContainer/>
        </>
    );
}

export default Header;
