import React from 'react'

function Aboutme copy() {
  return (
    <div>
    <div id="experience" class="background-alt">
        <h2 class="heading">Experience</h2>
        <div id="experience-timeline">
            <div data-date="July 2019 – present date">
                <h3>Web Dev Instructor </h3>
                <h4>A React love affair</h4>
                <p>
                    Teaching adults to become a web developer. Making complex code as simple as possible but not simpler. Being their companion and motivation to obtain this
                    highly appreciated skill.
                </p>
            </div>

            <div data-date="September 2017 – July 2018">
                <h3>Full-time web dev student</h3>
                <h4>Full Stack Course @ Syntra Tour & Taxis</h4>
                <p>
                    As my end of the year project, I made a program for the UZB (Jette) allowing them to show and adapt
                    the price of their treatment importing it from an excel file. <br> <br>
                    The project was awarded with 98% by an independent jury @ Syntra.

                    After the 10 month studies I looked and found a job as a web developer.
                    It took one year but, I took advantage of myfree time to self-study with Youtube and Udemy.
                </p>
            </div>
            <div data-date="October 2012 – September 2017">
                <h3>First steps towards web development</h3>
                <h4>Freelance Graphic Designer</h4>
                <p>
                    Working in Brussels and studying code @ Syntra Evening courses and on my own. The market asked for
                    less printing
                    and more websites. This was a time where I had to adapt myself becoming a Web Developer.
                </p>
            </div>

            <div data-date="September 1996 – September 2012">
                <h3>Graphic Designer </h3>
                <h4>ArteGrafia Print & Design Centre</h4>
                <p>
                    Pioneer in the print-on-demand business in Marbella. Providing advertising (from businesscard to
                    billboard) material mainly for the booming real-estate market on the Costa Del Sol.
                </p>
            </div>
        </div>
    </div>
    <!-- End #experience -->

    <div id="education">
        <h2 class="heading">Education</h2>
        <div class="education-block">
            <h3>Syntra Tour & Taxis</h3>
            <span class="education-date">Sept 2016 - Sept 2017</span>
            <h4>Full Stack Web Developer</h4>
            <p>
                Actually what learned me to code in a clean and logic way is having to explain it to my students.
                Thanks to Syntra, I got the opportunity and thanks to my personal motivation I became an appreciated
                teacher.
            </p>
        </div>
        <!-- End .education-block -->

        <div class="education-block">
            <h3>Saint Luc Tournai</h3>
            <span class="education-date">Sept 1986 - July 1989</span>
            <h4>Comunication Visuelle (gde distinction)</h4>
            <ul>
                <li>
                    Graphic Design Academy, coming from Flanders in a Walloon environment
                </li>
                <li>
                    A graphic design education in the famous Saint Luc Academies. </li>

            </ul>
        </div>
        <!-- End .education-block -->
    </div>
    <!-- End #education -->
    </div>
  )
}

export default Aboutme copy
