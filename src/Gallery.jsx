import Profile from "./Profile";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        awards="4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovery="polonium (chemical element)"
        imageId="szV5sdG"
      />
      <Profile
        name="Katsuko Saruhashi"
        profession="geochemist"
        awards="2 (Miyake Prize for geochemistry, Tanaka Prize)"
        discovery="a method for measuring carbon dioxide in seawater"
        imageId="YfeOqp2"
      />
    </div>
  );
}
