import { useState } from 'react';
import { Button, Htag, Ptag, Raiting, Tag } from '../components';
import { withLayout } from '../layout/Layout';


function Home(): JSX.Element{
  const [raiting , setRaiting] = useState<number>(2);

  return (
    <>
      <Htag tag='h1'>Hello!</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='right'>Button</Button>
      <Ptag size='big'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, commodi sequi. Earum nulla debitis excepturi dolore eligendi commodi alias maiores asperiores ducimus eveniet. Velit ab cumque numquam amet laboriosam architecto.</Ptag>
      <Ptag size='middle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, commodi sequi. Earum nulla debitis excepturi dolore eligendi commodi alias maiores asperiores ducimus eveniet. Velit ab cumque numquam amet laboriosam architecto.</Ptag>
      <Ptag size='small'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, commodi sequi. Earum nulla debitis excepturi dolore eligendi commodi alias maiores asperiores ducimus eveniet. Velit ab cumque numquam amet laboriosam architecto.</Ptag>
      <Tag size='small' color='red'>HHru</Tag>
      <Tag size='big' color='green'>RabotaRU</Tag>
      <Tag size='small' color='ghost'>C#</Tag>
      <Tag size='small' color='gray'>PHP</Tag>
      <Tag size='small' href='/' color='primary'>Python</Tag>
      <Raiting raiting={raiting} isEditable={true} setRaiting={setRaiting}/>
    </>

  );
}

export default withLayout(Home);
