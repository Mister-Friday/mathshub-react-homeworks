import { useCallback, useEffect, useState } from 'react';
import AddPost from './components/AddPost';
import PostsList from './components/PostsList';
import './App.css';
// import CreateUser from './components/CreateUser';

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPostsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://vk-retro-default-rtdb.firebaseio.com/posts.json'
      );

      if (!response.ok) {
        throw new Error('Произошла ошибка.');
      }
      const data = await response.json();

      const loadedPosts = [];

      Object.keys(data).forEach((key) => {
        loadedPosts.push({
          id: key,
          name: data[key].name,
          avatar: data[key].avatar,
          comment: data[key].comment,
          date: data[key].date,
        });
      });
      setPosts(loadedPosts);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPostsHandler();
  }, [fetchPostsHandler]);

  const AddPostHandler = async (post) => {
    const response = await fetch(
      'https://vk-retro-default-rtdb.firebaseio.com/posts.json',
      {
        method: 'POST',
        body: JSON.stringify(post),
        header: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();

    console.log('data =', data);
  };

  let content = <p>Здесь пока пусто. Напишите что-нибудь!</p>;

  if (posts.length > 0) {
    content = <PostsList posts={posts} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p> Loading...</p>;
  }

  return (
    <>
      <div>Hello</div>
      <div>Muttafacker!</div>
      <AddPost onAddPost={AddPostHandler} />
      <section>
        <button className="fetch_posts" onClick={fetchPostsHandler}>
          Показать комментарии
        </button>
      </section>
      <section>{content}</section>
      {/* <CreateUser /> */}
    </>
  );
}

export default App;
