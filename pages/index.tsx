import { Button, Htag, Ptag } from '../components';
import React from 'react';


export default function Home(): JSX.Element{
  return (
    <div>
      <Htag tag='h1'>Hello!</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='right'>Button</Button>
      <Ptag size='big'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, commodi sequi. Earum nulla debitis excepturi dolore eligendi commodi alias maiores asperiores ducimus eveniet. Velit ab cumque numquam amet laboriosam architecto.</Ptag>
      <Ptag size='middle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, commodi sequi. Earum nulla debitis excepturi dolore eligendi commodi alias maiores asperiores ducimus eveniet. Velit ab cumque numquam amet laboriosam architecto.</Ptag>
      <Ptag size='small'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, commodi sequi. Earum nulla debitis excepturi dolore eligendi commodi alias maiores asperiores ducimus eveniet. Velit ab cumque numquam amet laboriosam architecto.</Ptag>
    </div>
  );
}
