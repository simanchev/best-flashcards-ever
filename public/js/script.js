// document.querySelector('.topics-list').addEventListener('click', async (event) => {
//   event.preventDefault();
//   const { id } = event.target;
//   const response = await fetch(`/quest/${id}`);
//   const data = await response.json();
//   document.querySelector('.topics-list').remove();
// });

document.querySelector('#formId').addEventListener('submit', async (event) => {
  event.preventDefault();

  const question = event.target.question.value;
  const answer = event.target.answer.value;
  const response = await fetch('/quest', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify(
      {
        question, answer,
      },
    ),

  });
  const data = await response.text();
  document.querySelector('#formId').remove();
  document.querySelector('.navbar').remove();
  // document.querySelector(').insertAdjacentHTML('afterend', data);
  document.querySelector('.lexa').insertAdjacentHTML('afterend', data);
});

