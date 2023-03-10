import { useContext } from 'react';
import AuthContext from '../context/auth-context';

const InputTodo = () => {
  const todoContext = useContext(AuthContext);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

     const handleChange = (e) => {
       todoContext.setTodos(e.target.value);
     };

  return (
    <div className="self-center">
      <form className="flex" onSubmit={handleSubmit}>
        <input
          className="border py-2 w-full"
          type="text"
          name="name"
          onChange={handleChange}
        />
        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default InputTodo;
