### Important steps to setup the Project
step 1: Install the dependencies using "npm install" in the terminal
step 2: To start the application run the command "npm start" in the terminal
        it will run on the http://localhost:3000 

### About project
  Its a project that has three components with responsive design for Laptop and tablet 
    *sidebar
    *groubbarchart
    *linechat

### sidebar
  Its a responsive design and it will scroll automaticall screen shrinks for tablet

### groupbarchart
  First the charts are from the Javascript library "Chart.JS",
  The charts are basicaly responsive till tablet,

### linechat
  line chart also responsive 

### important
 1.There is no console error in this project.
 2.Only responsive till tablet I checked the figma there is no design for mobile
 3.There is render bug in line chart when you shrink or expand the screen it may not render to overcome thie just refresh the page
    ### Cause for this 
      During state comparison in React for reference types, the framework checks whether the memory addresses of the old state and new state match. If they match, React assumes that the state hasn't changed, avoiding a re-render.
    ### To resolve this we should binf the real data


