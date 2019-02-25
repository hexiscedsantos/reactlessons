import React from 'react';

const A = () => <B content={<C />} />;

const B = ({ content }) => ({ content });

const C = () => <span>Some text!</span>;
