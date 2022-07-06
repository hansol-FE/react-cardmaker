import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Editor from '../editor/Editor';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Preview from '../preview/Preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
  const [cards, setCards] = useState([
    {
      id : '1',
      name : '홍길동',
      company: 'Samsung',
      theme: 'light',
      title : 'Software Engineer',
      email: 'gildong@gmail.com',
      message: 'go for it',
      fileName: 'test',
      fileURL: 'gildong.png' 
    },
    {
      id : '2',
      name : '홍길순',
      company: 'Samsung',
      theme: 'light',
      title : 'Software Engineer',
      email: 'gildong@gmail.com',
      message: 'go for it',
      fileName: 'test',
      fileURL: 'gildong.png' 
    },
    {
      id : '3',
      name : '홍길자',
      company: 'Samsung',
      theme: 'light',
      title : 'Software Engineer',
      email: 'gildong@gmail.com',
      message: 'go for it',
      fileName: 'test',
      fileURL: 'gildong.png' 
    }
  ]);

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  }

  useEffect(()=>{
    authService.onAuthChange(user => {
      if(!user){
        history.push('/');
      }
    })
  })
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;