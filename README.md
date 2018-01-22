# REACT

## Setting up React
 
 ### Option 1
 From [React tutorial](https://reactjs.org/docs/add-react-to-an-existing-app.html#installing-react)
 ```
 npm install --save react react-dom
 npm install --save-dev babel-cli babel-preset-react babel-preset-env
 npm install -g live-server

 ```

 Create a `.babelrc` file on your root directory and add the following content:
 ``` 
	{
	  "presets": ["react", "env"]
	}
 ```

 ### Option 2
 From [Andrew Mead tutorial](https://www.udemy.com/react-2nd-edition/learn/v4/content)
 ```
 npm install -g yarn
 npm install -g live-server
 ```

 ## Run the application:
 `babel src -d scripts --watch`  
 The `src` argument is the folder that contains your JSX files.  
 The `scripts` argument is the folder that Babel will save the compiled code.

 `live-server hello`
