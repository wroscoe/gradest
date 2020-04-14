# Gradest
A tool to grade your writing in real time. 


#### Project Structure
* ```app/``` - Single page app hosted on github (https://wroscoe.github.io/gradest/) that runs text through a tensorflow.js model and returns a grade.
* ```collector/``` - Scripts to aggregate the text and text attributes (writer age, publication, writer name, ect) 
used to help train the tensorflow model. 
* ```trainer/``` - Scripts to train the tensorflow model and convert it to tensorflow.js.
* ```Makefile``` - Place for frequently used commands. 



### Questions
* Can I train multiple outputs on the same model using differnt datasets for each output.
For example train the writer_age output on the dataset that has the age but exlude the age 
predictions for writing where I don't have the age. 





### References (give credit): 
* Models: https://github.com/ShawnyXiao/TextClassification-Keras
* Jquery to update while typing. https://jsfiddle.net/deepumohanp/jZeKu/
* tensorflow_js using word embeddings... https://github.com/tensorflow/tfjs-examples/tree/master/sentiment
* convert keras model to tensorflow.js https://www.tensorflow.org/js/tutorials/conversion/import_keras
* light sentence embeder for tensorflow.js https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder (see colab example, requires TF1) https://colab.research.google.com/github/tensorflow/hub/blob/master/examples/colab/semantic_similarity_with_tf_hub_universal_encoder_lite.ipynb