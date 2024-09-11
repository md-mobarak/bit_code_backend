// /services/formService.js
import axios from 'axios';

export const sendTo123FormBuilder = async (formData) => {
  const { formName, formActive } = formData;

  try {
    const response = await axios.post(
      'https://api.123formbuilder.com/v2/forms',
      {
        name: formName,
        active: formActive,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY_123FORMBUILDER}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending form data:', error);
    throw new Error('Failed to send form data to 123FormBuilder');
  }
};
