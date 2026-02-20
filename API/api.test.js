import { describe, test, expect } from "@jest/globals";

import apiUrl from './apiClient.js';

describe('JSONPlaceholder API tests', () => {

  test('GET /posts should return array of posts', async () => {
    const response = await apiUrl.get('/posts');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });
  test('GET /posts/1 should return post with postId = 1', async() => {
    const response = await apiUrl.get('/posts/1');

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
  })
  test('GET /posts/1/comments?postId=1 should return comments only related to postId = 1 ', async() => {
    const response = await apiUrl.get('/comments',
    { params: { postId: 1 } } )

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.every(comment => comment.postId === 1)).toBe(true)

  })
  test('GET /posts/1/comments should contain fields with data type "string"', async() => {
  const response = await apiUrl.get('/posts/1/comments')

  expect(response.status).toBe(200)
  expect(Array.isArray(response.data)).toBe(true);
  expect(response.data.every(comment =>
    typeof comment.name === 'string' &&
    typeof comment.email === 'string' &&
    typeof comment.body === 'string'
  ))
  })
  test('POST /posts should create new post', async () => {
  const newPost = {
    title: 'Test title',
    body: 'Test body',
    userId: 1
    };

  const response = await apiUrl.post('/posts', newPost);

  expect(response.status).toBe(201);
  expect(response.data).toMatchObject(newPost);
  expect(response.data).toHaveProperty('id');
  expect(typeof response.data.title === 'string')
  expect(typeof response.data.body == 'string')
  expect(typeof response.data.userIdid === 'number')

  });
})