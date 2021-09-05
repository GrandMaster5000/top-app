import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Htag, Ptag, Raiting, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import {MenuItem} from '../interfeces/menu.interface';


function Home({menu}: HomeProps): JSX.Element{
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

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}
