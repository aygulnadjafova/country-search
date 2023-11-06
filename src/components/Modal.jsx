const Modal = ({ open, setOpen, country, city, firstName }) => {
  return (
    <div
      className={`modal ${open && "active"}`}
      onClick={() => window.location.reload()}
    >
      <div className="box">
        <h2>Congratulations</h2>
        <ul>
          <li>
            Country: <span>{country}</span>
          </li>
          <li>
            City: <span>{city}</span>
          </li>
          <li>
            Name: <span>{firstName}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
