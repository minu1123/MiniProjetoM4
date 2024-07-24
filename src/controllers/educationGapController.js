import educationGapData from '../models/educationGapModel.js';

export const getEducationGap = (req, res) => {
  res.json(educationGapData);
};
