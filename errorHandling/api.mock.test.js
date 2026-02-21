import { describe, test, expect, jest } from '@jest/globals';

await jest.unstable_mockModule('axios', () => ({
  default: {
    get: jest.fn(),
  },
}));

//  Після мокінгу імпорт змоканиого axios і модуля під тест
const axios = (await import('axios')).default;
const { getPost } = await import('./mockApi.js');

describe('Test with mock (axios)', () => {
  test('Should return data on success', async () => {
    const mockData = { id: 1, title: 'My test post' };

    axios.get.mockResolvedValue({ data: mockData });

    const result = await getPost();

    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
  });

  test('Should throw error on failure', async () => {
    axios.get.mockRejectedValue(new Error('Network error'));

    //всередині getPost перехоплення помилки і відставка власної
    await expect(getPost()).rejects.toThrow('Failed to fetch post');
  });
});
