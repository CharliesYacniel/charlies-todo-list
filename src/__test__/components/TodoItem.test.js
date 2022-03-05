import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import TodoItem from '../../components/TodoItem';



describe('Testing <TodoItem /> Component', () => {
    const todoItem=<TodoItem
    key="12345"
    item="Todo de Prueba"
    removeTodo="removeTodo"
    updateTodo="updateTodo"
    completeTodo="false"
    />
    
    //   screen.debug();  
  test('Render <li> para el todoItem', () => {
      render(todoItem);
        const listItem = screen.getByRole('listitem');
        expect(listItem).toBeInTheDocument();
        expect(listItem).toHaveClass('card');
  });

  test('Render <textarea> para el todoItem', () => {
      render(todoItem);
      expect(screen.getByTestId('areaTexto')).toBeInTheDocument();  
  });

  test('Render y lista de botones de acciones TODO', () => {
    render(todoItem);
     
    const listButton = screen.getAllByRole('button');
    for (let index = 0; index < listButton.length; index++) {
        const element = listButton[index];
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('buttonTODO');
    }
        
    expect(listButton.length).toEqual(2);
  });
});
