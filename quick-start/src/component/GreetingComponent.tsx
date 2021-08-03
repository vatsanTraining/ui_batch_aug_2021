import React from 'react';
import GreetingsProps from '../model/Greeting';

export const Greetings = ({ 
        name, onGreeting }: GreetingsProps) => {
        return (
          <div>
            <p>Hello {name}!</p>
                   
              <button
                type="button"
                onClick={() => 
                    onGreeting(`Hello ${name}!`)}> Send</button>
              </div>
        );
      };
    