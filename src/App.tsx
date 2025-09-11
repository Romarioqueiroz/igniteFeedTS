import Header from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import Post, { type PostProps } from "./components/Post";
import Sidebar from "./components/Sidebar";

const posts: ({ id: number } & PostProps)[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://images.ctfassets.net/3mv54pzvptwz/7Jj4ryLGJazS8pDUlCK2Vg/07213977dcbbc3d402bac1e1a27c86af/54331642772_05fa9ffe6b_o_dentro.jpg",
      name: "Neymar jr",
      role: "Jogador",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Acabei de atualizar meu portfólio com um novo projeto que me deixou muito orgulhoso. 🚀",
      },
      {
        type: "paragraph",
        content:
          "Foi um trabalho onde pude aplicar bastante criatividade e técnicas que venho estudando nos últimos meses. Se puderem dar uma olhada e deixar um feedback, ficarei muito feliz!💡✨",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2025-08-20 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://images.ctfassets.net/3mv54pzvptwz/7Jj4ryLGJazS8pDUlCK2Vg/07213977dcbbc3d402bac1e1a27c86af/54331642772_05fa9ffe6b_o_dentro.jpg",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Acabei de atualizar meu portfólio com um novo projeto que me deixou muito orgulhoso. 🚀",
      },
      {
        type: "paragraph",
        content:
          "Foi um trabalho onde pude aplicar bastante criatividade e técnicas que venho estudando nos últimos meses. Se puderem dar uma olhada e deixar um feedback, ficarei muito feliz!💡✨",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2025-09-01 20:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
