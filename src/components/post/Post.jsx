// import './post.css'

// export default function Post() {
//   return (
//     <div className="post">
//       <img
//         className="postImg"
//         src="Img\brian-abuga-78rjWaaFYwA-unsplash.jpg"
//         alt=""
//       />
//       <div className="postInfo">
//         <div className="postCats">
//           <span className="postCat">Music</span>
//           <span className="postCat">Tech</span>
//         </div>
//         <span className="postTitle">
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//         </span>
//         <hr />
//         <span className="postDate">1 hour ago</span>
//       </div>
//       <div>
//         <p className="postDesc">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autemneque libero placeat numquam iure. Rem eius recusandae ipsa optio non placeat amet quisquam possimus est. Autem alias modi sunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam autem neque libero placeat numquam iure. Rem eius recusandae ipsa optio non placeat amet
//           quisquam possimus est. Autem alias modi sunt.
//           Lorem ipsum dolor sitamet consectetur adipisicing elit. Nam autem neque libero placeat numquam iure. Rem eius recusandae ipsa optio non placeat amet quisquam possimus est. Autemalias modi sunt. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Nam autem neque libero placeat numquam
//           iure. Rem eius recusandae ipsa optio non placeat amet quisquam possimus est. Autem alias modi sunt.
//         </p>
//       </div>
//     </div>
//   );
// }


import React from "react";
import './post.css'

function App() {
  const defaultBlogs = [
    {
      id: 1,
      title: "Understanding React",
      author: "John Doe",
      date: "2024-11-25",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "JavaScript Tips and Tricks",
      author: "Jane Smith",
      date: "2024-11-20",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "CSS for Beginners",
      author: "Alice Johnson",
      date: "2024-11-22",
      image: "",
    },
  ];

  return (
    <div>
      <Posts blogs={defaultBlogs} />
    </div>
  );
}

export default App;
