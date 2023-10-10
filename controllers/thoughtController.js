const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');
const thoughtCount = async () => {
    const numberOfthoughts = await Thought.aggregate()
    .count('thoughtCount');
    
  
  return numberOfthoughts;
};
const  user = async (thoughtId) =>
  Thought.aggregate([
{ $match: { _id: new ObjectId(thoughtId) } },
    {
      $unwind: 'thoughts',
    },
    {
      $group: {
        _id: new ObjectId(studentId),
        overallThought: { $avg: '$thoughts.score' },
      },
    },
  ]);
module.exports = {
    // Get all thoughts
    async getThoughts(req, res) {
      try {
        const thoughts = await thoughts.find();
        const thoughtObj = {
          thoughts,
          thoughtCount: await thoughtCount(),
        };
        return res.json(thoughtObj);
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },
    async getSingleThought(req, res) {
        try {
          const thought = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .lean();
    
          if (!thought) {
            return res.status(404).json({ message: 'No thought with that ID' });
          }
    
          res.json({
            thought,
            grade: await grade(req.params.thoughtId),
          });
        } catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
      },
      async createThought(req, res) {
        try {
          const thought = await thought.create(req.body);
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      async deleteThought(req, res) {
        try {
          const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });
    
          if (!thought) {
            return res.status(404).json({ message: 'No such thought exists' })
          }
    
          const thought = await Thought.findOneAndUpdate(
            { thoughts: req.params.thoughtId },
            { $pull: { thoughts: req.params.thoughtId } },
            { new: true }
          );
    
          if (!thought) {
            return res.status(404).json({
              message: 'thought deleted, but no thoughts found',
            });
          }
    
          res.json({ message: 'thought successfully deleted' });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
      async addThought(req, res) {
        try {
          console.log('You are adding an thought');
          console.log(req.body);
          const thought = await thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { thought: req.body } },
            { runValidators: true, new: true }
          );
    
          if (!thought) {
            return res
              .status(404)
              .json({ message: 'No thought found with that ID :(' })
          }
    
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },
      async removeThought(req, res) {
        try {
          const thought = await thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { thought: { thoughtId: req.params.thoughtId } } },
            { runValidators: true, new: true }
          );
    
          if (!thought) {
            return res
              .status(404)
              .json({ message: 'No thought found with that ID :(' });
          }
    
          res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
      },
    };
    