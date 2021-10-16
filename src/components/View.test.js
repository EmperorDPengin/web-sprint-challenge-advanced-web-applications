import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import articleServiceMock from '../services/articleServices';
import View from './View';


jest.mock('../services/articleServices');

const testArticles = [
    {
        author: "Test Author 1",
        body: "Test Body 1",
        createdOn: "2021-10-06T21:14:36-04:00",
        headline: "Test Headline 1",
        id: "_pl51",
        image: 175,
        summary: "Test Summary 1"
    },
    {
        author: "Test Author 2",
        body: "Test Body 2",
        createdOn: "2021-10-06T21:14:36-04:00",
        headline: "Test Headline 2",
        id: "_pl52",
        image: 175,
        summary: "Test Summary 2"
    },
    {
        author: "Test Author 3",
        body: "Test Body 3",
        createdOn: "2021-10-06T21:14:36-04:00",
        headline: "Test Headline 3",
        id: "_pl53",
        image: 175,
        summary: "Test Summary 3"
    }
]


test("renders zero articles without errors", async () => {
    // articleServiceMock.mockResolvedValueOnce
    // render(<View />);

    // const articlesRendered = screen.findAllByTestId('article');

    // expect(articlesRendered).not.toBeInTheDocument();
});

test("renders three articles without errors", async ()=> {

});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.