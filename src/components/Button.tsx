import React, { Component, SFC } from 'react';

interface AButtonProps {
    text: string;
}

export const AButton: SFC<AButtonProps> = ({ text }) => <button>{text}</button>;
