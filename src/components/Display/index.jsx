const Display = ({ isAuth }) => {
  return <div>{isAuth && <p className="Auth">Você está Autorizado</p>}</div>;
};

export default Display;
