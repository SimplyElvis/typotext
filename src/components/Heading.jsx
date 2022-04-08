const Heading = ({ name, icon }) => {
  return (
    <header className="header">
      <h2>{name}</h2>
      <span>{icon}</span>
    </header>
  );
};

export default Heading;
