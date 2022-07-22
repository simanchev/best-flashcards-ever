const React = require('react');
const Layout = require('./Layout');
const Nav = require('./Nav');

function Result(arrTopics) {

  const topics = [
    { title: 'topic-1', score: 5, percent: '100%' },
    { title: 'topic-2', score: 4, percent: '75%' },
    { title: 'topic-3', score: 2, percent: '20%' },
    { title: 'topic-4', score: 5, percent: '25%' }];

  return (
    <Layout>
      <Nav />
      <div className="container-fluid">
      <h3 className="question" name="question">Текущие успехи</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">тема</th>
              <th scope="col">правильные ответы</th>
              <th scope="col">% угадывательства</th>
            </tr>
          </thead>
          <tbody>
            {topics.map((answer, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{answer.title}</td>
                <td>{answer.score}</td>
                <td>{answer.percent}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary">Обратно к темам</button>
      </div>
    </Layout>
  );
}

module.exports = Result;
