import React from 'react'
import ReactDOM from 'react-dom/client'
const parent = React.createElement('div', { id: "parent" },
    [React.createElement('div', { id: "child" }, [React.createElement('h1', {}, "h1 tag"), React.createElement('h2', {}, "h2 tag")]),
    React.createElement('div', { id: "child" }, [React.createElement('h1', {}, "h1 tag"), React.createElement('h2', {}, "h2 tag")])]
)

const header = React.createElement('h1', { id: "heading" }, "Hello world from React")
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)