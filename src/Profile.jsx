import Avatar from "./Avatar";

function Profile({ name, profession, awards, discovery, imageId }) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <Avatar person={{ name, imageId }} size={70} />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: </b>
          {awards}
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default Profile;
