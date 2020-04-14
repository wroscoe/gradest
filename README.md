# Gradest
A tool to grade your writing in real time. 


This project consists of the following peices.
* Website - Single page app hosted on github that runs text through a tensorflow.js model and returns a grade.
* Data Collection - Scripts to aggregate the text and text attributes (writer age, publication, writer name, ect) 
used to help train the tensorflow model. 
* Model Creation - Scripts to train the tensorflow model and convert it to tensorflow.js.




### Questions
* Can I train multiple outputs on the same model using differnt datasets for each output.
For example train the writer_age output on the dataset that has the age but exlude the age 
predictions for writing where I don't have the age. 
 




### References: 
* Models: https://github.com/ShawnyXiao/TextClassification-Keras
* Single page app to github pages... https://medium.com/swlh/building-a-static-single-page-application-with-javascript-for-github-pages-and-more-eb568b436bea