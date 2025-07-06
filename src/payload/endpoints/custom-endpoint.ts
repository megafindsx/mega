import { Endpoint } from 'payload/config';

const customEndpoint: Endpoint = {
  path: '/custom-endpoint',
  method: 'get',
  handler: async (req, res) => {
    res.status(200).json({ message: 'Custom endpoint is working!' });
  },
};

export default customEndpoint;
