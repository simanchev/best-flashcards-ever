const React = require('react');
const Layout = require('./Layout');
const Nav = require('./Nav');

function Quest({
  check, question, answer_1, answer_2, answer_correct,
}) {
  const arrAnsw = [answer_1, answer_2, answer_correct];
  return (
    <Layout>
      <Nav />

      <form id="formId" action="/quest" method="post">
        <div className="container-fluid">
          <h5 className="check">{check}</h5>
          <h3 className="question" name="question">{question}</h3>
          <ul className="list-group">
            {arrAnsw.map((answer) => (
              <li className="list-group-item">
                <input className="form-check-input me-1" type="radio" name="answer" value={answer} id="firstRadio" />
                <label className="form-check-label" htmlFor="firstRadio">{answer}</label>
              </li>
            ))}
          </ul>
          <input type="text" className="hidden-input" name="question" value={question} />
          <button type="submit" className="btn btn-primary">Ответить</button>
        </div>
      </form>

    </Layout>
  );
}

module.exports = Quest;
