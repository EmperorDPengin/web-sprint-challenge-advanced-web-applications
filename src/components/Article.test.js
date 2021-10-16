import React from 'react';
import { render , screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

const testArticle = {
        author: "Test Author",
        body: "Test Body",
        createdOn: "2021-10-06T21:14:36-04:00",
        headline: "Test Headline",
        id: "_pl50",
        image: 175,
        summary: "Test Summary"
}

test('renders component without errors', ()=> {
    render(<Article article={testArticle}/>);
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle}/>)

    const testHeadline = screen.getByText(/test headline/i);
    const testAuthor = screen.getByText(/test author/i);
    const testSummary = screen.getByText(/test summary/i);
    const testBody = screen.getByText(/test body/i);

    expect(testHeadline).toBeInTheDocument();
    expect(testAuthor).toBeInTheDocument();
    expect(testSummary).toBeInTheDocument();
    expect(testBody).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
    const noAuthorArticle = {...testArticle, author: ""};

    render(<Article article={noAuthorArticle}/>)

    const authorPlaceHolder = screen.getByText(/associated press/i);

    expect(authorPlaceHolder).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const deleteHandleMock = jest.fn();

    render(<Article article={testArticle} handleDelete={deleteHandleMock}/>)

    const deleteButton = screen.getByTestId('deleteButton');
    userEvent.click(deleteButton);

    expect(deleteHandleMock).toBeCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.