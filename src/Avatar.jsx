export default function Avatar() {
  const avatar = "https://assets.ccbp.in/frontend/react-js/avatar-img.png";
  const description = "avatar";
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
      style={{
        borderRadius: "50%",
      }}
    />
  );
}
