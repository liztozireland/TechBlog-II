const newFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment-desc').value.trim();
    const post_id = document.querySelector('#comment-post-id').value;
  
    if (comment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);