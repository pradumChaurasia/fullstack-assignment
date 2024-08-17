import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HelpCenter.css"
import { FaArrowRight } from "react-icons/fa6";
import Header from './Header';

const  HelpCenter =()=>{
    const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const searchInputRef = useRef(null);

    useEffect(() => {
        fetchCards();
    }, []);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            fetchCards(); 
        } else {
            const delayDebounceFn = setTimeout(() => {
                handleSearch();
            }, 300); 

            return () => clearTimeout(delayDebounceFn);
        }
    }, [searchTerm]);

    const fetchCards = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/cards');
            setCards(response.data);
        } catch (error) {
            console.error('Error fetching cards:', error);
        }
    };


    const handleCardCreated = (newCard) => {
        setCards(prevCards => [newCard, ...prevCards]);
    };

   
    const handleSearch = async () => {
        if (searchTerm.trim() === '') return;

        try {
            setIsSearching(true);
            const response = await axios.get(`http://localhost:3000/api/cards/${searchTerm}`);
            setCards(response.data);
        } catch (error) {
            console.error('Error fetching cards by title:', error);
            setCards([]); 
        } finally {
            setIsSearching(false);
            searchInputRef.current.focus();
        }
    };


    return (
        <>
        <Header onCardCreated={handleCardCreated} />
        <div className="container">
            <div className="text-center py-5 sub-container">
                <h1 className='headinghelp'>How can we help?</h1>
                <div className="my-4 justify-content-center search-div">
                    <input
                            type="text"
                            className="inputsearch"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ maxWidth: '400px' }}
                            ref={searchInputRef}
                        />
                        <FaArrowRight 
                            className='arrowicon'
                            onClick={handleSearch}
                        />
                </div>
            </div>
            <div className="row card-container">
                {cards.length > 0 ? (
                    cards.map(card => (
                        <div key={card.id} className="col-md-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center">No cards found.</div>
                )}
            </div>
        </div>
        </>
    );
}

export default HelpCenter;