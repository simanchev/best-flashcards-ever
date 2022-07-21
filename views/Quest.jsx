const React = require('react');
const Layout = require('./Layout');
const Nav = require('./Nav');

function Quest({ question, answer_1, answer_2, answer_correct }) {
  const arrAnsw = [answer_1, answer_2, answer_correct];
  return (
    <Layout>
      <Nav />
      <div className="container-fluid">
        <h3 className="question">{question}</h3>
        <ul class="list-group">
          {arrAnsw.map((answer) => (
            <li class="list-group-item">
              <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" />
              <label class="form-check-label" for="firstRadio">{answer}</label>
            </li>))}
        </ul>
      </div>
    </Layout>
  );
}

module.exports = Quest;
