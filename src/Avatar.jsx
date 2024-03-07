export default function Avatar() {
  const avatar = "https://assets.ccbp.in/frontend/react-js/avatar-img.png";
  const description = "avatar";
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
      width={100}
      height={100}
      style={{
        borderRadius: "50%",
      }}
    />
  );
}
