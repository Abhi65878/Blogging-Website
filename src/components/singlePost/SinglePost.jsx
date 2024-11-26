import React, { useState } from "react";
import "./singlePost.css";

export default function SinglePost() {

 const [title, setTitle] = useState("Lorem ipsum dolor sit amet.");
 const [content, setContent] = useState(
   `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem exercitationem numquam incidunt corporis possimus libero! Quasi explicabo repudiandae nihil fuga, doloremque molestias optio, alias dicta excepturi sed ea similique facere...`
 );
 const [isEditingTitle, setIsEditingTitle] = useState(false);
 const [isEditingContent, setIsEditingContent] = useState(false);
 const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

 const handleTitleEdit = () => {
   setIsEditingTitle(true);
 };

 const handleContentEdit = () => {
   setIsEditingContent(true);
 };

 const handleDelete = () => {
   setShowDeleteConfirm(true);
 };

 const confirmDelete = () => {
   // Perform delete operation here
   setShowDeleteConfirm(false);
   alert("Post deleted successfully!");
 };

  return (
    <div className="single">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="Img\brian-abuga-78rjWaaFYwA-unsplash.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          {isEditingTitle ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => setIsEditingTitle(false)}
              className="singlePostTitleInput"
              autoFocus
            />
          ) : (
            <span onClick={handleTitleEdit}>{title}</span>
          )}
          <div className="singlePostEdit">
            <i
              onClick={handleTitleEdit}
              className="singlePostIcon fa-regular fa-pen-to-square"
            ></i>
            <i
              onClick={handleDelete}
              className="singlePostIcon fa-solid fa-trash-can"
            ></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Abhi</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc" onClick={handleContentEdit}>
          {isEditingContent ? (
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onBlur={() => setIsEditingContent(false)}
              className="singlePostDescInput"
              rows="5"
              autoFocus
            />
          ) : (
            content
          )}
        </p>

        {showDeleteConfirm && (
          <div className="deleteConfirmOverlay">
            <div className="deleteConfirmBox">
              <p>Are you sure you want to delete this post?</p>
              <button onClick={confirmDelete}>Yes, Delete</button>
              <button onClick={() => setShowDeleteConfirm(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import "./singlePost.css";

// export default function SinglePost({ posts = [] }) {
//   const { id } = useParams();
//   const post = posts.find((post) => post.id === Number(id)) || {};

//   const [title, setTitle] = useState(post.title || "");
//   const [content, setContent] = useState(post.content || "");
//   const [isEditingTitle, setIsEditingTitle] = useState(false);
//   const [isEditingContent, setIsEditingContent] = useState(false);

//   return (
//     <div className="single">
//       <div className="singlePostWrapper">
//         {post.image && (
//           <img className="singlePostImg" src={post.image} alt={post.title} />
//         )}
//         <h1 className="singlePostTitle">
//           {isEditingTitle ? (
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               onBlur={() => setIsEditingTitle(false)}
//               className="singlePostTitleInput"
//               autoFocus
//             />
//           ) : (
//             <span onClick={() => setIsEditingTitle(true)}>{title}</span>
//           )}
//         </h1>

//         <div className="singlePostInfo">
//           <span className="singlePostAuthor">
//             Author: <b>{post.author || "Unknown"}</b>
//           </span>
//           <span className="singlePostDate">{post.date || "Unknown Date"}</span>
//         </div>

//         <p className="singlePostDesc" onClick={() => setIsEditingContent(true)}>
//           {isEditingContent ? (
//             <textarea
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               onBlur={() => setIsEditingContent(false)}
//               className="singlePostDescInput"
//               rows="5"
//               autoFocus
//             />
//           ) : (
//             content
//           )}
//         </p>
//       </div>
//     </div>
//   );
// }

