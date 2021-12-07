const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment-desc').value.trim();
    const post_id = document.querySelector('#comment-post-id').value;
  
    if (comment) {
     console.log(comment)
        
      };
    }
  
  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);