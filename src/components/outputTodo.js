import React from 'react'
import InputTodo from './inputTodo';

const OutputTodo = () => {
  return (
    <div className="border flex flex-col justify-center w-6/12">
      <h1 className="self-center text-3xl text-sky-500">Daily tasks</h1>
      <InputTodo />
    </div>
  );
}

export default OutputTodo;
