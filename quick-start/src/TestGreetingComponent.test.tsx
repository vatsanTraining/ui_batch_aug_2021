import React from 'react';
import GreetingsProps from "./model/Greeting";
import { Greetings } from './component/GreetingComponent';
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("when rendered with `OnGeeting` prop", () => {
        it("should render the send  button", () => {
          render(
            <Greetings  name="Test Name" onGreeting={() => {}} />
             );
    
    expect(screen.getByRole("button")
              ).toBeInTheDocument();
            });
          });
        
        
        describe("when the button is pressed", () => {
              it("should call the `onGreeting` callback", () => {
               
             const onGreetingMock = jest.fn();
            
                render(
                 <Greetings  name="Test Name"
                                            onGreeting={onGreetingMock} />
                );
                
                fireEvent.click(screen.getByRole("button"));
            
                expect(onGreetingMock).toHaveBeenCalledWith(
                  "Hello Test Name!");
              });
            });
            


    


