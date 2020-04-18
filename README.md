# Gradest
A tool to give feedback on your writing in real time. It is focused on providing parents 
a less subjective way to evaluate writing while making it fun for students to imitate authors they like. 

**Current Status**: ```In developement.``` Sentences are passed to a tensorflow model that outputs a 
sentence embedding. See project board for how you can contribute.   

[Live Site](https://wroscoe.github.io/gradest/)

To host this for free and give live feedback on the writing this tool is built as as a static page using
 tensorflow.js where are all calculations are performed on the client. 

#### Project Structure
* ```app/``` - Single page app hosted on github (https://wroscoe.github.io/gradest/) that runs text through a tensorflow.js model and returns a grade.
* ```collector/``` - Scripts to aggregate the text and text attributes (writer age, publication, writer name, ect) 
used to help train the tensorflow model. 
* ```trainer/``` - Scripts to train the tensorflow model and convert it to tensorflow.js.
* ```Makefile``` - Place for frequently used commands. 

#### Datasets
* Old books that are out of print.
* Blog posts
* Writing samples by students. 

#### Possible Outputs
* Writing Grade Level/Age - Use the age of the author as the target variable.
* Most similar author. - What author is most similar to the users writing. 
* Writing period - What decade is the users writing like. 


#### Questions / Issues
* Most word embedding models are too big (>100MB) to load in a static webpage. The lite word embedding I found
only works on TF1. How can we create our own lite word/sentence embedding that works in TF2 or keras? 

* What is the right way to train the network so that it can output many different sparse metrics. Some 
datasets may not have the age of the author.


### References (give credit): 
* [Keras Text Classification Models](https://github.com/ShawnyXiao/TextClassification-Keras)
* [convert keras model to tensorflow.js](https://www.tensorflow.org/js/tutorials/conversion/import_keras)
* [tensorflow universal sentence embeder](https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder) with [colab example, requires TF1](https://colab.research.google.com/github/tensorflow/hub/blob/master/examples/colab/semantic_similarity_with_tf_hub_universal_encoder_lite.ipynb)
* [tensorflow_js using word embeddings](https://github.com/tensorflow/tfjs-examples/tree/master/sentiment)