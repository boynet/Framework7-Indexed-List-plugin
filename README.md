Framework7-alphascroll-plugin
=============================

this plugin is for alphabetical fast scroll like ios 7 have (and android), works only with Contacts List
![''](http://i58.tinypic.com/2608tmo.jpg)


Installation:
put alphascroll.js in your js folder
1)embed it after framework7.js
````
<script type="text/javascript" src="../dist/js/framework7.js"></script>
<script type="text/javascript" src="js/alphascroll.js"></script>
````


2)add this css to your project:
````
.alphascroll {
    color: #057bf7;
    text-shadow: none;
    list-style: none;
    position: fixed;
    right: 0px;
    z-index: 1001;
    font-size: 12px;
    font-weight: bold;
    margin:0px;
    padding:0px;
    height:100%;
}
.alphascroll li{
     padding-right:5px;   
}
````

3) put this html code inside your .page-content before .contacts-block
````
<ul class="alphascroll"></ul>
````

4)you are done.
