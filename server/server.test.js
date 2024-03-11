const request = require('supertest');
const express = require('express');
const app = require('./server'); 

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/create')
      .send({
        name: 'John',
        age: 30
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('message')
  })
})

describe('Get Endpoints', () => {
    it('should get a specific object', async () => {
        const res = await request(app)
        .get('/api/read?name=JohnDoe')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('name')
        expect(res.body).toHaveProperty('age')
    })
});

describe('Put Endpoints', () => {
    it('should update a specific object', async () => {
        const res = await request(app)
        .put('/api/update')
        .send({
            name: 'John',
            age: 35
        })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message')
    })
});

describe('Delete Endpoints', () => {
    it('should delete a specific object', async () => {
        const res = await request(app)
        .delete('/api/delete')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message')
    })
});