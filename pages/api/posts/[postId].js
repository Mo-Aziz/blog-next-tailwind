import data from "../data";

export default function handler(req, res) {
  const { Posts } = data;
  const { postId } = req.query;

  if (postId) {
    const post = Posts.find((value) => value.id == postId);
    return res.status(200).json(post);
  }

  return res.status(404).json({ error: "Post Not Found" });
}
