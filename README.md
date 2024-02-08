# Assignment2
Our Project is a website on **exploring** the courses in Ngee Ann Poly and letting _potential students_ or their _parents_ to navigate through the website to get to know more about NP. 

## Design Process
Our **AIM** is to let _Secondary School students_ explore more about NP's Full Time Courses. Through attending some small Quizes <sup>under</sup> the Xplore pages or through the button at the Full Time Courses page, students can get to know more interesting facts about NP.

As a student who was previously finding out about suitable courses in Ngee Ann Poly ourselves, and with our estimated marks before the results were out, we normally tend to worry whether our results would meet the requirements under the courses, however in NP's Official Website, we ~could not~ find where the ELR2B2 range is. It may be because we didn't look through the website that thoroughly, or we maybe just thought that the mark range was going to be written under the specific course page. **BUT..** since we find it difficult to see, we came out with a plan to directly put the ELR2B2 mark range directly at the top of the webpage navigation bar easy for out target audience to view the past year range. 

- We made references to Ngee Ann Poly's Official Website as our website is based on creating a small branch of NP web to allow potential students get to know more about NP.
- all the images in index.html is taken ourselves at school.
- Github page link: https://github.com/nanditha1707/Assignment2/deployments/github-pages
- video link:

## Features
#### Home Page (index.html): 
- Some pictures of Ngee Ann Poly to attract our targetted audience. Some picture links under the picture to link to other pages.
- Slideshow of ngee ann poly pictures 
- **Dropdown link** from the **Schools & Courses navigation tab** to link to the Full Time courses page and external links (in every page) and school brochures.

#### Xplore Page (Xplore.html)
- 2 games for students to play (game1.html and game2.html)
- (game1.html) 5 questions to allow potential students try so that they could get to know more about Ngee Ann Poly through anwering the questions (A trivia quiz that users can do about Ngee Ann Poly).
- (game2.html) matching game to test students memory: After they match the name of school correctly, the facts about the school would pop out.
- when pressed on the button for "Know NP well?, they have to enter their details in before they can go to the game1.html. The details they enter would be stored inside the restdb database.
  
#### Schools Page (ba/de/soe/fms/hs/hms/ict/lsct.html)
- popup function in the respective academic course page.
- At the bottom of the Full Time Courses page (FullTimeCourses.html) has a button link to send the users to the Xplore page to explore more about Np facts.
  
## Technologies used
+ Lottie Animation : https://lottiefiles.com/
+ restdb : https://restdb.io/
+ NgeeAnnPoly Website: https ://www.np.edu.sg/home
+ google fonts : https://fonts.google.com/
  
## Testing
1. Game Form: (API implemented)
  i. Go to "Xplore" page
  ii. Click on the "Know NP well?" button
  iii. Try to submit the form with all inputs valid and verify that a success message appears.
  iiii. Else, they cannot enter the (game1.html)

2. Subscribe Form:
  i. Go to any webpage
  ii. Click on the "Subscribe Now" button
  iii. submit the form with all inputs valid

- index.html: Our Project has a slideshow of three pictures that would change one by one in a loop every 5 seconds. Below the slideshow are three boxes side by side that contains the "Our Courses","Industry & Partnership" and "Student Life" which our Courses links to "SchNCourses.html" and the rest would like to external pages in Ngee Ann Poly Official Website. Below the three boxes would be a footer in black in **Laptop view**. In **Mobile view**, the slideshow container shrinks but remains at its same position but for the three boxes, they are stacked on top of one another and below that would still be the same footer.
- aboutnp.html: There is a paragraph of Our Story taken from NP Official Website, three boxes that contains "Our Vision","Our Mission","Our Values".Below that are two incorporate video about NP side by side with a footer below in **Laptop view**. In **Mobile view**, the story frame compress together and the three boxes and two videos stacks on top of each other until the footer.
- FullTimeCourses.html, ELR2B2.htl and dropdown link from SchNCourses tab: same **Laptop view** and **Mobile view**.
- contact us tab is just at the footer
- Xplore.html: heading "Time to Xplore!" and below is a row of two boxes and in between the two boxes is the animation from lottieplayer in **Laptop view**.  In **Mobile view**, the row is stacked as a column with the heading on top.
- game1.html: An animation as the background and box to answer qns in **Laptop view**. In **Mobile view**,the animation only appears half like a sunrise.
- game2.html: 16 boxes (4x4) with same **Laptop view** and **Mobile view**.
- ba/de/soe/fms/hs/hms/ict/lsct.html: three per row in mobile view for their course, in **Laptop view**. In **Mobile view**,they are being stacked one after another in a column.
## Credits
### Content
Some design and text for the webpage was copied from the Ngee Ann Poly Official Website:https ://www.np.edu.sg/home

### Media
Some design and text for the webpage was copied from the Ngee Ann Poly Official Website:https ://www.np.edu.sg/home

### Acknowledgement
I received some inspiration for this project from Ngee Ann Poly Official Website:https ://www.np.edu.sg/home
