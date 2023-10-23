function Button({ text, width }) {
  return (
    <button
      className="text-xl bg-sanAndresBg"
      type="button"
      style={{
        height: "50px",
        width: width,
        borderRadius: "50px",
      }}
    >
      {text}
    </button>
  );
}

export default Button;
