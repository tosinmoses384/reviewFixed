# Table

After you've made sure to have the correct things (and versions) installed, you
should be able to just run a few commands to get set up:

```shell
yarn
```
or

```shell
npm install
```

## Running the app

To get the app up and running (and really see if it worked), run:

```shell
yarn start
```


- **1** In styles.ts inside _Table: the pseudo "first-child" is potentially unsafe when  doing server-side rendering. Changed it  to "first-of-type" 
  
- **2**  In NewTableData inside _Table folder: Using Spacer in a table component is not valid because according to the rule <div> cannot appear as a child of <table>

- **3**  The Table.tsx under the _Table folder is not being rendered anywhere i.e never mounted and thereby not needed. To fix the error, we have to remove the  Prop component = { PaperCom } because component does not exist on the type defined for TableContainerStyled.

- **4**  The application can be improve more efficiently if a state management library is use like redux.
  
- **5** The Pagination can be better if implemented from the backend because if wehave large data, we do not want all the data to be fetch at once. Also, for the pagination, there should be a way to select page sizesuch that the length of the data that comes from the server is then divided by the page size to determine how the pagination is properly displayed. Fuethermore, there should also be a dropdown for selecting page number(optional)



- **6** The type for the data can be typed instead od using any.

- **7**  No readme and so I added for better understanding of the application. 

