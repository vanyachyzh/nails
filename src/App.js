import Month from './components/Month/Month';
import Input from './components/Input/input';
import Radio from './components/Radio/Radio';
import Comment from './components/Comment/comment';
import { Form, Wrapper } from './style'
import Checkbox from './components/Checkbox/Checkbox';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {


  return (
    <div className="App">

      <Form>
        <h3>Для запису заповніть просту форму</h3>
        <Input type={"Введіть ім'я"}></Input>
        <Input type={"Введіть носер телефону"}></Input>
        <h3>Оберіть послугу</h3>
        <Wrapper>
          <Radio></Radio>
          <Radio></Radio>
        </Wrapper>

        <Checkbox></Checkbox>
        <h3>Оберіть день та час </h3>
        <Month></Month>







        <Comment></Comment>
      </Form>

    </div>
  );
}

export default App;
