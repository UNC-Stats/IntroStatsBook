var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "section-ch1-greetings",
  "level": "1",
  "url": "section-ch1-greetings.html",
  "type": "Section",
  "number": "1.1",
  "title": "Greetings",
  "body": " Greetings   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion   "
},
{
  "id": "section-ch1-learning-stats",
  "level": "1",
  "url": "section-ch1-learning-stats.html",
  "type": "Section",
  "number": "1.2",
  "title": "How to Learn and Think about Statistics",
  "body": " How to Learn and Think about Statistics   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion   "
},
{
  "id": "section-ch1-tips",
  "level": "1",
  "url": "section-ch1-tips.html",
  "type": "Section",
  "number": "1.3",
  "title": "Tips for Success",
  "body": " Tips for Success   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion   "
},
{
  "id": "section-ch2-stat-invest-process",
  "level": "1",
  "url": "section-ch2-stat-invest-process.html",
  "type": "Section",
  "number": "2.1",
  "title": "A Full Investigation",
  "body": " A Full Investigation   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion   "
},
{
  "id": "section-ch2-big-ideas-vocab",
  "level": "1",
  "url": "section-ch2-big-ideas-vocab.html",
  "type": "Section",
  "number": "2.2",
  "title": "Big Ideas and Vocabulary",
  "body": " Big Ideas and Vocabulary   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion   "
},
{
  "id": "section-ch2-interrogate-data",
  "level": "1",
  "url": "section-ch2-interrogate-data.html",
  "type": "Section",
  "number": "2.3",
  "title": "Interrogating Data",
  "body": " Interrogating Data   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion   "
},
{
  "id": "section-ch3-simulation-intro",
  "level": "1",
  "url": "section-ch3-simulation-intro.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction to Modeling and Simulation",
  "body": " Introduction to Modeling and Simulation   Modeling is one of the most important topics you may ever learn. It is used in microbiology, macroeconomics, urban studies, sociology, psychology, public health, computer science, and of course, statistics. In fact, modeling is a method that is used in almost every discipline. Many think that it is an important skill to learn because it is so pervasive. While this is true, even more important is how closely the skills of modeling tie to the more general skills of problem solving. As you progress through the chapter, remember that the modeling process is a creative process that can often be very challenging. At times, this might lead to frustration as you are learning and practicing some of the material.  A model is a simplified representation of a system that can be used to promote an understanding of the more complex system. For example, meteorologists use computers to build models of the climate to understand and predict the weather. The computer model includes behaviors or properties which correspond, in some way, to the particular real-world system of climate. The computer models, however, do not include every possible detail about climate. All models leave things out and get some things wrong. This is because all models are simplifications of reality. As the British statistician George Box famously said:    All models are wrong, but some are useful.    Models have many purposes, but are primarily used to better understand phenomena in the real-world. Common uses of models are for description, exploration, prediction, and classification. For example, Google builds models to understand and predict peoples' internet searching tendencies. These models are then used to help Google carry out more efficient and better searches of information. As another example, Netflix builds models to understand the characteristics of movies that their customers have rated highly so that they can then recommend other movies that the person may enjoy.    Monte Carlo Simulation  Monte Carlo simulation is one method that statisticians use to understand real-world phenomena. In Monte Carlo simulation, a model is used to generate multiple (sometimes millions) of data sets. By examining the data sets produced (or summaries of the data sets produced), researchers can draw insight about and predict what might happen in the real-world under a given set of circumstances.   Monte Carlo Origins  The concept of Monte Carlo simulation was devised by the mathematicians Stan Ulam and Nicholas Metropolis, who were working to develop an atomic weapon for the US as part of the Manhattan Project. They needed to compute the average distance that a neutron would travel in a substance before it collided with an atomic nucleus, but they could not compute this using standard mathematics. Ulam realized that these computations could be simulated using random numbers, just like a casino game. In a casino game such as a roulette wheel, numbers are generated at random; to estimate the probability of a specific outcome, one could play the game hundreds of times. Ulam's uncle had gambled at the Monte Carlo casino in Monaco, which is apparently where the name came from for this new technique. Read about the fascinating origins of Monte Carlo simulation in this article.       Monte Carlo simulation is any computational algorithm that randomly generates multiple samples of data from a defined population based on an assumed data generating process. The data generating process is the mechanism that characterizes the population from which simulated samples of data are drawn. Then the researcher explores patterns that emerge across those simulated samples.    This definition of a Monte Carlo simulation implies that the process for carrying out such a simulation encompasses:   Defining a population or model.  Randomly generating several samples of data from the population or model.  Exploring the patterns that emerge across the simulated samples.   Or, in simpler terms, (1) model, (2) simulate, and (3) evaluate.   \"One-Son\" Policy: A Monte Carlo Study  In 1978, China introduced the “one-child” policy in order to alleviate social, economic, and environmental problems in China. The policy restricted the number of children that married urban couple could have. The policy is controversial both within and outside of China, because of the manner in which the policy has been implemented. There have also been concerns raised about potential negative economic and social consequences, in part because many families were determined to have a son.  Scholars have wondered how things would change if instead of a one-child policy, a country adopted a “one-son” policy, which would allow families to keep having children until they had a son. If a family's first child is a boy, they would be restricted from having more children. If, however, the first child was a daughter, the family could continue having children until a son was born.    If China adopted a “one-son” policy, how would the policy affect the average number of children per family, which is currently 1.6 (Central Intelligence Agency, 2025)?    One way in which this question could be studied (without actually implementing the policy) would be to conduct a simulation study by modeling this situation and generating many data sets from the model.  Model  Consider for a minute how you might model the number of children that a particular family would have under the \"one-son\" policy.  You could write the word “boy” on one index card and the word “girl” on another index card and then place those two index cards in a hat. You would then draw a card at random from the hat. This would represent a couple giving birth to a baby, and since there are only two cards in the hat, the chances that the baby is a boy would be . If the card has the word \"boy\" written on it, you would be done and the family would be reported to have one child, a son. If the card has the word “girl” written on it, you would make note of it and put the index card back in that hat. Assuming that the family wants another child and will continue having children until a son is born, you would randomly draw a card from the hat again to represent the birth of a second child. If the card has the word “boy” written on it, you are done, and the simulated family would be reported to have two children. If the second card has the word “girl” written on it, you would you would repeat the process for as long as needed.  The above is just an example. What other manipulatives and processes might you use?  Simulate  After you have a model, the next step in a simulation study is to use the model to generate data. Time to get a hat and make those index cards! It's not enough to perform one simulation\/determine how many children that one simulated family might have. In practice, we would repeat the simulation many times, say running it for 500 families. shows the results after carrying out this process for the first seven simulated families. The video in shows these first seven simulations in action. Note that in the video, you will see a computer program randomly selecting balls, labeled boy and girl, from a jar rather than index cards from a hat.    One-Son Policy Model Simulation    Simulation Results from the One-Son Policy Model    Family  Girl  Boy  Total Children    Family #1   ✔  1    Family #2  ✔✔✔✔✔  ✔  6    Family #3  ✔  ✔  2    Family #4   ✔  1    Family #5   ✔  1    Family #6  ✔✔✔  ✔  4    Family #7  ✔✔✔✔  ✔  5     You may have noticed that, not only did we record the data that was simulated, we also recorded a summary of the simulation results (total children). This will be true for every simulation study you undertake in the course.  Evaluate  In total, we simulated the model 500 times. Now, we need to use all of our results to provide an answer to the research question. How might we combine and make sense of the 500 simulated data sets to come up with an answer? Recall: Our goal is to determine how a \"One-Son\" policy would affect the average number of children per family.  We took the summary from each simulation (total number of children) and put these 500 summaries together on a graph. is a histogram showing the total number of children had by our 500 simulated families. You can see that roughly half of the families only had one child. While there are some larger families(including one with nine children!), it was much more common for a family to have one or two children. Now, to answer our research question, we could compute the average number of children for our 500 simulated families and then compare this to the current average of 1.6. Under a \"One-Son\" policy is the average smaller, equal to, or bigger than 1.6?    Graph of the One-Son Policy Simulation Results   The average number of children a family would have, according to our simulation results, is 1.88, which is larger than the current average of 1.6.     Monte Carlo Simulation Assumptions  \"Wait,\" you say. \"Even though we carried out this simulation, we still can't provide an answer to the research question! Our model doesn't reflect reality! Some families may not want to have any children, while others might be happy to stop after a girl was born. And what about the possibility of birthing twins?” Maybe you are even questioning whether the probability of having a boy versus a girl is really 50:50. These are all valid points, and all would likely affect the results of the simulation, which in turn affects the conclusions that are drawn.  While the model used in the “One-Son” example is overly simplistic for drawing any sorts of meaningful conclusions about implementing such a policy in China, it still provides a useful starting point! From here, we could introduce additional complexity into the model. It is normal practice to evaluate and revise or update models as certain assumptions are deemed tenable and others are not. Because of this process, simulation studies are generally iterative in their development. This iteration process continues until an adequate level of understanding is developed and the research question can be answered.   Monte Carlo Simulation in Practice  Statisticians and Data Scientists often use incredibly complex models to generate their data. Electronic Arts, the video game company behind titles such as Madden , NHL , and FIFA , uses game telemetry (the transmission of data from a game executable for recording and analysis) to model the gameplay patterns of players and identify the elements of their games that are highly related to player retention.  By understanding the behavior of players and the common patterns that are used, Electronic Arts game developers can focus their attention on more relevant features in future iterations of the game and ultimately reduce production costs. For example, in their examination of Madden NFL 11 , Electronic Arts used 46 features to model players' preferences, including their control usage, performance, and play-calling style .   Learn more about the role of Statistics and Data Science in the gaming industry.      Conclusion  Even in the most enormously complicated modeling problem, researchers often make many simplifying assumptions. Remember that all models, even those that seem quite complex, are simplifications of reality and get many things wrong. With enough simplification, a model can be constructed and studied.    Practice Problems    First Problem    "
},
{
  "id": "def-MC",
  "level": "2",
  "url": "section-ch3-simulation-intro.html#def-MC",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "   Monte Carlo simulation is any computational algorithm that randomly generates multiple samples of data from a defined population based on an assumed data generating process. The data generating process is the mechanism that characterizes the population from which simulated samples of data are drawn. Then the researcher explores patterns that emerge across those simulated samples.   "
},
{
  "id": "subsec-Monte-Carlo-Sim-8",
  "level": "2",
  "url": "section-ch3-simulation-intro.html#subsec-Monte-Carlo-Sim-8",
  "type": "Exploration",
  "number": "3.1.1",
  "title": "\"One-Son\" Policy: A Monte Carlo Study.",
  "body": " \"One-Son\" Policy: A Monte Carlo Study  In 1978, China introduced the “one-child” policy in order to alleviate social, economic, and environmental problems in China. The policy restricted the number of children that married urban couple could have. The policy is controversial both within and outside of China, because of the manner in which the policy has been implemented. There have also been concerns raised about potential negative economic and social consequences, in part because many families were determined to have a son.  Scholars have wondered how things would change if instead of a one-child policy, a country adopted a “one-son” policy, which would allow families to keep having children until they had a son. If a family's first child is a boy, they would be restricted from having more children. If, however, the first child was a daughter, the family could continue having children until a son was born.    If China adopted a “one-son” policy, how would the policy affect the average number of children per family, which is currently 1.6 (Central Intelligence Agency, 2025)?    One way in which this question could be studied (without actually implementing the policy) would be to conduct a simulation study by modeling this situation and generating many data sets from the model.  Model  Consider for a minute how you might model the number of children that a particular family would have under the \"one-son\" policy.  You could write the word “boy” on one index card and the word “girl” on another index card and then place those two index cards in a hat. You would then draw a card at random from the hat. This would represent a couple giving birth to a baby, and since there are only two cards in the hat, the chances that the baby is a boy would be . If the card has the word \"boy\" written on it, you would be done and the family would be reported to have one child, a son. If the card has the word “girl” written on it, you would make note of it and put the index card back in that hat. Assuming that the family wants another child and will continue having children until a son is born, you would randomly draw a card from the hat again to represent the birth of a second child. If the card has the word “boy” written on it, you are done, and the simulated family would be reported to have two children. If the second card has the word “girl” written on it, you would you would repeat the process for as long as needed.  The above is just an example. What other manipulatives and processes might you use?  Simulate  After you have a model, the next step in a simulation study is to use the model to generate data. Time to get a hat and make those index cards! It's not enough to perform one simulation\/determine how many children that one simulated family might have. In practice, we would repeat the simulation many times, say running it for 500 families. shows the results after carrying out this process for the first seven simulated families. The video in shows these first seven simulations in action. Note that in the video, you will see a computer program randomly selecting balls, labeled boy and girl, from a jar rather than index cards from a hat.    One-Son Policy Model Simulation    Simulation Results from the One-Son Policy Model    Family  Girl  Boy  Total Children    Family #1   ✔  1    Family #2  ✔✔✔✔✔  ✔  6    Family #3  ✔  ✔  2    Family #4   ✔  1    Family #5   ✔  1    Family #6  ✔✔✔  ✔  4    Family #7  ✔✔✔✔  ✔  5     You may have noticed that, not only did we record the data that was simulated, we also recorded a summary of the simulation results (total children). This will be true for every simulation study you undertake in the course.  Evaluate  In total, we simulated the model 500 times. Now, we need to use all of our results to provide an answer to the research question. How might we combine and make sense of the 500 simulated data sets to come up with an answer? Recall: Our goal is to determine how a \"One-Son\" policy would affect the average number of children per family.  We took the summary from each simulation (total number of children) and put these 500 summaries together on a graph. is a histogram showing the total number of children had by our 500 simulated families. You can see that roughly half of the families only had one child. While there are some larger families(including one with nine children!), it was much more common for a family to have one or two children. Now, to answer our research question, we could compute the average number of children for our 500 simulated families and then compare this to the current average of 1.6. Under a \"One-Son\" policy is the average smaller, equal to, or bigger than 1.6?    Graph of the One-Son Policy Simulation Results   The average number of children a family would have, according to our simulation results, is 1.88, which is larger than the current average of 1.6.  "
},
{
  "id": "subsec-MC-assumptions-4",
  "level": "2",
  "url": "section-ch3-simulation-intro.html#subsec-MC-assumptions-4",
  "type": "Example",
  "number": "3.1.5",
  "title": "Monte Carlo Simulation in Practice.",
  "body": " Monte Carlo Simulation in Practice  Statisticians and Data Scientists often use incredibly complex models to generate their data. Electronic Arts, the video game company behind titles such as Madden , NHL , and FIFA , uses game telemetry (the transmission of data from a game executable for recording and analysis) to model the gameplay patterns of players and identify the elements of their games that are highly related to player retention.  By understanding the behavior of players and the common patterns that are used, Electronic Arts game developers can focus their attention on more relevant features in future iterations of the game and ultimately reduce production costs. For example, in their examination of Madden NFL 11 , Electronic Arts used 46 features to model players' preferences, including their control usage, performance, and play-calling style .   Learn more about the role of Statistics and Data Science in the gaming industry.   "
},
{
  "id": "section-ch3-simulation-intro-6-2",
  "level": "2",
  "url": "section-ch3-simulation-intro.html#section-ch3-simulation-intro-6-2",
  "type": "Exercise",
  "number": "3.1.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch3-summarize-sim-and-sampling-dist",
  "level": "1",
  "url": "section-ch3-summarize-sim-and-sampling-dist.html",
  "type": "Section",
  "number": "3.2",
  "title": "Making Sense of Simulation Results",
  "body": " Making Sense of Simulation Results   Text of Intro.     Title  Text of SubSection.     Title  Standard error Point estimates vary from sample to sample, and we quantify this variability with what is called the standard error (SE). The standard error is equal to the standard deviation associated with the statistic. So, for example, to quantify the variability of a point estimate from one sample to the next, the variability is called the standard error of the point estimate. Almost always, the standard error is itself an estimate, calculated from the sample of data.    Conclusion  Text of Conclusion    Practice Problems   Clickable Areas, Regular Text   Identify (by clicking, or by circling) all of the nouns in this quotation by Eleanor Roosevelt.     The future belongs to those who believe in the beauty of their  dreams .     The incorrect words are pronouns.     "
},
{
  "id": "clickable-text",
  "level": "2",
  "url": "section-ch3-summarize-sim-and-sampling-dist.html#clickable-text",
  "type": "Exercise",
  "number": "3.2.3.1",
  "title": "Clickable Areas, “Regular” Text.",
  "body": " Clickable Areas, Regular Text   Identify (by clicking, or by circling) all of the nouns in this quotation by Eleanor Roosevelt.     The future belongs to those who believe in the beauty of their  dreams .     The incorrect words are pronouns.   "
},
{
  "id": "section-ch3-sampling-dist",
  "level": "1",
  "url": "section-ch3-sampling-dist.html",
  "type": "Section",
  "number": "3.3",
  "title": "Sampling Distributions",
  "body": " Sampling Distributions   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch3-sampling-dist-6-2",
  "level": "2",
  "url": "section-ch3-sampling-dist.html#section-ch3-sampling-dist-6-2",
  "type": "Exercise",
  "number": "3.3.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch4-inference-intro-HT",
  "level": "1",
  "url": "section-ch4-inference-intro-HT.html",
  "type": "Section",
  "number": "4.1",
  "title": "Hypothesis Testing",
  "body": " Hypothesis Testing   In , you learned how to carry out Monte Carlo simulations with the \"model - simulate - evaluate\" process. This is the same kind of process that researchers, scientists, and statisticians engage in when they test hypotheses about the world.  For example, consider evaluating whether the admission rate for public universities is higher than 0.50. Imagine you collected data from 20 public universities and found that the admission rate for those 20 schools was 0.62. Based on this evidence, we could say that the average admission rate for our sample of 20 universities was higher than 0.50. But, is this true when we grow our sample to ALL public universities? Is the mean admission rate for ALL public universities higher than 0.50?  Drawing conclusions beyond the data that we have is called inference, and hypothesis testing is one of the statistical inference methods that you will learn.    Statistical Inference  Define and introduce idea of statistical inference. Review vocab - population, parameter, sample, statistic.    Setting up Statistical Hypotheses  To illustrate the ideas behind statistical hypothesis testing, imagine you had flipped a coin 15 times and it had produced heads in 11 of those flips. This proportion of .73 (or 73%) heads made you suspicious about whether the coin was fair and you now want to evaluate whether it is fair, or whether it is producing heads too often. To determine whether the coin is fair or not, we will write and evaluate a set of hypotheses about the our coin.     Statistical Hypotheses are mathematical statements about population parameters which are often formed based on prior knowledge and theory in the area of content. wWe typically write out two hypotheses about the population parameters: the null hypothesis ( ), often referred to as a statement of no effect, and the alternative hypothesis ( ), often termed the research hypothesis.    For example, here are a set of potential hypotheses about our coin:   There are a few things to notice about these hypotheses:   The statements are about the proportion of heads (i.e., about a summary measure).  The statements are about the population (all flips of the coin), not the sample.  The null hypothesis ( ) is a statement of equality (is equal to).  The alternative hypothesis ( ) often indicates the researcher's belief about the population summary (e.g., we think the coin is producing more heads than tails).   Additionally, statisticians often use the language of mathematics to express these hypotheses. The same hypotheses expressed via the language of mathematics are:   The Greek letter pi ( ) denotes a population proportion or probability. (In symbolic notation for statistical hypotheses, is not the mathematical constant of 3.14.) The subscript of “Heads” indicates that we are considering the proportion of heads in all flips of the coin.  See the examples below to learn more about setting up statistical hypotheses. Use to help you with the mathematical symbols.   Mathematical Symbols used to Represent Parameters    Parameter  Symbol  Read as    Proportion   \"pi\"    Mean   \"mu\"    Standard Deviation   \"sigma\"    Correlation   \"rho\"      Representation of Hypotheses  You can always write hypotheses descriptively, without resorting to the symbolic notation. If you are comfortable with the mathematical symbols, feel free to use it; the mathematical notation acts as a shorthand to quickly state a hypothesis and define the model used. As you read research articles or take other courses, you will see statistical hypotheses stated in many ways, so it is good to understand that there are many ways to express the same thing.     Conclusion  You learned how to set up statistical hypotheses. In the next section you will learn more about the hypothesis testing process.    Practice Problems    First Problem    "
},
{
  "id": "def-hypoth",
  "level": "2",
  "url": "section-ch4-inference-intro-HT.html#def-hypoth",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "   Statistical Hypotheses are mathematical statements about population parameters which are often formed based on prior knowledge and theory in the area of content. wWe typically write out two hypotheses about the population parameters: the null hypothesis ( ), often referred to as a statement of no effect, and the alternative hypothesis ( ), often termed the research hypothesis.   "
},
{
  "id": "Param-Symbol-tbl",
  "level": "2",
  "url": "section-ch4-inference-intro-HT.html#Param-Symbol-tbl",
  "type": "Table",
  "number": "4.1.2",
  "title": "Mathematical Symbols used to Represent Parameters",
  "body": " Mathematical Symbols used to Represent Parameters    Parameter  Symbol  Read as    Proportion   \"pi\"    Mean   \"mu\"    Standard Deviation   \"sigma\"    Correlation   \"rho\"    "
},
{
  "id": "subsec-set-up-hypoth-13",
  "level": "2",
  "url": "section-ch4-inference-intro-HT.html#subsec-set-up-hypoth-13",
  "type": "Note",
  "number": "4.1.3",
  "title": "Representation of Hypotheses.",
  "body": " Representation of Hypotheses  You can always write hypotheses descriptively, without resorting to the symbolic notation. If you are comfortable with the mathematical symbols, feel free to use it; the mathematical notation acts as a shorthand to quickly state a hypothesis and define the model used. As you read research articles or take other courses, you will see statistical hypotheses stated in many ways, so it is good to understand that there are many ways to express the same thing.  "
},
{
  "id": "section-ch4-inference-intro-HT-6-2",
  "level": "2",
  "url": "section-ch4-inference-intro-HT.html#section-ch4-inference-intro-HT-6-2",
  "type": "Exercise",
  "number": "4.1.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch4-null-model-sim-eval",
  "level": "1",
  "url": "section-ch4-null-model-sim-eval.html",
  "type": "Section",
  "number": "4.2",
  "title": "Model - Simulate - Evaluate",
  "body": " Model - Simulate - Evaluate   One thing that makes statistical inference difficult, especially hypothesis testing, is that it violates our intuitions about how hypothesis testing should work. Let's look at an example to see this.   Police Body Cameras  There is great interest in the use of body-worn cameras by police officers, which are thought to reduce the use of force and improve officer behavior. However, in order to establish this we need experimental evidence, and it has become increasingly common for governments to use randomized controlled trials to test such ideas. A randomized controlled trial of the effectiveness of body-worn cameras was performed by the Washington, DC government and DC Metropolitan Police Department in 2015\/2016. Officers were randomly assigned to wear a body-worn camera or not, and their behavior was then tracked over time to determine whether the cameras resulted in less use of force and fewer civilian complaints about officer behavior.  Let's say we want to specifically test the hypothesis of whether the use of force is decreased by the wearing of cameras. The randomized controlled trial provides us with the data to test the hypothesis - namely, the rates of use of force by officers assigned to either the camera or control groups. Before we go further, let's ask how you think the statistical analysis might work?  You probably said, \"the next step is to look at the data and determine whether they provide convincing evidence for or against this hypothesis.\" It turns out that this is not how null hypothesis testing works! Instead, we first take our hypothesis of interest (i.e. that body-worn cameras reduce use of force), and flip it on its head, creating a null hypothesis. In this case, the null hypothesis would be that cameras do not reduce use of force. Importantly, we then assume that the null hypothesis is true. We then look at the data, and determine how likely the data would be if the null hypothesis really were true. If the the data are sufficiently unlikely under the null hypothesis, then we can reject the null in favor of the alternative hypothesis, which is our hypothesis of interest. If there is not sufficient evidence to reject the null, then we simply conclude that we could not reject it, which is, understandably, not a very satisfying ending to our hypothesis test. Note that We're not concluding that the null hypothesis is true, only that we failed to prove that it wasn't true, which is an important distinction.   It helps to think of null hypothesis statistical testing in the context of a criminal trial. The legal principle of \"innocent until proven guilty\" maps perfectly to statistical decision-making, where the goal is to evaluate if there is enough evidence to reject an initial assumption. We will revisit this analogy later. For now, just keep in mind that understanding some of the concepts will be challenging at first, because they are so counter-intuitive. But stick with it! Ask questions. It's important for you to have a deep understanding of how hypothesis testing works.    Evaluating Your Hypotheses  You created statistical hypotheses that you want to test. The process we will use for evaluating those hypotheses is:   Create a model that conforms to the null hypothesis. We will call this the \"null model.\"  Use the selected model to generate many, many sets of data (Monte Carlo simulation). The results you collect and pool together from these simulations will give a picture of the variation you would expect if the null hypothesis is true.  Evaluate whether the results observed in the actual data (not the simulated data) are compatible or not with the expected results produced from the null model. This acts as evidence against the null hypothesis and in support of the alternative hypothesis.   To help you remember this process, you can again use the more simplistic mnemonic: Model - Simulate - Evaluate.  This may sound like a straight-forward process, but in practice it can actually be quite complex, especially as you are reading research articles and trying to interpret the findings. First off, the model that is selected is often not provided, nor described, explicitly within most research articles. It is often left to the reader to figure out what the assumed model was. At first, this may be quite difficult, but like most tasks, as you gain experience in this course and as you read more research, you find that there are a common set of models that are typically used by researchers.   [Null] Model  The model that you use in the Monte Carlo simulation is directly related to the null hypothesis. Recall the coin flip example: You flipped a coin 15 times, and it had produced heads in 11 of those flips, which made you want to test whether the coin was fair. We set up the null hypothesis:   How can we create a model based on this null hypothesis? Or in other words, how can we model the process of flipping a fair coin (probability of heads is 0.50) 15 times? Note that by having the model flip 15 times, it will mimic our sample observed data in which you flipped the coin 15 times.  We could find a coin that we know is fair and physically flip it 15 times. Then record the number of times that the coin landed on heads. This would be one simulation. Try it out! How many heads did you get? Perform a few more simulations. How many heads did you get in each of the 15 coin flips? Did you get the same number each time? Are these few simulations enough to determine whether the original coin was fair? No! We need to do many more simulations to determine how many heads we could expect in 15 coin flips when using a fair coin.    Simulate  Let's say that you have manually performed 5 simulations. That's already 75 coin flips. We need to perform at least 100 simulations, and preferably a lot more than that! So, let's use an online applet to help us out. The video in shows a coin flipping applet being used to perform multiple simulations of our null model. You can see that the \"Probability of heads\" is already set to 0.50. We change the \"Number of tosses,\" i.e. number of coin flips, to be 15. Then we click \"Draw Samples\" to perform the first simulation. You can see the applet flipping a coin 15 times and keeping track of the results of each flip. The first simulation results in a total of 9 heads. The applet stores this summary result on the plot the coins, which is animated as a little block falling down from the coins and landing right above the number 9. We click \"Draw Samples\" two more times to perform the second and third simulations, which results in 10 heads and then 6 heads, respectively. Note that the graph now has little blocks above the numbers 9, 10, and 6. We can speed this process up by having the applet perform multiple simulations at once. In the video, you see \"Number of repetitions\" is changed to 10. This tells the applet to repeat the simulation 10 times in a row. Once \"Draw Samples\" is clicked, ten blocks appear on the graph, each showing the outcome of a difference simulation. We perform 10 simulations at once a couple more times, and then increase the \"Number of repetitions\" to 100.    Fair Coin Model Simulation   The video stops after 133 simulations, but we continued this process until we reached 1,000 simulations total. The dot plot shown in displays the summary results for all 1,000 simulations. Note that the dots are so close together that they look like bars instead. Looking at this graph, what do we now know about fair coins? How many heads should we expect to see in 15 flips with a fair coin? Should we expect the number of heads and tails to always be about the same?  Note that the dot plot shown in can be called the \"Null Distribution,\" because it shows us what the the sampling distribution would look like if the null hypothesis were true.    Graph of the Fair Coin Simulation Results (Null Distribution)     Evaluate  This is the step where null hypothesis statistical testing really violates our intuition. Rather than determining the likelihood that the null hypothesis is true given the observed data, we instead determine the likelihood, under the null hypothesis, of observing our actual data — because we started out by assuming that the null hypothesis is true! To do this, we need to know the expected sampling distribution for the statistic under the null hypothesis, so that we can ask how likely the actual observed result would be under that distribution. To evaluate the null hypothesis, we plot the summary measures from our 1,000 simulations. This allows us to understand the sampling variation we expect if the null hypothesis is true. We can then use this plot to make a statement about which summary values we expect to see because of this sampling variation. In our example that might be the following:  If the null hypothesis is true (and the coin is fair), we expect to see between 4 and 11 heads occur during 15 coin flips.  We learned through our simulation analysis that the most likely outcome is to obtain between 6 and 9 heads when flipping a fair coin 15 times. We can see that 5 or 10 heads are also likely outcomes. Getting 4 or 11 heads, while less likely, would still be consistent with the coin being fair.  Now what did we actually observe? The coin in question, when you flipped it 15 times, you obtained 11 heads. We now know that this result is consistent with what we would expect from a fair coin. Therefore, we do not have strong evidence against our null hypothesis and must conclude that the coin could be fair. Have we proven that the coin is fair? No! We just don't have enough evidence to support that the probability of heads is more than 50%.  You might be wondering, \"What would be enough evidence?\" This is one of the most controversial questions in statistics, in part because it requires a subjective judgment - there is no “correct” answer. For example, maybe you disagree with your authors and feel that 11 heads is enough evidence to say the coin is not fair. Would you be wrong? No. In the next chapter, you will learn the conventions that statisticians use to make a decision when evaluating the hypotheses. A convention is a widely accepted rule or practice, and we will stick with them so that we are all on the same page while learning.     Another example  This is a higher proportion of heads than we expect if the coin were fair. Because our observed result of 64% heads was more extreme than what we expect if the null hypothesis is true, it acts as evidence against the null hypothesis. Because of this we would reject the null hypothesis that the coin is fair and conclude that the coin is indeed producing a higher percentage of heads than it should even after we account for the sampling variation.   Rossman\/Chance One Proportion Applet      Conclusion  Revisit Criminal Trial Analogy - IMS 11.3.1 and extra AI stuff - see remix notes.    Practice Problems    First Problem    "
},
{
  "id": "section-ch4-null-model-sim-eval-2-2",
  "level": "2",
  "url": "section-ch4-null-model-sim-eval.html#section-ch4-null-model-sim-eval-2-2",
  "type": "Example",
  "number": "4.2.1",
  "title": "Police Body Cameras.",
  "body": " Police Body Cameras  There is great interest in the use of body-worn cameras by police officers, which are thought to reduce the use of force and improve officer behavior. However, in order to establish this we need experimental evidence, and it has become increasingly common for governments to use randomized controlled trials to test such ideas. A randomized controlled trial of the effectiveness of body-worn cameras was performed by the Washington, DC government and DC Metropolitan Police Department in 2015\/2016. Officers were randomly assigned to wear a body-worn camera or not, and their behavior was then tracked over time to determine whether the cameras resulted in less use of force and fewer civilian complaints about officer behavior.  Let's say we want to specifically test the hypothesis of whether the use of force is decreased by the wearing of cameras. The randomized controlled trial provides us with the data to test the hypothesis - namely, the rates of use of force by officers assigned to either the camera or control groups. Before we go further, let's ask how you think the statistical analysis might work?  You probably said, \"the next step is to look at the data and determine whether they provide convincing evidence for or against this hypothesis.\" It turns out that this is not how null hypothesis testing works! Instead, we first take our hypothesis of interest (i.e. that body-worn cameras reduce use of force), and flip it on its head, creating a null hypothesis. In this case, the null hypothesis would be that cameras do not reduce use of force. Importantly, we then assume that the null hypothesis is true. We then look at the data, and determine how likely the data would be if the null hypothesis really were true. If the the data are sufficiently unlikely under the null hypothesis, then we can reject the null in favor of the alternative hypothesis, which is our hypothesis of interest. If there is not sufficient evidence to reject the null, then we simply conclude that we could not reject it, which is, understandably, not a very satisfying ending to our hypothesis test. Note that We're not concluding that the null hypothesis is true, only that we failed to prove that it wasn't true, which is an important distinction.  "
},
{
  "id": "coin-flip-Sim-vid",
  "level": "2",
  "url": "section-ch4-null-model-sim-eval.html#coin-flip-Sim-vid",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": "  Fair Coin Model Simulation  "
},
{
  "id": "coin-flip-Sim-graph",
  "level": "2",
  "url": "section-ch4-null-model-sim-eval.html#coin-flip-Sim-graph",
  "type": "Figure",
  "number": "4.2.3",
  "title": "",
  "body": "  Graph of the Fair Coin Simulation Results (Null Distribution)  "
},
{
  "id": "subsec-name-3",
  "level": "2",
  "url": "section-ch4-null-model-sim-eval.html#subsec-name-3",
  "type": "Figure",
  "number": "4.2.4",
  "title": "",
  "body": " Rossman\/Chance One Proportion Applet   "
},
{
  "id": "section-ch4-null-model-sim-eval-6-2",
  "level": "2",
  "url": "section-ch4-null-model-sim-eval.html#section-ch4-null-model-sim-eval-6-2",
  "type": "Exercise",
  "number": "4.2.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch4-strength-of-evidence",
  "level": "1",
  "url": "section-ch4-strength-of-evidence.html",
  "type": "Section",
  "number": "4.3",
  "title": "Strength of Evidence",
  "body": " Strength of Evidence   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch4-strength-of-evidence-6-2",
  "level": "2",
  "url": "section-ch4-strength-of-evidence.html#section-ch4-strength-of-evidence-6-2",
  "type": "Exercise",
  "number": "4.3.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch5-quantify-evidence-Z",
  "level": "1",
  "url": "section-ch5-quantify-evidence-Z.html",
  "type": "Section",
  "number": "5.1",
  "title": "Standardized Statistic",
  "body": " Standardized Statistic   We are using the Model - Simulate - Evaluate process for evaluating statistical hypotheses. So far, at the Evaluate step, we have been visually inspecting graphs that contain our simulation results to determine whether we have evidence against the null hypothesis. Sometimes this has been easy - like when our actual observed results are obviously unlikely to occur, e.g., .........pick an example........  When the decision is less straightforward, e.g. .........pick an example......., then it would be nice to have a more formal measure of the strength or evidence and some rules or conventions in place to help us make the decision. In this section you will learn exactly that - two numerical measures of the strength of evidence and how they are used to make a decision about the null hypothesis (reject\/do not reject).    Standardized Value of the Statistic  The null distributions you have seen so far have all had a similar shape - roughly symmetric and bell-shaped. The values in the center, where the distribution is taller, are the values we would most expect to see if the null hypothesis were true. The values on the ends of the distribution (in the \"tails\") are the values that are much less likely to occur. You have seen that we only reject the null hypothesis if our actual observed (not simulated) results are unlikely to occur when the null hypothesis is true, i.e. in the tails, far from the center.  It makes sense then that our first numerical measure of the strength of evidence be a distance measure. We can compute how far our actual observed results are from the center of the null distribution, and we can set a rule for how far the observed statistic needs to be from the center to be considered extremely unlikely when the null is true.  Can you think of any issues this idea might present?  Since the null distribution is symmetric, it will be centered at its mean, which we have seen is equal to our hypothesized value of the parameter. How far the observed statistic is from the center (how different it is from the hypothesized parameter value) can therefore be computed as: observed statistic - hypothesized parameter value . However, this simple distance calculation does not tell us whether the observed statistic is in the tail of the distribution or not. To determine that part, we need to consider how much variability there is in the null distribution, i.e. how much sampling variability there is. In a narrow distribution with less variability, a distance of 5 units may be enormous and indicate that the statistic is far out in the tails. But in a wide distribution with more variability, a distance of 5 units might mean that that statistic is near the center.  Let's take our distance measure and divide it by the standard deviation of the null distribution. The resulting value is called the standardized value of the statistic. It gets this name because we are using a procedure known as \"standardizing.\" By dividing by the standard deviation, we are removing the units on our measurement and replacing them with a new unit - the number of standard deviations. This gives us a standard unit of measurement on all of our distance calculations so that they are now comparable.  Alternatively, we can call the standardized value of the statistics a \"Z-score.\" Suppose we are testing , where is the hypothesized value of our parameter of interest . Our observed statistic is a proportion, represented by , and it has standard error represented by . Recall that the standard deviation of a statistic is called a standard error. Then we can write the formula for the Z-score as:     More generally, a Z-score for an observation is defined as the number of standard deviations it falls above or below the mean.   If the observation is one standard deviation above the mean, its Z score is 1. If it is 1.5 standard deviations below the mean, then its Z score is -1.5. Observations above the mean always have positive Z scores while those below the mean have negative Z scores. If an observation is equal to the mean, then the Z score is 0.    The “Z” in Z-score comes from the fact that the standard normal distribution is often referred to as the Z-distribution. The null distribution can typically be modeled theoretically by a probability distribution known as the normal distribution. Once we standardize, the resulting Z-scores follow a normal distribution with a mean of zero and a standard deviation of 1, which is called the standard normal distribution. Here, we present a useful general rule for the likelihood of falling within 1, 2, and 3 standard deviations of the mean in a normal distribution.    The empirical rule (or 68-95-99.7 rule) states that for a normal distribution, almost all of the data will fall within three standard deviations of the mean. Specifically:   68% of the data will fall within one standard deviation of the mean.  95% of the data will fall within two standard deviations of the mean.  99.7% of the data will fall within three standard deviations of the mean.     We can actually apply the empirical rule to any distribution that is approximately symmetric and bell-shaped. The empirical rule is visualized in and .    Visualizing the Likelihood of Values Occurring in a Distribution based on their Z-score     Visualizing the Likelihood of Values Occurring in a Null Distribution based on their distance from the mean in terms of number of standard errors (i.e., based on their Z-score)   Now you can see where a data point sits with respect to the rest of the distribution based on its Z-score. We can now determine how likely or unlikely an observation is based on its Z-score. We see that only about 2.5% of values fall in the left tail and another 2.5% of values fall in right tail (where observations are more than two standard deviations from the mean or center). It is possible for an observation to fall 4, 5, or even more standard deviations from the mean. However, these occurrences are very rare! The probability of being further than 4 standard deviations from the mean is about 1-in-30,000. For 5 and 6 standard deviations, it is about 1-in-3.5 million and 1-in-1 billion, respectively.   Use of Z-Scores Outside of Hypothesis Testing  Example from Poldrak ~ compares number of violent crimes between states using Z-scores. I'm not copying it directly in, because I found a more recent data set (2024). I downloaded it from the FBI Crime Data Explorer (https:\/\/cde.ucr.cjis.gov\/LATEST\/webapp\/#)    Helper vs Hinderer  Put in this study and the video that goes with it.     The p-Value  With this next numerical measure of the strength of evidence, we will directly compute the probability of our actual observation occurring (when the null hypothesis is true), rather than estimating it based on the Z-score and the empirical rule. describes more precisely the probability that we will compute.    The p-value (p) is the probability of obtaining a statistic at least as favorable to the alternative hypothesis as our actual, observed sample statistic, if the null hypothesis were true.  The observed summary statistic that is used to compute the p-value is often called the test statistic .    There are (at least) two reasons that we need to add the \"at least as favorable\" part in the above definition. The first is that when we are talking about continuous values, the probability of any particular value is zero (it's a calculus thing). More importantly, we are trying to determine how weird our result would be if the null hypothesis were true, and any result that is more extreme will be even more weird, so we want to count all of those weirder possibilities when we compute the probability of our result under the null hypothesis.  To compute a p-value after performing a simulation analysis, you count the number of simulated summary measures that are at least as extreme as the observed summary statistic, and then you divide this number by the total number of simulations. This value is then reported as a decimal value.   The alternative hypothesis dictates the direction of the \"more extreme\" values. For example, if the alternative hypothesis is “less than”, we count the number of summary measures less than or equal to our observed summary statistic. On the other hand, if the alternative hypothesis is “greater than”, we count the number of summary measures greater than or equal to our observed summary statistic. To illustrate this, we will re-examine simulation results from previous examples.  Recall the coin flip example: You flipped a coin 15 times, and it had produced heads in 11 of those flips, which made you want to test whether the coin was fair. We set up the following statistical hypotheses, built a null model, performed a simulation analysis, and performed a visual evaluation, ultimately deciding that 11 flips was consistent with what we would expect from a fair coin. So, we were not able to reject the null hypothesis.   The null distribution obtained after 133 simulations is shown in . We will use this dot plot to demonstrate a p-value computation. Our observed statistics is 11, and since the alternative hypothesis has a greater than sign in it, we will count the number of simulations that resulted in 11 or more heads being flipped.    First 133 Simulation Results from Fair Coin Flip Model (Dot plot shown at the end of the video in )   Looking at the dotplot, we can see that 11 heads occurred 3 times (3 dots above the 11), 12 heads occurred twice (2 dots above the 12), and 13 heads occurred once (one dot above the 13). We did not observe 14 or 15 heads in this set of simulations. Therefore, 11 or more heads occurred in 6 out of 133 simulations, and our p-value is:   Note that the p-value we just computed is based on a small number of simulations and was for demonstration purposes only. To obtain an accurate p-value, we need to use a much larger number of simulations. When the p-value is computed using 1,000 simulations, we get . We will use this value moving forward. We now know that, if the null hypothesis is true and the coin is fair, there's a 5.9% chance that we would observe 11 or more heads occur during 15 coin flips. This isn't a large chance, but it's large enough (based on the conventions that are normally used to make decisions about hypothesis tests) that we can't rule out the coin being fair.   Only reject the null hypothesis if our observed summary statistic is in the most extreme 5% of the null distribution! In other words, reject when .   Again, the alternative hypothesis dictates where \"extreme\" values lie. Another way of thinking about the p-value is that it is actually indicating where in the distribution the observed summary lies. Think about the empirical rule again. Our p-value of 0.059 tells us that the observed statistic is not in the most extreme 5% of the distribution. Furthermore, it is somewhere around 1.6 standard errors from the mean. [We know that the most extreme 5% is at least 1.645 standard errors away.] And now you can more clearly see the connection between the p-value and the Z-score. further illustrates this relationship. shows us that using a Z-score cut-off value of 2 corresponds to the most extreme 2.5% of the distribution, if we are focused on just one tail.    Relationship between Z-score and p-Value     Relationship between Z-score and p-Value   Is there a way to do an \"exploration continued?\" Compute p-value for Helper vs Hinderer.  This low probability implies that it is quite unlikely that we would see a result as extreme as 0.875, or more extreme, if the null hypothesis is true. Because of this, we would reject the null hypothesis. In this example, it is pretty evident that we should reject the null hypothesis because 0.002 is quite a low probability. There's only a 0.2% chance that 14 or more infants out of 16 would choose the helper at random (i.e. if the null hypothesis were true). Therefore, 14 choosing helper is a result that is outside the range of likely values.    Conclusion  The evaluation step essentially boils down to asking whether the p-value is less than 0.05 or the Z-score is more than 1.645. If it is, that implies the observed summary is in the outer 5% of the distribution of simulated summaries and is quite unlikely if the null hypothesis is true causing us to reject the null hypothesis. If the p-value is greater than or equal to 0.05 or the Z-score is smaller than 1.645, that implies the observed summary is NOT in the outer 5% of the distribution of simulated summaries and is consistent with a summary expected under the null hypothesis, which causes us to fail to reject the null hypothesis.    Practice Problems    First Problem    "
},
{
  "id": "def-z-score",
  "level": "2",
  "url": "section-ch5-quantify-evidence-Z.html#def-z-score",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "  More generally, a Z-score for an observation is defined as the number of standard deviations it falls above or below the mean.   If the observation is one standard deviation above the mean, its Z score is 1. If it is 1.5 standard deviations below the mean, then its Z score is -1.5. Observations above the mean always have positive Z scores while those below the mean have negative Z scores. If an observation is equal to the mean, then the Z score is 0.   "
},
{
  "id": "empirical-rule-def",
  "level": "2",
  "url": "section-ch5-quantify-evidence-Z.html#empirical-rule-def",
  "type": "Definition",
  "number": "5.1.2",
  "title": "",
  "body": "  The empirical rule (or 68-95-99.7 rule) states that for a normal distribution, almost all of the data will fall within three standard deviations of the mean. Specifically:   68% of the data will fall within one standard deviation of the mean.  95% of the data will fall within two standard deviations of the mean.  99.7% of the data will fall within three standard deviations of the mean.    "
},
{
  "id": "Empirical-Rule-graph-Z",
  "level": "2",
  "url": "section-ch5-quantify-evidence-Z.html#Empirical-Rule-graph-Z",
  "type": "Figure",
  "number": "5.1.3",
  "title": "",
  "body": "  Visualizing the Likelihood of Values Occurring in a Distribution based on their Z-score  "
},
{
  "id": "Empirical-Rule-graph-null-dist",
  "level": "2",
  "url": "section-ch5-quantify-evidence-Z.html#Empirical-Rule-graph-null-dist",
  "type": "Figure",
  "number": "5.1.4",
  "title": "",
  "body": "  Visualizing the Likelihood of Values Occurring in a Null Distribution based on their distance from the mean in terms of number of standard errors (i.e., based on their Z-score)  "
},
{
  "id": "subsec-Z-score-16",
  "level": "2",
  "url": "section-ch5-quantify-evidence-Z.html#subsec-Z-score-16",
  "type": "Example",
  "number": "5.1.5",
  "title": "Use of Z-Scores Outside of Hypothesis Testing.",
  "body": " Use of Z-Scores Outside of Hypothesis Testing  Example from Poldrak ~ compares number of violent crimes between states using Z-scores. I'm not copying it directly in, because I found a more recent data set (2024). I downloaded it from the FBI Crime Data Explorer (https:\/\/cde.ucr.cjis.gov\/LATEST\/webapp\/#)  "
},
{
  "id": "subsec-Z-score-17",
  "level": "2",
  "url": "section-ch5-quantify-evidence-Z.html#subsec-Z-score-17",
  "type": "Exploration",
  "number": "5.1.1",
  "title": "Helper vs Hinderer.",
  "body": " Helper vs Hinderer  Put in this study and the video that goes with it.  "
},
{
  "id": "def-p-val",
  "level": "2",
  "url": "section-ch5-quantify-evidence-Z.html#def-p-val",
  "type": "Definition",
  "number": "5.1.6",
  "title": "",
  "body": "  The p-value (p) is the probability of obtaining a statistic at least as favorable to the alternative hypothesis as our actual, observed sample statistic, if the null hypothesis were true.  The observed summary statistic that is used to compute the p-value is often called the test statistic .   "
},
{
  "id": "coin-15-flips-video-end-dotplot",
  "level": "2",
  "url": "section-ch5-quantify-evidence-Z.html#coin-15-flips-video-end-dotplot",
  "type": "Figure",
  "number": "5.1.7",
  "title": "",
  "body": "  First 133 Simulation Results from Fair Coin Flip Model (Dot plot shown at the end of the video in )  "
},
{
  "id": "subsec-p-value-15",
  "level": "2",
  "url": "section-ch5-quantify-evidence-Z.html#subsec-p-value-15",
  "type": "Convention",
  "number": "5.1.8",
  "title": "",
  "body": " Only reject the null hypothesis if our observed summary statistic is in the most extreme 5% of the null distribution! In other words, reject when .  "
},
{
  "id": "Z-p-val-5perc-v1",
  "level": "2",
  "url": "section-ch5-quantify-evidence-Z.html#Z-p-val-5perc-v1",
  "type": "Figure",
  "number": "5.1.9",
  "title": "",
  "body": "  Relationship between Z-score and p-Value  "
},
{
  "id": "Z-p-val-5perc-v2",
  "level": "2",
  "url": "section-ch5-quantify-evidence-Z.html#Z-p-val-5perc-v2",
  "type": "Figure",
  "number": "5.1.10",
  "title": "",
  "body": "  Relationship between Z-score and p-Value  "
},
{
  "id": "section-ch5-quantify-evidence-Z-6-2",
  "level": "2",
  "url": "section-ch5-quantify-evidence-Z.html#section-ch5-quantify-evidence-Z-6-2",
  "type": "Exercise",
  "number": "5.1.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch5-quantify-evidence-pvalue",
  "level": "1",
  "url": "section-ch5-quantify-evidence-pvalue.html",
  "type": "Section",
  "number": "5.2",
  "title": "The p-Value",
  "body": " The p-Value   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch5-quantify-evidence-pvalue-6-2",
  "level": "2",
  "url": "section-ch5-quantify-evidence-pvalue.html#section-ch5-quantify-evidence-pvalue-6-2",
  "type": "Exercise",
  "number": "5.2.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch5-1v2-sided-test",
  "level": "1",
  "url": "section-ch5-1v2-sided-test.html",
  "type": "Section",
  "number": "5.3",
  "title": "Two-Sided Tests",
  "body": " Two-Sided Tests   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch5-1v2-sided-test-6-2",
  "level": "2",
  "url": "section-ch5-1v2-sided-test.html#section-ch5-1v2-sided-test-6-2",
  "type": "Exercise",
  "number": "5.3.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch5-decision-errors",
  "level": "1",
  "url": "section-ch5-decision-errors.html",
  "type": "Section",
  "number": "5.4",
  "title": "Understanding Errors",
  "body": " Understanding Errors   Text of Intro.     Statistical Discernible\/Significance versus Practical Significance  Large p-values indicate that the observed data are more compatible with the results from the null model, while small p-values indicate that the observed data are not very compatible with the results from the null model. As researchers, our goal is often to then translate this quantitative evidence into support for\/against the hypothesized null model. For example, in the Helper vs Hinderer study, we obtained a p-value of 0.002. This suggests a very low degree of compatibility between the observed data (our empirical evidence) and the null hypothesis. Because our p-value is less than 0.05, we might report the results as being \"statistically discernible\" or \"statistically significant.\"  Don't be fooled by the word “significant” in the phrase “statistically significant”. It does not mean important. All it means is that the observed summary statistic is more extreme than we would expect to see if the null hypothesis is true. “Practically significant” results, on the other hand, indicate that the difference between the observed proportion and the hypothesized one is meaningful and impactful in a real-world context. Statisticians are moving away from using the phrase “statistically significant,” because too many people get statistical significance confused with practical significance. We will follow this trend and use the phrase \"statistically discernible\" instead of \"statistically significant.\"    When the p-value is small, i.e., less than a previously set threshold (e.g. 0.05), we say the results are statistically discernible . This means the data provide such strong evidence against the null hypothesis that we reject it in favor of the alternative hypothesis.  The threshold is called the discernibility level and often represented by the Greek letter alpha ( ). The value of represents how rare an event needs to be in order for the null hypothesis to be rejected.    Historically, many fields have set . But why 0.05? Maybe we should use a bigger number, or maybe a smaller number. If you're a little puzzled, that probably means you're reading with a critical eye - good job! The value of can actually vary depending on the field or the application. Sometimes iit is a good idea to deviate from the standard. We will discuss when to choose a threshold different than 0.05 next.   Why ?  Is the p-value small enough to reject the null hypothesis?  Historically,the most common answer to this question has been that we should reject the null hypothesis if the p-value is less than 0.05. This comes from the famous statistician Ronald A. Fisher. In his book Statistical Methods for Research Workers (1925), in regards to the null hypothesis, he wrote:   “If p is between 0.10 and 0.90 there is certainly no reason to suspect the hypothesis tested. If it is below 0.02 it is strongly indicated that the hypothesis fails to account for the whole of the facts. We shall not often be astray if we draw a conventional line at 0.05 ... it is convenient to draw the line at about the level at which we can say: Either there is something in the treatment, or a coincidence has occurred such as does not occur more than once in twenty trials”   Fisher never intended to be a fixed rule, and he says so in a later 1956 publication. Instead, it is likely that became a ritual due to the reliance upon probability tables that were used before computing made it easy to compute p values. All tables had an entry for 0.05, making it easy to determine whether one's observed statistic exceeded the value needed to reach that level of significance.   Because they are so ubiquitous in the research literature for any field, and because they are often misinterpreted (even by PhDs, researchers, and teachers), it is important to be aware of what a p-value tells you, and more importantly, what it does not tell you. To this end, the American Statistical Association released a Statement on p-Values in which they listed six principles:   p-values indicate how incompatible data are with a specified statistical model.  p-values do not measure the probability that the studied hypothesis is true, nor the probability that the data were produced by random chance alone.  Scientific conclusions and business or policy decisions should not be based only on whether a p-value passes a specific threshold.  Proper inference requires full reporting and transparency.  A p-value does not measure the size of an effect or the importance of a result.  By itself, a p-value does not provide a good measure of evidence regarding a model or hypothesis.      Decision Errors  How do you choose the discernibility level?  Using data to make inferential decisions about larger populations is not a perfect process. A small p-value typically leads the researcher to a decision to reject the null hypothesis. Sometimes, however, data can produce a small p-value when the null hypothesis is actually true and the data are just inherently variable. Here we describe the errors which can arise in hypothesis testing, how to define and quantify the different errors, and suggestions for mitigating errors if possible.  Hypothesis tests are not flawless. Just think of the court system: innocent people are sometimes wrongly convicted and the guilty sometimes walk free. Similarly, data can point to the wrong conclusion. However, what distinguishes statistical hypothesis tests from a court system is that our framework allows us to quantify and control how often the data lead us to the incorrect conclusion. Recall, in a hypothesis test, there are two competing hypotheses: the null and the alternative. We make a statement about which one might be true, but we might choose incorrectly. There are four possible scenarios in a hypothesis test, which are summarized in .   Four Scenarios for Hypothesis Testing     Test Decision    Truth  Reject  Do NOT Reject    Null Hypothesis  Type I Error  Good Decision    Alternative Hypothesis  Good Decision  Type II Error      A Type I error is rejecting the null hypothesis when is actually true.  A Type II error is failing to reject the null hypothesis when the alternative is actually true.   Since we rejected the null hypothesis in the Helper vs Hinderer study, it is possible that we made a Type I error. Consider the .... study where we concluded ..... What would a Type I error represent in this context?  In a US court, the defendant is either innocent or guilty. What does a Type I error represent in this context? What does a Type II error represent? If the court makes a Type I error, this means the defendant is innocent, but wrongly convicted. A Type II error means the court failed to convict the person when they were in fact guilty.  How could we reduce the Type I error rate in US courts? What influence would this have on the Type II error rate? To lower the Type I error rate, we might raise our standard for conviction from “beyond a reasonable doubt” to “beyond a conceivable doubt” so fewer people would be wrongly convicted. However, this would also make it more difficult to convict the people who are actually guilty, so we would make more Type II errors.  How could we reduce the Type II error rate in US courts? What influence would this have on the Type I error rate? To lower the Type II error rate, we want to convict more guilty people. We could lower the standards for conviction from “beyond a reasonable doubt” to “beyond a little doubt”. Lowering the bar for guilt will also result in more wrongful convictions, raising the Type I error rate.  The above provides an important lesson: if we reduce how often we make one type of error, we generally make more of the other type.  The discernibility level provides the cutoff for the p-value which will lead to a decision of “reject the null hypothesis.” Choosing a discernibility level for a test is important in many contexts, and the traditional level is 0.05. However, it is sometimes helpful to adjust the discernibility level based on the application. We may select a level that is smaller or larger than 0.05 depending on the consequences of any conclusions reached from the test. If making a Type I error is dangerous or especially costly, we should choose a small discernibility level (e.g., 0.01 or even 0.001). If we want to be very cautious about rejecting the null hypothesis, we demand very strong evidence favoring the alternative before we would reject. If a Type II error is relatively more dangerous or much more costly than a Type I error, then we should choose a higher discernibility level (e.g., 0.10). Here we want to be cautious about failing to reject when the null is actually false. The discernibility level selected for a test should reflect the real-world consequences associated with making a Type I or Type II error.    Conclusion  How do you know if you've made a decision error? You can't know.....  How do you know if your results are practically significant? You will learn more inference methods that will allow you to decide whether results are meaningful and impactful in a real-world context.....  Two other things that impact practical significance of findings are the ability to make: (1) generalizations, and (2) cause-and-effect inferences. These abilities are not governed by the p-value, but by the design of the study Don't get too excited about small p-values. Ask whether they are substantively meaningful, whether the results generalize, and whether a causal inference can be made. Ron Wassertein, former president of the American Statistical Association reminds us about not getting overly-excited about small p-vlues when he stated: Small p-values are like a right-swipe in Tinder. It means you have an interest. It doesn't mean you're ready to book the wedding venue.   Poldrak 9.3.7 can be turned into a series of comprehension check questions.    Practice Problems    First Problem    "
},
{
  "id": "def-",
  "level": "2",
  "url": "section-ch5-decision-errors.html#def-",
  "type": "Definition",
  "number": "5.4.1",
  "title": "",
  "body": "  When the p-value is small, i.e., less than a previously set threshold (e.g. 0.05), we say the results are statistically discernible . This means the data provide such strong evidence against the null hypothesis that we reject it in favor of the alternative hypothesis.  The threshold is called the discernibility level and often represented by the Greek letter alpha ( ). The value of represents how rare an event needs to be in order for the null hypothesis to be rejected.   "
},
{
  "id": "decision-errors-tbl",
  "level": "2",
  "url": "section-ch5-decision-errors.html#decision-errors-tbl",
  "type": "Table",
  "number": "5.4.2",
  "title": "Four Scenarios for Hypothesis Testing",
  "body": " Four Scenarios for Hypothesis Testing     Test Decision    Truth  Reject  Do NOT Reject    Null Hypothesis  Type I Error  Good Decision    Alternative Hypothesis  Good Decision  Type II Error    "
},
{
  "id": "section-ch5-decision-errors-4-6",
  "level": "2",
  "url": "section-ch5-decision-errors.html#section-ch5-decision-errors-4-6",
  "type": "Definition",
  "number": "5.4.3",
  "title": "",
  "body": " A Type I error is rejecting the null hypothesis when is actually true.  A Type II error is failing to reject the null hypothesis when the alternative is actually true.  "
},
{
  "id": "section-ch5-decision-errors-6-2",
  "level": "2",
  "url": "section-ch5-decision-errors.html#section-ch5-decision-errors-6-2",
  "type": "Exercise",
  "number": "5.4.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch6-generalize",
  "level": "1",
  "url": "section-ch6-generalize.html",
  "type": "Section",
  "number": "6.1",
  "title": "Considerations for Generalization",
  "body": " Considerations for Generalization   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch6-generalize-6-2",
  "level": "2",
  "url": "section-ch6-generalize.html#section-ch6-generalize-6-2",
  "type": "Exercise",
  "number": "6.1.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch6-sampling-method",
  "level": "1",
  "url": "section-ch6-sampling-method.html",
  "type": "Section",
  "number": "6.2",
  "title": "Sampling Methods",
  "body": " Sampling Methods   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch6-sampling-method-6-2",
  "level": "2",
  "url": "section-ch6-sampling-method.html#section-ch6-sampling-method-6-2",
  "type": "Exercise",
  "number": "6.2.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch7-bootstrap",
  "level": "1",
  "url": "section-ch7-bootstrap.html",
  "type": "Section",
  "number": "7.1",
  "title": "The Bootstrap Method",
  "body": " The Bootstrap Method   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch7-bootstrap-6-2",
  "level": "2",
  "url": "section-ch7-bootstrap.html#section-ch7-bootstrap-6-2",
  "type": "Exercise",
  "number": "7.1.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch7-construct-interpret-ci-1m1p",
  "level": "1",
  "url": "section-ch7-construct-interpret-ci-1m1p.html",
  "type": "Section",
  "number": "7.2",
  "title": "Confidence Intervals",
  "body": " Confidence Intervals   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch7-construct-interpret-ci-1m1p-6-2",
  "level": "2",
  "url": "section-ch7-construct-interpret-ci-1m1p.html#section-ch7-construct-interpret-ci-1m1p-6-2",
  "type": "Exercise",
  "number": "7.2.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch7-deeper-interpret-ci",
  "level": "1",
  "url": "section-ch7-deeper-interpret-ci.html",
  "type": "Section",
  "number": "7.3",
  "title": "Interpretation",
  "body": " Interpretation   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch7-deeper-interpret-ci-6-2",
  "level": "2",
  "url": "section-ch7-deeper-interpret-ci.html#section-ch7-deeper-interpret-ci-6-2",
  "type": "Exercise",
  "number": "7.3.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch8-summarize-one-quant",
  "level": "1",
  "url": "section-ch8-summarize-one-quant.html",
  "type": "Section",
  "number": "8.1",
  "title": "Summarizing one Quantitative Variable",
  "body": " Summarizing one Quantitative Variable   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch8-summarize-one-quant-6-2",
  "level": "2",
  "url": "section-ch8-summarize-one-quant.html#section-ch8-summarize-one-quant-6-2",
  "type": "Exercise",
  "number": "8.1.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch8-ht-bootstrap-1m",
  "level": "1",
  "url": "section-ch8-ht-bootstrap-1m.html",
  "type": "Section",
  "number": "8.2",
  "title": "Bootstrap Test",
  "body": " Bootstrap Test   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch8-ht-bootstrap-1m-6-2",
  "level": "2",
  "url": "section-ch8-ht-bootstrap-1m.html#section-ch8-ht-bootstrap-1m-6-2",
  "type": "Exercise",
  "number": "8.2.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch8-test-by-ci",
  "level": "1",
  "url": "section-ch8-test-by-ci.html",
  "type": "Section",
  "number": "8.3",
  "title": "Decisions using Confidence Intervals",
  "body": " Decisions using Confidence Intervals   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch8-test-by-ci-6-2",
  "level": "2",
  "url": "section-ch8-test-by-ci.html#section-ch8-test-by-ci-6-2",
  "type": "Exercise",
  "number": "8.3.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch9-theory-intro",
  "level": "1",
  "url": "section-ch9-theory-intro.html",
  "type": "Section",
  "number": "9.1",
  "title": "Theoretical Modeling with Probability Distributions",
  "body": " Theoretical Modeling with Probability Distributions   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch9-theory-intro-6-2",
  "level": "2",
  "url": "section-ch9-theory-intro.html#section-ch9-theory-intro-6-2",
  "type": "Exercise",
  "number": "9.1.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch9-CLT-one-prop",
  "level": "1",
  "url": "section-ch9-CLT-one-prop.html",
  "type": "Section",
  "number": "9.2",
  "title": "Inference for One Proportion",
  "body": " Inference for One Proportion   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch9-CLT-one-prop-6-2",
  "level": "2",
  "url": "section-ch9-CLT-one-prop.html#section-ch9-CLT-one-prop-6-2",
  "type": "Exercise",
  "number": "9.2.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch9-CLT-one-mean",
  "level": "1",
  "url": "section-ch9-CLT-one-mean.html",
  "type": "Section",
  "number": "9.3",
  "title": "Inference for One Mean",
  "body": " Inference for One Mean   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch9-CLT-one-mean-6-2",
  "level": "2",
  "url": "section-ch9-CLT-one-mean.html#section-ch9-CLT-one-mean-6-2",
  "type": "Exercise",
  "number": "9.3.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch10-summarize-2var",
  "level": "1",
  "url": "section-ch10-summarize-2var.html",
  "type": "Section",
  "number": "10.1",
  "title": "Summarizing Two Variables",
  "body": " Summarizing Two Variables   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch10-summarize-2var-6-2",
  "level": "2",
  "url": "section-ch10-summarize-2var.html#section-ch10-summarize-2var-6-2",
  "type": "Exercise",
  "number": "10.1.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch10-linear-assoc",
  "level": "1",
  "url": "section-ch10-linear-assoc.html",
  "type": "Section",
  "number": "10.2",
  "title": "Modeling a Linear Association",
  "body": " Modeling a Linear Association   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch10-linear-assoc-6-2",
  "level": "2",
  "url": "section-ch10-linear-assoc.html#section-ch10-linear-assoc-6-2",
  "type": "Exercise",
  "number": "10.2.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch10-study-design",
  "level": "1",
  "url": "section-ch10-study-design.html",
  "type": "Section",
  "number": "10.3",
  "title": "Study Design and Causal Conclusions",
  "body": " Study Design and Causal Conclusions   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch10-study-design-6-2",
  "level": "2",
  "url": "section-ch10-study-design.html#section-ch10-study-design-6-2",
  "type": "Exercise",
  "number": "10.3.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch11-ht-randomization-2m",
  "level": "1",
  "url": "section-ch11-ht-randomization-2m.html",
  "type": "Section",
  "number": "11.1",
  "title": "Randomization Test to Compare Two Means",
  "body": " Randomization Test to Compare Two Means   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch11-ht-randomization-2m-6-2",
  "level": "2",
  "url": "section-ch11-ht-randomization-2m.html#section-ch11-ht-randomization-2m-6-2",
  "type": "Exercise",
  "number": "11.1.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch11-anova",
  "level": "1",
  "url": "section-ch11-anova.html",
  "type": "Section",
  "number": "11.2",
  "title": "ANOVA for Comparing Multiple Means",
  "body": " ANOVA for Comparing Multiple Means   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch11-anova-6-2",
  "level": "2",
  "url": "section-ch11-anova.html#section-ch11-anova-6-2",
  "type": "Exercise",
  "number": "11.2.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch11-paired-data",
  "level": "1",
  "url": "section-ch11-paired-data.html",
  "type": "Section",
  "number": "11.3",
  "title": "Special Case - Paired Data",
  "body": " Special Case - Paired Data   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch11-paired-data-6-2",
  "level": "2",
  "url": "section-ch11-paired-data.html#section-ch11-paired-data-6-2",
  "type": "Exercise",
  "number": "11.3.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch12-ht-randomization-2p",
  "level": "1",
  "url": "section-ch12-ht-randomization-2p.html",
  "type": "Section",
  "number": "12.1",
  "title": "Randomization Test to Compare Two Proportions",
  "body": " Randomization Test to Compare Two Proportions   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch12-ht-randomization-2p-6-2",
  "level": "2",
  "url": "section-ch12-ht-randomization-2p.html#section-ch12-ht-randomization-2p-6-2",
  "type": "Exercise",
  "number": "12.1.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch12-chi-square",
  "level": "1",
  "url": "section-ch12-chi-square.html",
  "type": "Section",
  "number": "12.2",
  "title": "Chi-Square for Comparing Multiple Proportions",
  "body": " Chi-Square for Comparing Multiple Proportions   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch12-chi-square-6-2",
  "level": "2",
  "url": "section-ch12-chi-square.html#section-ch12-chi-square-6-2",
  "type": "Exercise",
  "number": "12.2.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch13-ci-compare-2mean",
  "level": "1",
  "url": "section-ch13-ci-compare-2mean.html",
  "type": "Section",
  "number": "13.1",
  "title": "Difference between Two Population Means",
  "body": " Difference between Two Population Means   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch13-ci-compare-2mean-6-2",
  "level": "2",
  "url": "section-ch13-ci-compare-2mean.html#section-ch13-ci-compare-2mean-6-2",
  "type": "Exercise",
  "number": "13.1.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch13-ci-compare-2prop",
  "level": "1",
  "url": "section-ch13-ci-compare-2prop.html",
  "type": "Section",
  "number": "13.2",
  "title": "Difference between Two Population Proportions",
  "body": " Difference between Two Population Proportions   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch13-ci-compare-2prop-6-2",
  "level": "2",
  "url": "section-ch13-ci-compare-2prop.html#section-ch13-ci-compare-2prop-6-2",
  "type": "Exercise",
  "number": "13.2.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch14-regression-model",
  "level": "1",
  "url": "section-ch14-regression-model.html",
  "type": "Section",
  "number": "14.1",
  "title": "Simple Linear Regression",
  "body": " Simple Linear Regression   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch14-regression-model-6-2",
  "level": "2",
  "url": "section-ch14-regression-model.html#section-ch14-regression-model-6-2",
  "type": "Exercise",
  "number": "14.1.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch14-regression-inference",
  "level": "1",
  "url": "section-ch14-regression-inference.html",
  "type": "Section",
  "number": "14.2",
  "title": "Hypothesis Test and Confidence Interval for Slope",
  "body": " Hypothesis Test and Confidence Interval for Slope   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch14-regression-inference-6-2",
  "level": "2",
  "url": "section-ch14-regression-inference.html#section-ch14-regression-inference-6-2",
  "type": "Exercise",
  "number": "14.2.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch14-mult-regression-intro",
  "level": "1",
  "url": "section-ch14-mult-regression-intro.html",
  "type": "Section",
  "number": "14.3",
  "title": "Introduction to Multiple Regression",
  "body": " Introduction to Multiple Regression   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch14-mult-regression-intro-6-2",
  "level": "2",
  "url": "section-ch14-mult-regression-intro.html#section-ch14-mult-regression-intro-6-2",
  "type": "Exercise",
  "number": "14.3.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch14-more-multivar-thinking",
  "level": "1",
  "url": "section-ch14-more-multivar-thinking.html",
  "type": "Section",
  "number": "14.4",
  "title": "More Multivariable Thinking",
  "body": " More Multivariable Thinking   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion   "
},
{
  "id": "section-ch15-CLT-two-prop",
  "level": "1",
  "url": "section-ch15-CLT-two-prop.html",
  "type": "Section",
  "number": "15.1",
  "title": "Inference for Comparing Proportions",
  "body": " Inference for Comparing Proportions   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch15-CLT-two-prop-6-2",
  "level": "2",
  "url": "section-ch15-CLT-two-prop.html#section-ch15-CLT-two-prop-6-2",
  "type": "Exercise",
  "number": "15.1.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch15-CLT-two-means",
  "level": "1",
  "url": "section-ch15-CLT-two-means.html",
  "type": "Section",
  "number": "15.2",
  "title": "Inference for Comparing Means",
  "body": " Inference for Comparing Means   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch15-CLT-two-means-6-2",
  "level": "2",
  "url": "section-ch15-CLT-two-means.html#section-ch15-CLT-two-means-6-2",
  "type": "Exercise",
  "number": "15.2.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch15-CLT-regression-slope",
  "level": "1",
  "url": "section-ch15-CLT-regression-slope.html",
  "type": "Section",
  "number": "15.3",
  "title": "Inference for Regression",
  "body": " Inference for Regression   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion    Practice Problems    First Problem    "
},
{
  "id": "section-ch15-CLT-regression-slope-6-2",
  "level": "2",
  "url": "section-ch15-CLT-regression-slope.html#section-ch15-CLT-regression-slope-6-2",
  "type": "Exercise",
  "number": "15.3.3.1",
  "title": "First Problem.",
  "body": " First Problem  "
},
{
  "id": "section-ch18-name",
  "level": "1",
  "url": "section-ch18-name.html",
  "type": "Section",
  "number": "16.1",
  "title": "Section Title",
  "body": " Section Title   Text of Intro.     Title  Text of SubSection.     Title  Text of SubSection.    Conclusion  Text of Conclusion   "
},
{
  "id": "backmatter-references",
  "level": "1",
  "url": "backmatter-references.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " References    Mednick, S., Cai, D., Kanady, J., and Drummond, S.  Comparing the benefits of Caffeine, Naps and Placebo on Verbal, Motor and Perceptual Memory  Behav Brain Res.  2008  193  1  79-86    Weber, B., John, M., Mateas, M., and Jhala, A.  Modeling Player Retention in Madden NFL 11  Proceedings of the Twenty-Third Innovative Applications of Artificial Intelligence Conference  2011  25  2  1701-1706     Kaplan, D. Lesson in Statistical Thinking , March 2024, https:\/\/dtkaplan.github.io\/Lessons-in-statistical-thinking\/  Gilbert Strang, The Fundamental Theorem of Linear Algebra , The American Mathematical Monthly November 1993, 100  9 , 848 855.  Example.    "
},
{
  "id": "biblio-strang-article-tres-6",
  "level": "2",
  "url": "backmatter-references.html#biblio-strang-article-tres-6",
  "type": "Note",
  "number": "4.1",
  "title": "",
  "body": " Example.  "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
