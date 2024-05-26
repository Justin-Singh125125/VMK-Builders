'use client';
import React, { useState } from 'react';
import { Button } from '../../../ui/button';
import { Input, InputProps } from './input';
import { TextArea, TextAreaProps } from './text-area';

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange: InputProps['onChange'] = (e) => setName(e.target.value);
  const handleEmailChange: InputProps['onChange'] = (e) => setEmail(e.target.value);
  const handleMessageChange: TextAreaProps['onChange'] = (e) => setMessage(e.target.value);

  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <Input label="Name" value={name} onChange={handleNameChange} />
      <Input label="Email" value={email} onChange={handleEmailChange} />
      <TextArea label="Message" value={message} onChange={handleMessageChange} />

      <Button className="mt-4 w-full" type="submit">
        Send
      </Button>
    </form>
  );
};
