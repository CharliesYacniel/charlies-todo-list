import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import DisplayTodos from '../../components/DisplayTodos';
import { createStore } from 'redux';
import { reducer } from '../../redux/reducer';
import ReactDOM from 'react-dom'


describe('Testing <DisplayTodos/> Component', () => {
  test('Render <DisplayTodos>', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={createStore(reducer, "all")}>
        {/* <DisplayTodos todos={null}  /> */}
       </Provider>,div
    );
    // screen.debug(); 
    // expect(screen.getByText('Filtra tus Todos')).toBeInTheDocument();
    ReactDOM.unmountComponentAtNode(div);
  
  });


});
