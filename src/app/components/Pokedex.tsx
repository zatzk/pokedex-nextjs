'use client'
import { useState } from 'react';
import { CardList } from './CardList';
import { Navbar } from './Navbar';

export function Pokedex() {
  const [formData, setFormData] = useState({ name: '' });

  const handleFormSubmit = (name) => {
    setFormData({ name });
  };

  return (
    <>
      <Navbar onSubmit={handleFormSubmit} />
      <CardList formData={formData} />
    </>
  )
}