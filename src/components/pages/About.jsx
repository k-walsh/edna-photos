import "../../styles/About.css";

function About() {
  // TODO: copy the wrap css code from my website

  return (
    <div className="content about">
      <div className="wrap">
        <img src="images/ppic.jpeg" alt="profile pic!" className="profilePic" />
      </div>

      <div className="bio">
        <p>
          Hi! My name is Edna and I am a Brown University graduate passionate
          about storytelling, marketing, and creative expression. With a love
          for writing and photography, I strive to use visuals to inspire and
          connect with people.
        </p>
      </div>
    </div>
  );
}

export default About;
