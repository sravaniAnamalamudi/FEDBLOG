import React from "react";
import Sidebar from "./Sidebar";
import image1 from './image1.png';
import image2 from './image2.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image3 from './image3.png';



const Main = () => {
    return (

    <div>

  <div className="article">
      <table className="tab">

      <h1 id="sample6"><u> WORKING WITH FONTS</u></h1>

    <p> Fonts play a very important role in making a website more user friendly and increasing content 
      readability
      
.</p>

      <tr><h3 align="left" id="sample1"> Set Font Size</h3>
      <p>
You can set content font size using size attribute. <br/>The range of accepted values is from 1 smallest to 
7 largest.<br/> The default size of a font is 3.<br></br>
</p>
      
         <img src={image1} alt="image1" align="left"/></tr>

        <tr><h3 align="left" id="sample2">  Setting Font Face</h3>
         <p>   You can set font face using face attribute but be aware that if the user <br/>viewing the page 
          doesn't have the font installed, they will not be able to see it. <br/>Instead user will see the
           default font face applicable to the user's computer.

</p>
          <img src={image2} alt="image2" align="left"/></tr>

        <tr><h3 align="left" id="sample3">Setting Font Color</h3>
        <p> You can set any font color you like using color attribute.<br/> You can 
          specify the color that you want by either the color name or hexadecimal code for that color.<br/>
You can check a complete list of HTML Color Name with Codes</p>
            <img src={image3} alt="image3" align="left"/></tr>

            <h1 id="sample7"><u> WORKING WITH Graphics</u></h1>
            <p> Graphics are representations used to make web-page or applications visually appealing 
              
            <br/>and also for improving user experience and user interaction. <br/>Some examples of graphics are 
              photographs, flowcharts, bar graphs, maps, <br/>engineering drawings, constructional blueprints, etc. 
              Usually, the following technologies <br/>
              are used in web graphics with HTML5 Canvas API, WebCGM, CSS, SVG, PNG, JPG, etc.</p>
           <tr><h3 align="left" id="sample4"> SVG</h3><p></p>
<p>These are images created by a markup language that are reusable, simple, <br/>high-quality standalone images
   that can be exported and imported as well.<br/>
They are cross-browser friendly and can be used both on the client-side and server-side <br/>of the application.
They can be manipulated to create animations, hybrid images, etc<br/> by editing the markup language or by 
editing using a stylesheet.
Files come with a .svg extension.</p>
<img src={image4} alt="image" align="left"/></tr>
<tr><h3 align="left" id="sample5"> Canvas</h3><p></p>
<p>Has no DOM and uses vector based methods to create objects, <br/>graphics and shapes.
Canvas API applications can be standalone or<br/> integrated with HTML or SVG.
Widely used for games<br/>
Client-side scripting with native modern browser support.</p>

<img src={image5} alt="image" align="left"/></tr>



      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </table>


   </div>
    <Sidebar />
    </div>
    )
};

export default Main;


