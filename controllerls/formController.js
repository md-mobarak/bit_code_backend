// /controllers/formController.js
import { sendTo123FormBuilder } from '../services/formService.js';

export const receiveFormData = async (req, res) => {
  try {
    const formData = req.body;
    console.log('Received form data:', formData);

    // Send data to 123FormBuilder
    const result = await sendTo123FormBuilder(formData);
    res.status(200).json({
      message: 'Form data successfully sent to 123FormBuilder',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to process form data',
      error: error.message,
    });
  }
};
