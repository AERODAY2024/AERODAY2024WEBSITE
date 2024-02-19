const AxeCard = ({ axe }) => {
  return (
    <div>
      <h1>{axe.name}</h1>
      <p>{axe.description}</p>
    </div>
  );
};

export default AxeCard;
