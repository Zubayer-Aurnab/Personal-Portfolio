const Title = ({ text }) => {
    return (
      <div className="my-20">
        <h1 className="text-4xl font-bold text-center my-10 text-white">
          <span className="border-t-4 border-b-4 p-2 rounded-lg">
            {text}
          </span>
        </h1>
      </div>
    );
  };
  
  export default Title;
  