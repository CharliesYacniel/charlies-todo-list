import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import { reducer } from '../../redux/reducer';
import ReactDOM from 'react-dom'

import Todos from '../../components/Todos'

describe('Testing <Todos/> Component', () => {
  test('Render <Todos>', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    //   <Provider store={createStore(reducer, "all")}>
      <Provider store={createStore(reducer, "all")}>
        <Todos todos="all" addTodo="addTodo"/>
       </Provider>,div
    );
    // screen.debug(); 
    ReactDOM.unmountComponentAtNode(div);
    
    // expect(screen.getByText('Filtra tus Todos')).toBeInTheDocument();
  });


});
