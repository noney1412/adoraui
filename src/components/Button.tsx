import React, { Component, SFC } from 'react';

type AButtonProps = {
    text: string;
};

export const AButton: SFC<AButtonProps> = ({ text }) => <button>{text}</button>;
