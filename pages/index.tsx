import { Button, Htag } from '../components';
import React from 'react';


export default function Home(): JSX.Element{
  return (
    <div>
      <Htag tag='h1'>Hello!</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='right'>Button</Button>
    </div>
  );
}
