'use client'
import { useState } from 'react';
import { CardList } from './CardList';
import { Navbar } from './Navbar';

export function Pokedex() {
  const [formData, setFormData] = useState({ name: '' });
  const [isCardHidden, setCardHidden] = useState(true);

  const handleFormSubmit = (name) => {
    setFormData({ name });

    if (isCardHidden && name) {
      setCardHidden(false);
    }
  };

  return (
    <>
      <Navbar onSubmit={handleFormSubmit} />
      <CardList formData={formData} isCardHidden={isCardHidden} />
    </>
  )
}