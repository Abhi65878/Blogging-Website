import Header from "/src/components/header/Header.jsx";
import Posts from "/src/components/posts/Posts";
import Sidebar from "/src/components/sidebar/Sidebar";
import "./home.css";

export default function Home({ blogs }) {
  return (
    <>
      <Header />
      <div className="home">
        <Posts blogs={blogs} />
        {/* <Sidebar /> */}
      </div>
    </>
  );
}


