(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// let flag=1;
// let globalObject=[
//     {
//         name:"Marie Schrader",
//         img:"https://vignette.wikia.nocookie.net/breakingbad/images/a/a2/Tess_Harper.jpg/revision/latest?cb=20120923235754",
//         cause:" shot on head",
//         responsible:" fuwegjed",
//         lastWords:"shfdjhae ",
//         id:1 ,
//         seasons:"1,2",
//         occupation:"carpenter",
//         status:"Deceased"
//     }
//     ,
//     {
//         name:"gdeuewidbeg",
//         img:"https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_badger-lg.jpg",
//         cause:"misfired bullet",
//         responsible:"sjfrdksej",
//         lastWords:"dfhrgijwoejqdsa",
//         id:2 ,
//         seasons:"2,3,4",
//         occupation:"teacher",
//         status:"dead"
//     }
//     ,
//     {
//         name:"wegrusj",
//         img:"https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
//         cause:"car accident",
//         responsible:"dfvsdskjah",
//         lastWords:"adjkgruga",
//         id:3 ,
//         seasons:"1,2",
//         occupation:"driver",
//         status:"deceased"
//     }
//     ,
//     {
//         name:"Walter White",
//         img:"https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645",
//         cause:"sdfaeuqw",
//         responsible:"hjfoitbf ",
//         lastWords:"sdugduidkj",
//         id:4 ,
//         seasons:"1,2,3,4,5",
//         occupation:"High school teacher",
//         status:"Presumed Dead"
//     }
//     ,
//     {
//         name:"Todd Alquist",
//         img:"https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
//         cause:"cvbdkjhskj",
//         responsible:"bf,seishdd",
//         lastWords:"sfscbjha",
//         id:5 ,
//         seasons:"5",
//         occupation:" Lab Assistant Enforcer",
//         status:"Deceased"
//     }
//     ,
//     {
//         name:"Mrs. Pinkman",
//         img:"https://vignette.wikia.nocookie.net/breakingbad/images/9/95/Todd_brba5b.png/revision/latest?cb=20130717134303 ",
//         cause:"fewfjs",
//         responsible:"fbweknlkr",
//         lastWords:"zfbskjthw;ksf",
//         id:6 ,
//         seasons:"1,2,3",
//         occupation:"unknown",
//         status:"Deseased"
//     }
// ]
// globaldeathfind=()=>
// {

//     let findButton=document.querySelector(".Randomdeath");
//     findButton.addEventListener("click",function()
//     {
//         let num=Math.floor(Math.random()*6);
//         let maindiv=document.querySelector(".displaydiv");
//         maindiv.innerHTML="";
//         maindiv.style.height="500px";
        
//        let div1=document.createElement("div");
//        div1.className="dsub1";
//        maindiv.appendChild(div1);
//        let div2=document.createElement("div");
//        div2.className="dsub2";
//        maindiv.appendChild(div2);
    
//         let namediv=document.createElement("div");
//         namediv.className="namediv";
//         namediv.innerHTML=globalObject[num].name;
//         div1.appendChild(namediv);
    
//        let img=document.createElement("img");
//        img.src=globalObject[num].img
//        img.style.height="400px";
//        img.style.width="230px";
//        img.className="imageshow";
//        div1.appendChild(img);
    
    
//        let cause=document.createElement("div");
//         cause.className="cause";
//         cause.innerHTML="Cause of Death";
//         div2.appendChild(cause);
    
    
    
//         let cause1=document.createElement("div");
//         cause1.className="cause1";
//         cause1.innerHTML=globalObject[num].cause;
//         div2.appendChild(cause1);
    
    
    
//         let responsible=document.createElement("div");
//         responsible.className="cause";
//         responsible.innerHTML="Responsible";
//         div2.appendChild(responsible);
    
//         let responsible1=document.createElement("div");
//         responsible1.className="cause1";
//         responsible1.innerHTML=globalObject[num].responsible;
//         div2.appendChild(responsible1);
    
//         let lastword=document.createElement("div");
//         lastword.className="cause";
//         lastword.innerHTML="Last Words";
//         div2.appendChild(lastword);
    
//         let lastword1=document.createElement("div");
//         lastword1.className="cause1";
//         lastword1.innerHTML=globalObject[num].lastWords;
//         div2.appendChild(lastword1);
//     })
// }

// globaldeathfind();
// let btn=document.querySelector(".displaybutton");

//  selectbtn =(btnname,infoname)=>
// {
// let btn=document.querySelector(btnname);
// btn.addEventListener("click",function()
// {
//     if(flag){
//         document.querySelector(infoname).style.height="160px";
//         flag=0;
//     }
//     else
//     {
//         document.querySelector(infoname).style.height="80px";
//         flag=1;
//     }
    
// })
// }
// selectAllBtns=(insideDiv)=>
// {
//     let maindiv=document.querySelectorAll(insideDiv);
//    for(i in maindiv)
//    {
//        selectbtn(".displaybutton"+i,".info"+i);
//    }
// }

// selectAllBtns(".insidediv");

const UTILS=require("./utils");
UTILS.RANDOMDEATHDISPLAYBTN(".Randomdeath");
UTILS.SELECTALLBTNS(".insidediv");

// let parenttag=document.querySelector("info"+i);


// let div1=document.createElement("div");
// div1.className="box1";
// parenttag.appendChild(div1);
// UTILS.CREATEDIV("p","left","Id",div1);
// UTILS.CREATEDIV("p","right",UTILS.GLOBALOBJECTS[i].id,div1);

// UTILS.INFODIV("div","box1","info"+i,"Id",UTILS.GLOBALOBJECTS[i].id);
},{"./utils":2}],2:[function(require,module,exports){
let UTILS = {};
UTILS.FLAG = 1;

UTILS.GLOBALOBJECTS = [
  {
    name: "Marie Schrader",
    img: "https://vignette.wikia.nocookie.net/breakingbad/images/a/a2/Tess_Harper.jpg/revision/latest?cb=20120923235754",
    cause: " shot on head",
    responsible: " fuwegjed",
    lastWords: "shfdjhae ",
    id: 1,
    seasons: "1,2",
    occupation: "carpenter",
    status: "Deceased",
  },
  {
    name: "gdeuewidbeg",
    img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_badger-lg.jpg",
    cause: "misfired bullet",
    responsible: "sjfrdksej",
    lastWords: "dfhrgijwoejqdsa",
    id: 2,
    seasons: "2,3,4",
    occupation: "teacher",
    status: "dead",
  },
  {
    name: "wegrusj",
    img: "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
    cause: "car accident",
    responsible: "dfvsdskjah",
    lastWords: "adjkgruga",
    id: 3,
    seasons: "1,2",
    occupation: "driver",
    status: "deceased",
  },
  {
    name: "Walter White",
    img: "https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645",
    cause: "sdfaeuqw",
    responsible: "hjfoitbf ",
    lastWords: "sdugduidkj",
    id: 4,
    seasons: "1,2,3,4,5",
    occupation: "High school teacher",
    status: "Presumed Dead",
  },
  {
    name: "Todd Alquist",
    img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    cause: "cvbdkjhskj",
    responsible: "bf,seishdd",
    lastWords: "sfscbjha",
    id: 5,
    seasons: "5",
    occupation: " Lab Assistant Enforcer",
    status: "Deceased",
  },
  {
    name: "Mrs. Pinkman",
    img: "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/Todd_brba5b.png/revision/latest?cb=20130717134303 ",
    cause: "fewfjs",
    responsible: "fbweknlkr",
    lastWords: "zfbskjthw;ksf",
    id: 6,
    seasons: "1,2,3",
    occupation: "unknown",
    status: "Deseased",
  },
];

UTILS.INFODIV=(tagname,tagclass,parenttag,insidetag,insidetagvalue)=>
{
    let div1=document.createElement(tagname);
div1.className=tagclass;
parenttag.appendChild(div1);
UTILS.CREATEDIV("p","left",insidetag,div1);
UTILS.CREATEDIV("p","right",insidetagvalue,div1);
}

UTILS.SELECTBTN =async (btnname, tagclass) => {
  let btn = document.querySelector(btnname);
  let num=i;
  await btn.addEventListener("click", function () {
    if (UTILS.FLAG) {
        let parentdiv=document.querySelector(tagclass);
      document.querySelector(tagclass).style.height = "270px";
      UTILS.INFODIV("div","box1",parentdiv,"Id",UTILS.GLOBALOBJECTS[num].id);
      UTILS.INFODIV("div","box1",parentdiv,"Occupation",UTILS.GLOBALOBJECTS[num].occupation);
      UTILS.INFODIV("div","box1",parentdiv,"seasons",UTILS.GLOBALOBJECTS[num].seasons);
      UTILS.INFODIV("div","box1",parentdiv,"status",UTILS.GLOBALOBJECTS[num].status);
      UTILS.FLAG = 0;
    } else {
      document.querySelector(tagclass).style.height = "90px";
      UTILS.FLAG = 1;
    }
  });
};

UTILS.SELECTALLBTNS =async (divname) => {
  let maindiv = document.querySelectorAll(divname);
  for (i in maindiv) {
    await UTILS.SELECTBTN(".displaybutton" + i, ".info" + i);
  }
};

UTILS.CREATEDIV = (divname, divclass, divvalue, parentdiv) => {
  let cause1 = document.createElement(divname);
  cause1.className = divclass;
  cause1.innerHTML = divvalue;
  parentdiv.appendChild(cause1);
};

UTILS.CREAtEIMGDIV = (tagname, source, tagclass, parentdiv) => {
  let img = document.createElement(tagname);
  img.src = source;
  console.log(source);
  img.style.height = "400px";
  img.style.width = "230px";
  img.className = tagclass;
  parentdiv.appendChild(img);
};

UTILS.RANDOMDEATHDISPLAYBTN = (btn) => {
    document.querySelector(".content").style.height="80px";
  let findButton = document.querySelector(btn);
  findButton.addEventListener("click", function () {
    let num = Math.floor(Math.random() * 6);
    let maindiv = document.querySelector(".displaydiv");
    maindiv.innerHTML = "";
    maindiv.style.height = "500px";

    let div1 = document.createElement("div");
    div1.className = "dsub1";
    maindiv.appendChild(div1);
    let div2 = document.createElement("div");
    div2.className = "dsub2";
    maindiv.appendChild(div2);

    UTILS.CREATEDIV("div", "namediv", UTILS.GLOBALOBJECTS[num].name, div1);
    UTILS.CREAtEIMGDIV(
      "img",
      UTILS.GLOBALOBJECTS[num].img,
      "imageshow",
      div1
    );

    UTILS.CREATEDIV("div", "cause", "Cause of Death", div2);
    UTILS.CREATEDIV("div", "cause1", UTILS.GLOBALOBJECTS[num].cause, div2);
    UTILS.CREATEDIV("div", "cause", "Responsible", div2);
    UTILS.CREATEDIV(
      "div",
      "cause1",
      UTILS.GLOBALOBJECTS[num].responsible,
      div2
    );
    UTILS.CREATEDIV("div", "cause", "Last Words", div2);
    UTILS.CREATEDIV("div", "cause1", UTILS.GLOBALOBJECTS[num].lastWords, div2);
  });
};

module.exports = UTILS;

},{}]},{},[1]);
