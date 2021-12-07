const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all comments by id, post, and user_id
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: { include: [id, post, user_id] }
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});


// CREATE a comment, user must be logged in
router.post('/', withAuth, async (req, res) => {
  try {
    const postData = await Comment.create({
      ...req.body, user_id: req.session.user_id
    });
    res.status(200).json(postData);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

// UPDATE a comment, user must be logged in
router.put('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.update({
      ...req.body, user_id: req.session.user_id
    });
    if (!postData) {
      res.status(404).json({ message: 'Please sign in!' });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a comment, user must be logged in
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;