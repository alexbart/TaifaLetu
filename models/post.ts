import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
  id: {
    type: String,
    required: [true, 'Post id is required.'],
  },
  title: {
    type: String,
    required: [true, 'Title is required.'],
  },
  details: {
    type: String,
    required: [true, 'Details required.'],
  },
//   caseFile: {
//     file: {type: Buffer, required: true },
//     filename: { type: String, required: true },
//     mimetype: { type: String, required: true },
//   },
//   caseFile: {
//     data: Buffer,
//     contentType: String,
//     required: [true, 'Case file is required.'],
//   },
  dateOfIncident: {
    type: String,
    required: [true, 'Date is required.'],
  },
  county: {
    type: String,
    required: [true, 'County is required.'],
  },
  accused: {
    type: String,
    required: [true, 'Accused is required.'],
  }
});

const Post = models.Post || model('Post', PostSchema);

export default Post;