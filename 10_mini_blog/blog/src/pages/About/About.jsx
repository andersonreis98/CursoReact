import styles from "./About.module.css";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>
      Lorem ipsum dolor sit amet. Quo eius quam quo totam consequatur ex magni perferendis non temporibus ducimus ex nobis doloribus aut omnis voluptates eos doloremque quidem. Eos quos veritatis cum impedit natus sed natus doloribus! Cum iste odit in dignissimos voluptatibus et nostrum quae ut repudiandae enim quo necessitatibus blanditiis et omnis velit? Et adipisci quos id eaque perspiciatis id possimus perspiciatis et mollitia architecto.
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;
