import { PencilLine } from "@phosphor-icons/react";
import styles from "./Sidebar.module.css";
import Avatar from "./Avatar";
const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1519789110007-0e751882be76?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <Avatar src="https://i.pinimg.com/736x/89/04/b0/8904b095a90fd3fa5fc0ed070b72db63.jpg" />
        <strong>Romario Queiroz</strong>
        <span>Web developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};

export default Sidebar;
