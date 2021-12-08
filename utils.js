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

UTILS.INFODIV = (tagname, tagclass, parenttag, insidetag, insidetagvalue) => {
  let div1 = document.createElement(tagname);
  div1.className = tagclass;
  parenttag.appendChild(div1);
  UTILS.CREATEDIV("p", "left", insidetag, div1);
  UTILS.CREATEDIV("p", "right", insidetagvalue, div1);
};

UTILS.SELECTBTN = async (btnname, tagclass) => {
  let btn = document.querySelector(btnname);
  let num = i;
  await btn.addEventListener("click", function () {
    if (UTILS.FLAG) {
      let parentdiv = document.querySelector(tagclass);
      document.querySelector(tagclass).style.height = "270px";
      UTILS.INFODIV(
        "div",
        "box1",
        parentdiv,
        "Id",
        UTILS.GLOBALOBJECTS[num].id
      );
      UTILS.INFODIV(
        "div",
        "box1",
        parentdiv,
        "Occupation",
        UTILS.GLOBALOBJECTS[num].occupation
      );
      UTILS.INFODIV(
        "div",
        "box1",
        parentdiv,
        "seasons",
        UTILS.GLOBALOBJECTS[num].seasons
      );
      UTILS.INFODIV(
        "div",
        "box1",
        parentdiv,
        "status",
        UTILS.GLOBALOBJECTS[num].status
      );
      UTILS.FLAG = 0;
    } else {
      document.querySelector(tagclass).style.height = "90px";
      UTILS.FLAG = 1;
    }
  });
};

UTILS.SELECTALLBTNS = async (divname) => {
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
  document.querySelector(".content").style.height = "80px";
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
    UTILS.CREAtEIMGDIV("img", UTILS.GLOBALOBJECTS[num].img, "imageshow", div1);

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
