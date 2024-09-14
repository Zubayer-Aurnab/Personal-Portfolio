const Title = ({ text }) => {
  return (
    <div className=" lg:my-20">
      <h1
        style={{ fontFamily: "'Orbitron', sans-serif" }}
        className="text-2xl lg:text-4xl font-bold text-center my-10 text-[#bcfd49] tracking-widest">

        {text}

      </h1>
    </div>
  );
};

export default Title;
