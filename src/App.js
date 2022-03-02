import React from 'react';
import { Route, Routes, Link, useParams, useNavigate, useLocation } from 'react-router-dom';

import './App.css';

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/topics')}>Topics</button>
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicsList = () => {
  let location = useLocation();
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${location.pathname}/13`}>TO TOPIC 13</Link>
      <Link to={`${location.pathname}/17`}>TO TOPIC 17</Link>
      <Link to={`${location.pathname}/21`}>TO TOPIC 21</Link>
    </div>
  );
};

const TopicDetail = () => {
  let params = useParams();
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: {params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog/asdasd/topics' element={<TopicsList />} />
        <Route path='/blog/asdasd/topics/:topicId' element={<TopicDetail />} />
        <Route path='/blog/topics' element={<TopicsList />} />
        <Route path='/blog/topics/:topicId' element={<TopicDetail />} />
      </Routes>
    </div>
  );
}

export default App;
