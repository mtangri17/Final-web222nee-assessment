window.reviewData = [
    {
      name: 'Muskan Chadha',
      date: '2022-11-12',
      rating: 5,
      review: 'I love this game! It iss so addictive and I can not stop playing it. The graphics are amazing and the controls are easy to use. I highly recommend it'
    },
    {
      name: 'Jatin Chadha',
      date: '2022-12-11',
      rating: 4,
      review: 'Temple Run is a fun game, but it can be frustrating at times. It iss challenging to avoid all the obstacles and collect all the coins. It iss definitely worth a try if you are looking for a game that will test your skills.'
    },
    {
      name: 'Nikita Suri',
      date: '2023-01-03',
      rating: 5,
      review: 'I like the game, but I dont like how many in-app purchases there are. It is annoying to have to spend money to unlock new characters or power-ups. Other than that, it is a good game'
    },
    {
      name: 'Hitesh Suri',
      date: '2023-02-25',
      rating: 3,
      review: 'Temple Run is great for passing the time. It is not too difficult, but it is not too easy either. I like that you can compete with your friends and try to beat each others high scores.'
    },
    {
      name: 'Kanav Kapoor',
      date: '2023-03-04',
      rating: 2,
      review: 'The game is pretty repetitive after a while. You are just running through the same temple over and over again. I wish there were more levels or different environments to keep things interesting.'
    }
  
];


document.addEventListener('DOMContentLoaded', function() {
    createTable(reviewData);

    const form = document.querySelector('.review-form-input-area');
    form.addEventListener('submit', function(event) {

      event.preventDefault();
  
      const name = document.querySelector('#name').value;
      const date = document.querySelector('#date').value;
      const rating = document.querySelector('input[name="rating"]:checked').value;
      const review = document.querySelector('#review').value;
  
      const newReview = { name, date, rating, review };
  
 
      reviewData.push(newReview);
  
  
      form.reset();
  

      createTable(reviewData);
    });

  });

function createTable(reviews) {

    let table = document.querySelector("#reviews-table");
    let newRow, newCell, newText;
  

    reviews.forEach(function (review) {
  
      newRow = table.insertRow();
      newRow.className = "card";
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-name";
      newCell.textContent = "Name: ";
      newText = document.createTextNode(review.name);
      newCell.appendChild(newText);
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-date";
      newCell.textContent = "Date: ";
      newText = document.createTextNode(review.date);
      newCell.appendChild(newText);
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-rating";
      newCell.textContent = "Rating: ";
      newText = document.createTextNode(getRatingStars(review.rating));
      newCell.appendChild(newText);
  
      newCell = newRow.insertCell();
      newCell.className = "reviews-review";
      newText = document.createTextNode(review.review);
      newCell.appendChild(newText);
    });
  }
  
  function getRatingStars(rating) {
    let starsHtml = '';
    for (let i = 0; i < rating; i++) {
      starsHtml += '★ ';
    }
    for (let i = rating; i < 5; i++) {
      starsHtml += '☆ ';
    }
    return starsHtml.trim();
  }