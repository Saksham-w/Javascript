  
Select the button element to add to-dos     
Add an event listener to that button, on click and run a function
Inside that function:
select the input element and get the value or to-do task input by the user
check if that value if empty string, if it is, warn the user to write something and exit the function, else proceed
create a new li element using document.createElement('li')
create a checkbox and add onClick to it so that the li gets line through styling after clicking on it
create a p tag and add the input value inside it
create a delete button and add onClick to it so that li gets removed after clicking on it
append checkbox, text with input value/ p tag and delete button to the li created above
then append that li to the main to-do list container
finally clear the input field and exit the function