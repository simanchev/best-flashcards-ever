const React = require('react');
const Layout = require('./Layout');
const Nav = require('./Nav');

function Quest({ check, question, answer_1, answer_2, answer_correct }) {
  const arrAnsw = [answer_1, answer_2, answer_correct];
  return (
    <Layout>
      <Nav />
      <form action="/quest" method="post">
        <div className="container-fluid">
          <h5 className="check">{check}</h5>
          <h3 className="question" name="question">{question}</h3>
          <ul className="list-group">
            {arrAnsw.map((answer) => (
              <li class="list-group-item">
                <input class="form-check-input me-1" type="radio" name="answer" value={answer} id="firstRadio" />
                <label class="form-check-label" for="firstRadio">{answer}</label>
              </li>))}
          </ul>
          <input type="text" className="hidden-input" name="question" value={question} />
          <button type="submit" className="btn btn-primary">Ответить</button>
        </div>
      </form>
    </Layout>
  );
}

module.exports = Quest;
