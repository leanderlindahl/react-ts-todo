import React from 'react';

interface Props {

}

const CreateTaskForm: React.FunctionComponent<Props> = () => {
  return (
    <form>
      <input 
        type="text" 
        name="title" 
        placeholder="What would you like to get done?"
        autoComplete="off" 
      />
      <style jsx>{`
        form {
          margin: 0 0 -1px;
        }
        input {
          border: 1px solid #dde5ff;
          border-radius: 4px 4px 0 0;
          color: #5d647b;
          font-size: 18px;
          padding: 20px 15px;
          position: relative;
          width: 100%;
        }
        input:focus {
          border-color: #7694f5;
          border-radius: 4px;
          box-shadow: 0 0 0 4px #dde5ff;
          outline: none;
          z-index: 10;
        }
      `}</style>
    </form>
  );
};

export default CreateTaskForm;