webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),a=n("mvHQ"),i=n.n(a),r=n("Dd8w"),s=n.n(r),l={props:{value:{type:String,default:""}},computed:{listeners:function(){var t=this;return s()({},this.$listeners,{input:function(e){return t.$emit("input",e.target.value)}})}}},u={render:function(){var t=this.$createElement;return(this._self._c||t)("input",this._g({staticClass:"input",attrs:{type:"text"},domProps:{value:this.value}},this.listeners))},staticRenderFns:[]},c=n("VU/8")(l,u,!1,null,null,null).exports,h={props:{todo:{type:Object,required:!0}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"spaceUnder"},[n("td",[t._v(t._s(t.todo.text)),n("br"),n("em",[n("small",[t._v("Added: "+t._s(t.todo.time)+" "+t._s(t.todo.date))])])]),n("td",[n("button",{staticClass:"button",on:{click:function(e){t.$emit("remove",t.todo.id)}}},[t._v("X")])])])},staticRenderFns:[]},p=1,m={components:{BaseInputText:c,TodoListItem:n("VU/8")(h,d,!1,null,null,null).exports},data:function(){return{newTodoText:"",todos:[]}},methods:{addTodo:function(){var t=new Date,e=t.toLocaleDateString("fi-FI"),n=t.toLocaleTimeString("fi-FI");n=n.replace(/\./g,":");var o=this.newTodoText.trim();o&&(this.todos.push({id:p++,text:o,time:n,date:e}),this.newTodoText="")},removeTodo:function(t){this.todos=this.todos.filter(function(e){return e.id!==t})}},mounted:function(){p++,localStorage.getItem("todos")&&(this.todos=JSON.parse(localStorage.getItem("todos")));var t=Math.max.apply(Math,this.todos.map(function(t){return t.id}));console.log("MaxId:"+t),p=t++,console.log("nextTodoId:"+p),t===-1/0&&(p=1)},watch:{todos:{handler:function(){localStorage.setItem("todos",i()(this.todos))},deep:!0}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todoList"},[n("h1",[t._v("Notes and tasks")]),t._v(" "),n("BaseInputText",{attrs:{placeholder:"Input a task or a note and press enter"},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null}},model:{value:t.newTodoText,callback:function(e){t.newTodoText=e},expression:"newTodoText"}}),t._v(" "),t.todos.length?n("transition-group",{tag:"tbody",attrs:{name:"notes"}},t._l(t.todos,function(e){return n("TodoListItem",{key:e.id,attrs:{todo:e},on:{remove:t.removeTodo}})}),1):n("p",[t._v("Nothing to do, input a task or a note and press Enter")])],1)},staticRenderFns:[]},y={data:function(){return{hour:null,minute:null,second:null,amPm:null,date:null}},methods:{updateClock:function(){var t=new Date,e=t.toLocaleTimeString("fr-FR"),n=t.toLocaleDateString("fi-FI");this.date=n,this.hour=e.split(":")[0],this.minute=t.getMinutes(),this.second=e.split(":")[2].split(" ")[0],this.amPm=e.split(" ")[1]}},mounted:function(){setInterval(this.updateClock,1e3)}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clock"},[n("h1",{staticStyle:{"font-weight":"700"}},[t._v(t._s(t.hour)),n("span",{staticStyle:{"font-weight":"300"}},[t._v(":"+t._s(t.minute)+":"+t._s(t.second))])]),t._v(" "),n("span",[t._v(t._s(t.date))])])},staticRenderFns:[]},g={data:function(){return{show:!0,selectedQuote:"New quote every minute",selectedAuthor:"Random timetraveler",quotes:[{text:"Oh, I have strong opinions, but a thousand reasoned opinions are never equal to one case of diving in and finding out.",author:"Robert Heinlein"},{text:"To get anywhere, or even to live a long time, a man has to guess, and guess right, over and over again, without enough data for a logical answer.",author:"Robert Heinlein"},{text:"As a thumb rule, one can say that any time a planet starts developing cities of more than one million people, it is approaching critical mass. In a century or two it won't be fit to live on.",author:"Robert Heinlein"},{text:"There is no privacy in any society crowded enough to need ID's.",author:"Robert Heinlein"},{text:"There's no virtue in being old, it just takes a long time.",author:"Robert Heinlein"},{text:"Age does not bring wisdom. Often it merely changes simple stupidity into arrogant conceit. Its only advantage, so far as I have been able to see, is that it spans change. A young person sees the world as a still picture, immutable. An old person has had his nose rubbed in changes and more changes and still more changes so many times that he knows it is a moving picture, forever changing. He may not like is—probably doesn't; I don't—but he knows it's so, and knowing it is the first step in coping with it.",author:"Robert Heinlein"},{text:"The first way to lie artistically is to tell the truth—but not all of it. The second way involves telling the truth, too, but is harder: Tell the exact truth and maybe all of it…but tell it so unconvincingly that your listener is sure you are lying.",author:"Robert Heinlein"},{text:"'Always cut the cards, Woodie,' he would say. 'You may lose anyhow—but not as often, nor as much. And when you do, lose, smile.'",author:"Robert Heinlein"},{text:"Most people won't learn even by experience, Ira. Never underestimate the power of human stupidity.",author:"Robert Heinlein"},{text:"Babies and young children live in the present, the 'now.' Mature adults tend to live in the future. Only the senile live in the past.",author:"Robert Heinlein"},{text:"The way to live a long time—oh, a thousand years or more—is something between the way a child does it and the way a mature man does it. Give the future enough thought to be ready for it—but don't worry about it. Live each day as if you were to die next sunrise. Then face each sunrise as a fresh creation and live for it, joyously. And never think about the past. No regrets, ever.",author:"Robert Heinlein"},{text:"'Common sense'?' 'Son, that phrase is self-contradictory. 'Sense' is never 'common.'",author:"Robert Heinlein"},{text:"Never attempt to teach a pig to sing; it wastes your time and annoys the pig.",author:"Robert Heinlein"},{text:"‘Sleep whenever you can; you may have to stay awake a long time.’ Early rising may not be a vice, Ira, but it is certainly no virtue. The old saw about the early bird just goes to show that the worm should have stayed in bed. I can’t stand people who are smug about how early they get up.”",author:"Robert Heinlein"},{text:"Work? Or early rising? Neither is a virtue. But getting up early does not get more work done…any more than you can make a piece of string longer by cutting off one end and tying it onto the other. You get less work done if you persist in getting up yawning and still tired. You aren’t sharp and make mistakes and have to do it over. That sort of busy-busy is wasteful. As well as unpleasant. And annoying to those who would sleep late if their neighbors weren’t so noisily active at some ungodly cow-milking hour. Ira, progress doesn’t come from early risers—progress is made by lazy men looking for easier ways to do things.”",author:"Robert Heinlein"},{text:"Every impossible rule has its loopholes; every general prohibition creates its bootleggers.",author:"Robert Heinlein"},{text:"Some people are ants by nature; they have to work, even when it’s useless. Few people have a talent for constructive laziness.",author:"Robert Heinlein"},{text:"The worst criminals in history have been loaded with good intentions.",author:"Robert Heinlein"},{text:"Palaces don’t appeal to me, and being a house guest is still worse. A nuisance both to host and guest.",author:"Robert Heinlein"},{text:"Danger for the sake of danger is for children who don’t really believe they can be killed. Whereas I know I can be. So there are a lot of mountains I’ll never climb. Unless I’m trapped, in which case I’ll do it—have done it!—the easiest, safest, most chicken way I can figure out. Don’t bother with anything in which the prime novelty is danger—danger is no novelty. It is simply something to be faced when you can’t run.",author:"Robert Heinlein"},{text:"It’s much safer to break a law knowingly than to do so through ignorance.",author:"Robert Heinlein"},{text:"Schoolteacher—lost that job when they caught me teaching the kids the raw truth, a capital offense anywhere in the Galaxy.",author:"Robert Heinlein"},{text:"Don’t ever become a pessimist, Ira; a pessimist is correct oftener than an optimist, but an optimist has more fun— and neither can stop the march of events.",author:"Robert Heinlein"},{text:"‘Put not your faith in princes,’ Ira; since they don’t produce, they always steal.",author:"Robert Heinlein"},{text:"A man who doesn’t know where his next meal is coming from is never bored. He may be angry or several other things—but not bored. His predicament sharpens his thoughts, spurs him into action, adds zest to his life, whether he knows it or not. Can trap him, of course; that’s why food is the usual bait for traps. But that’s the intriguing part about being broke: how to solve it without being trapped. A hungry man tends to lose his judgment—a man who has missed seven meals is often ready to kill—rarely a solution.",author:"Robert Heinlein"},{text:"A family man should not take risks that a bachelor finds acceptable.",author:"Robert Heinlein"},{text:"It is impossible to free slaves, they have to free themselves.",author:"Robert Heinlein"},{text:"At seventeen I was certain I was in love. But it was merely excess hormones and selfdelusion. It was most of a thousand years later before I experienced the real thing—and didn’t recognize the condition for years, as I had quit using that word.”",author:"Robert Heinlein"},{text:"“And I’m going to swap you for a dog, sweetheart, and sell the dog.",author:"Robert Heinlein"},{text:"How much is “too much”? Whatever you can’t spend before you leave a place you are not coming back to. If you hang onto that excess and come back later, you will usually find—invariably, so far as I recall—that inflation or war or taxes or changes in government or something has wiped out the alleged value of fiat money you may have kept.",author:"Robert Heinlein"},{text:"Every so often some idiot tries to abolish marriage. Such attempts work as well as repealing the law of gravity, making pi equal to three point zero, or moving mountains by prayer.",author:"Robert Heinlein"},{text:"Marriage is not something thought up by priests and inflicted on mankind; mar­riage is as much a part of mankind’s evolutionary equipment as his eyes, and as useful to the race as eyes are to an individual.      Surely, marriage is an economic contract to provide for children and to take care of mothers while they bear kids and bring them up—but it is much more than that. It is the means this animal, Homo sap., has evolved—quite unconsciously—for performing this indispensable function and be happy while doing so.",author:"Robert Heinlein"},{text:"A man never cuts his throat from a sleepless night if he has company to see him through it.",author:"Robert Heinlein"},{text:"Privacy is as necessary as company; you can drive a man crazy by depriving him of either.",author:"Robert Heinlein"},{text:"No human can accept unlimited responsibility lest he go mad from unbearable load of unlimited guilt.",author:"Robert Heinlein"},{text:"Democratic fallacy: the notion that her opinion was as good as anyone’s",author:"Robert Heinlein"},{text:"Aristocratic fallacy: He accepted the notion of authority in opinion.",author:"Robert Heinlein"},{text:"Science and art are occupations of a very small minority—a small percentage even of those people who claim to be scientists or artists.",author:"Robert Heinlein"},{text:"No­body owns his genes; he’s merely their custodian. They are passed to him willy-nilly in the meiotic dance; he passes them along to others through the same blind chances.",author:"Robert Heinlein"},{text:"Always listen to experts. They’ll tell you what can’t be done, and why. Then do it.",author:"Robert Heinlein"},{text:"“Hold together, Jack, pass through everything, and everything is one dream, one appearance, one flash, one sad eye, one crystal lucid mystery, one word - Hold still, man, regain your love of life and go down from this mountain and simply be-be-be the infinite fertilities of the one mind of infinity, make no comments, complaints, criticisms, appraisals, avowals, sayings, shooting stars of thought, just flow, flow, be you all, be you what it is, it is only what it always is - Hope is a word like a snow-drift - This is the Great Knowing, this is the Awakening, this is Voidness - So shut up, live, travel, adventure, bless and dont be sorry.”",author:"Jack Keroauc, Desolation Angels"},{text:"“White waves upon the ocean \nWill beat a path to where I roam \nFor in my heart there is a presence \nAnd I will call that presence home”",author:"Darryn John Murphy"},{text:"Old age is always fifteen years older than I am.",author:"Bernard M. Baruch"},{text:"The truly independent person—in whom creative thinking is at its best—is someone who can accept society without denying himself.   ",author:"Richard Crutchfield"},{text:"Man and the turtle have much in common. Neither gets anywhere without sticking his neck out.",author:""},{text:"The only gracious way to accept an insult is to ignore it; if you can't ignore it, top it; if you can't top it, laugh at it; if you can't laugh at it, it's probably deserved.",author:"Russell Lynes"},{text:"Frustration is not having anyone to blame but yourself.",author:""},{text:"There are two statements about human beings that are true:  That all arealike, and that all are different.",author:"Mark Van Doren"},{text:"Try not to become a man of success but rather try to become a man of value.",author:"Albert Einstein"},{text:"Nothing is new except arrangement.",author:"W. Durant"},{text:"True friendship comes when silence between two people is comfortable.",author:"Dave Tyson Gentry"},{text:"Nothing is impossible for the man who doesn't have to do it himself.",author:"A. H. Weiler"},{text:"That light at the end of the tunnel just might be a train coming this way.",author:""},{text:"The art of being yourself at your best is the art of unfolding your personality into the man you want to be...Be gentle with yourself, learn to love yourself, to forgive yourself, for only as we have the right attitude towards ourselves can we have the right attitude towards others.",author:"Wilfred Peterson"},{text:"The only man who can change his mind is a man that's got one.",author:"E. Westcott"},{text:"When I was younger, I could remember anything, whether it had happened or not.",author:"Mark Twain"},{text:"I have always thought respectable people scoundrels and I look anxiously at my face every morning for signs of my becoming a scoundrel.",author:"Bertrand Russell"}]}},methods:{randomQuote:function(){var t=this.quotes[Math.floor(Math.random()*this.quotes.length)];this.selectedQuote=t.text,this.selectedAuthor=t.author}},mounted:function(){var t=this;this.randomQuote(),this.interval=setInterval(function(){return t.randomQuote()},6e4)}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"quote"},[n("transition",{attrs:{name:"component-fade",mode:"out-in"}},[n("span",{key:t.selectedQuote},[t._v("\n            "+t._s(t.selectedQuote)+" \n        ")])]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("transition",{attrs:{name:"component-fade",mode:"out-in"}},[n("em",{key:t.selectedAuthor},[t._v(t._s(t.selectedAuthor))])])],1),t._v(" "),n("div",{staticStyle:{"text-align":"center",padding:"1em"}},[n("button",{staticClass:"button",on:{click:function(e){t.randomQuote()}}},[t._v("New quote")])])])},staticRenderFns:[]},w={data:function(){return{calculator:{previous:null,current:"",operator:null,operatorClicked:!1,sign:"",end:!1}}},methods:{clearAll:function(){this.calculator.current=""},sign:function(){""!=this.calculator.current&&(this.calculator.current="-"===this.calculator.current.charAt(0)?this.calculator.current.slice(1):"-"+this.calculator.current)},percent:function(){this.calculator.current=""+parseFloat(this.calculator.current)/100},append:function(t){"0"===t&&""===this.calculator.current?this.calculator.current="":(this.calculator.operatorClicked&&(this.calculator.current="",this.calculator.operatorClicked=!1),this.calculator.current=""+this.calculator.current+t)},dot:function(){-1===this.calculator.current.indexOf(".")&&this.append(".")},setPrevious:function(){this.calculator.previous=this.calculator.current,this.calculator.operatorClicked=!0},divide:function(){this.calculator.operator=function(t,e){return t/e},this.setPrevious(),this.calculator.sign="÷"},times:function(){this.calculator.operator=function(t,e){return t*e},this.setPrevious(),this.calculator.sign="x"},minus:function(){this.calculator.operator=function(t,e){return t-e},this.setPrevious(),this.calculator.sign="-"},add:function(){this.calculator.operator=function(t,e){return t+e},this.setPrevious(),this.calculator.sign="+"},equal:function(){this.calculator.current=this.calculator.operator(parseFloat(this.calculator.previous),parseFloat(this.calculator.current)),this.calculator.previous=null,this.calculator.sign="",this.calculator.end=!0},del:function(){this.calculator.current&&(this.calculator.current=this.calculator.current.slice(0,-1))},sqrt:function(){parseFloat(this.calculator.current)>=0&&(this.calculator.current=Math.sqrt(parseFloat(this.calculator.current)))},pow:function(){this.calculator.current=Math.pow(parseFloat(this.calculator.current),2)},inverse:function(){parseFloat(this.calculator.current)>0&&(this.calculator.current=1/parseFloat(this.calculator.current))}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"calculator"},[n("div",{staticClass:"prev"},[t._v(t._s(t.calculator.previous||"")+" "+t._s(t.calculator.sign))]),t._v(" "),n("div",{staticClass:"display"},[t._v(t._s(t.calculator.current||"0"))]),t._v(" "),n("div",{staticClass:"btn operator",on:{click:t.percent}},[t._v("%")]),t._v(" "),n("div",{staticClass:"btn operator",on:{click:t.sqrt}},[t._v("√")]),t._v(" "),n("div",{staticClass:"btn operator",on:{click:t.pow}},[t._v("x²")]),t._v(" "),n("div",{staticClass:"btn operator",on:{click:t.inverse}},[t._v("1/x")]),t._v(" "),n("div",{staticClass:"btn operator2 c",on:{click:t.clearAll}},[t._v("C")]),t._v(" "),n("div",{staticClass:"btn operator2",on:{click:t.del}},[t._v("🔙")]),t._v(" "),n("div",{staticClass:"btn operator2",on:{click:t.divide}},[t._v("÷")]),t._v(" "),n("div",{staticClass:"btn",on:{click:function(e){t.append("7")}}},[t._v("7")]),t._v(" "),n("div",{staticClass:"btn",on:{click:function(e){t.append("8")}}},[t._v("8")]),t._v(" "),n("div",{staticClass:"btn",on:{click:function(e){t.append("9")}}},[t._v("9")]),t._v(" "),n("div",{staticClass:"btn operator2",on:{click:t.times}},[t._v("x")]),t._v(" "),n("div",{staticClass:"btn",on:{click:function(e){t.append("4")}}},[t._v("4")]),t._v(" "),n("div",{staticClass:"btn",on:{click:function(e){t.append("5")}}},[t._v("5")]),t._v(" "),n("div",{staticClass:"btn",on:{click:function(e){t.append("6")}}},[t._v("6")]),t._v(" "),n("div",{staticClass:"btn operator2",on:{click:t.minus}},[t._v("-")]),t._v(" "),n("div",{staticClass:"btn",on:{click:function(e){t.append("1")}}},[t._v("1")]),t._v(" "),n("div",{staticClass:"btn",on:{click:function(e){t.append("2")}}},[t._v("2")]),t._v(" "),n("div",{staticClass:"btn",on:{click:function(e){t.append("3")}}},[t._v("3")]),t._v(" "),n("div",{staticClass:"btn operator2",on:{click:t.add}},[t._v("+")]),t._v(" "),n("div",{staticClass:"btn",on:{click:t.sign}},[t._v("±")]),t._v(" "),n("div",{staticClass:"btn",on:{click:function(e){t.append("0")}}},[t._v("0")]),t._v(" "),n("div",{staticClass:"btn",on:{click:t.dot}},[t._v(".")]),t._v(" "),n("div",{staticClass:"btn operator2",on:{click:t.equal}},[t._v("=")])]),t._v(" "),n("br"),t._v(" "),n("div",[n("input",{staticClass:"input",staticStyle:{"padding-top":".5em",width:"90%"},attrs:{type:"text",placeholder:"Input a calculation"},on:{keyup:[function(e){if(!("button"in e)&&96!==e.keyCode)return null;t.append("0")},function(e){if(!("button"in e)&&97!==e.keyCode)return null;t.append("1")},function(e){if(!("button"in e)&&98!==e.keyCode)return null;t.append("2")},function(e){if(!("button"in e)&&99!==e.keyCode)return null;t.append("3")},function(e){if(!("button"in e)&&100!==e.keyCode)return null;t.append("4")},function(e){if(!("button"in e)&&101!==e.keyCode)return null;t.append("5")},function(e){if(!("button"in e)&&102!==e.keyCode)return null;t.append("6")},function(e){if(!("button"in e)&&103!==e.keyCode)return null;t.append("7")},function(e){if(!("button"in e)&&104!==e.keyCode)return null;t.append("8")},function(e){if(!("button"in e)&&105!==e.keyCode)return null;t.append("9")},function(e){return"button"in e||106===e.keyCode?t.times(e):null},function(e){return"button"in e||107===e.keyCode?t.add(e):null},function(e){return"button"in e||109===e.keyCode?t.minus(e):null},function(e){return"button"in e||111===e.keyCode?t.divide(e):null},function(e){return"button"in e||191===e.keyCode?t.divide(e):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.equal(e):null}]}})])])},staticRenderFns:[]},_={name:"App",components:{TodoList:n("VU/8")(m,v,!1,null,null,null).exports,Clock:n("VU/8")(y,f,!1,null,null,null).exports,RandomQuote:n("VU/8")(g,b,!1,null,null,null).exports,Calculator:n("VU/8")(w,k,!1,null,null,null).exports}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"item a"},[e("TodoList")],1),this._v(" "),e("div",{staticClass:"item b"},[e("RandomQuote")],1),this._v(" "),e("div",{staticClass:"item c"},[e("Clock")],1),this._v(" "),e("div",{staticClass:"item d"},[e("Calculator")],1)])},staticRenderFns:[]};var C=n("VU/8")(_,x,!1,function(t){n("u3rt")},null,null).exports;o.a.config.productionTip=!1,new o.a({el:"#app",components:{App:C},template:"<App/>"})},u3rt:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f5f7b188415d03e4dd0e.js.map