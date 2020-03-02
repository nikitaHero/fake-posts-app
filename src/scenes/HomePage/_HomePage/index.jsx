import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { getPosts, removePost, addPost } from "../thunks";

import Post from "../Post";
import Form from "../Form";

import { Wrapper, Content } from "./styled";

const HomePage = ({ getPosts, data, removePost, addPost }) => {
  const [posts, setPosts] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    setPosts(data.posts);
  }, [data.posts]);

  const handleRemove = e => {
    const id = parseInt(e.currentTarget.getAttribute("data-id"));
    removePost(id);
    let newPosts = posts.filter(item => item.id !== id);
    setPosts(newPosts);
  };

  const handleSubmit = e => {
    addPost({ userId: 6, body, title });
    let newPosts = posts;
    newPosts.unshift({ userId: 6, body, title, id: posts.length + 1 });

    setPosts(newPosts);
  };

  return (
    <Wrapper>
      <Content>
        <Form
          onSubmit={handleSubmit}
          onTextAreaChange={setBody}
          onInputChange={setTitle}
        />
        {posts &&
          posts.map(post => (
            <Post
              key={post.id}
              data={post}
              body={body}
              title={title}
              onRemove={handleRemove}
            />
          ))}
      </Content>
    </Wrapper>
  );
};

const mapState = state => ({
  data: state.homePage
});

const mapDispatch = dispatch => ({
  getPosts: () => dispatch(getPosts()),

  removePost: id => dispatch(removePost(id)),

  addPost: data => dispatch(addPost(data))
});

export default connect(mapState, mapDispatch)(HomePage);
