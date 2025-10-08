---
layout: default
title: Marzipano 360 Tour
nav_order: 3
parent: Workshop Activities
customjs: http://code.jquery.com/jquery-1.4.2.min.js
---

<img src="images\marzipano\logo.png" alt="marzipano logo" style="float:right;width:240px;">

# Marzipano 360 Tour Activity

If you have any questions or get stuck as you work through this in-class exercise, please ask the instructor for assistance. Here is a sample [Marzipano tour of the DSC](https://msystems.net/dsc/){:target="_blank"}. Have fun!

Note: Marzipano tours are based on HTML and javascript files and require a web hosting service to publish and view

1.  Go to [https://www.marzipano.net/](https://www.marzipano.net/){:target="_blank"} and click **Marzipano Tool** in the top-right corner. Click **Start**
2.  Download some or all of the following 360 images (or use your own 360 images). Please note which folder they are downloaded into on your computer so you can find them:
    -   [Image 1](/images/360/stacks.jpg){:target="_blank"}: Library stacks
    -   [Image 2](/images/360/3rd_floor_foyer.jpg){:target="_blank"}: DSC library 3rd floor, top of stairs
    -   [Image 3](/images/360/dsc_entry.jpg){:target="_blank"}: DSC entry & glass stairwell
    -   [Image 4](/images/360/classroom.jpg){:target="_blank"}: DSC classroom
    -   [Image 5](/images/360/hallway.jpg){:target="_blank"}: DSC hallway
    -   [Image 6](/images/360/3d_scanner_vr_room.jpg){:target="_blank"}: DSC 3D scanner & VR room hallway
    -   [Image 7](/images/360/vr_room.jpg){:target="_blank"}: DSC VR room
    -   [Image 8](/images/360/3d_scanner.jpg){:target="_blank"}: DSC 3D Scanner room
    -   [Image 9](/images/360/windows.jpg){:target="_blank"}: DSC classroom windows
    -   [Image 10](/images/360/3d_printers.jpg){:target="_blank"}: DSC 3D printers
    -   [Image 11](/images/360/offices.jpg){:target="_blank"}: DSC offices
3.  Click **Select Files** and import the 360-degree images that you would like to use in your tour (Note: you can borrow a 360-camera from the Music & Media desk in the library). Depending on how many images you load, it may take several minutes to process
4.  Once your images have been processed, you will be able to add hotspots to each image, change the settings of your tour, and export your tour
    
    <img src="images\marzipano\4-menu-overview.png" alt="menu overview" style="width:720px;">
    
    -   Adding hotspots: In the bottom-right corner of the screen, you can add an info hotspot, a link hotspot, and you can also set the initial view. Info hotspots display text when clicked, and link hotspots take viewers to a new image of the tour when clicked. When you add a hotspot, you can drag it to the point in your image that you would like it to be displayed
    
    <button onclick="toggle('gif1')">Show/Hide Animation</button>
    
<div id="gif1">
      <img src="images\marzipano\4-add-hotspot.gif" alt="adding hotspot" style="width:720px;">
    </div>

        
    
    -   Changing settings: In the top-left corner of the screen, you can change the settings of your virtual tour
        1.  Drag/QTVR: When the Drag option is selected, the viewer can explore your images by clicking and dragging. When QTVR is selected, the viewer can explore your images by clicking and moving the mouse without releasing the mouse button
        2.  Autorotate: If this is selected, your images will slowly rotate
        3.  View control buttons: If this is selected, buttons to pan the camera and zoom in and out will be visible for viewers
        4.  Fullscreen button: If this is selected, a button to make the tour full screen will be visible for viewers
    
<button onclick="toggle('gif2')">Show/Hide Animation</button>
    
<div id="gif2">
       <img src="images\marzipano\4-change-settings.gif" alt="changing settings" style="width:720px;">
    </div>

       
    
    -   Exporting: When you are finished creating your tour, you can click the Export button in the top-left. This will create a .zip file containing the HTML and javascript files for your tour. You can then unzip those files and host these files on your own web server
    -   To upload your Marzipano tour to your personal UVic web space you'll need to set up your personal webspace. You can do this by [following the directions here](http://bit.ly/2QlRZo0){:target="_blank"} to sign up for your personal webspace and following the instructions below that to upload your files:
        1. [Github web space - free web hosting that stays avaialble after you graduate](https://pages.github.com/){:target="_blank"}
        2. [UVic Faculty & Staff web space request](https://www.uvic.ca/systems/support/web/webhosting-fac-staff/){:target="_blank"}
        2. [UVic Student web space request](https://www.uvic.ca/systems/support/web/webhosting-students/contentmigrationstudentweb.php){:target="_blank"}


<script>  

    function toggle(input) {
        var x = document.getElementById(input);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
</script>

[NEXT ACTIVITY: Lapentor 360 Tour](activity-lapentor.html){: .btn .btn-blue }
