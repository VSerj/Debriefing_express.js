import PostsService from '../services/postsService.js';
class PostsController {
  async create(req, res) {
    try {
      const post = await PostsService.create(req.body, req.files.picture);
      res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostsService.getAll();
      res.json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostsService.getOne(req.params.id);
      res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const posts = await PostsService.update(req.body);
      res.json(posts);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  async delete(req, res) {
    try {
      const post = await PostsService.delete(req.params.id);
      res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new PostsController();
