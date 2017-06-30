 (function(){
   
  /*** init variables ***/
   
  // just a bucket of things
  var things = [
    { module: 'sky', label: 'the sky'},
    { module: 'bell', label: 'the bells'},
    { module: 'bilboquet', label: 'the bilboquets' },
    { module: 'apple', label: 'the apple'},
    { module: 'hat', label: 'the hat' },
    { module: 'javascript', label: 'the javascript' },
    { module: 'rooster', label: 'the rooster' }
  ];
   
  var sections = document.getElementsByTagName('section');
   
  // keep track of each window/label used
  var usedGoods = [];
  var randomCorrectWindowId = Math.floor(Math.random() * 4);
   
   
  /*** helper functions ***/
   
  // returns id of object not yet used
  var generateRandomThing = function() {
    var usableId;
    var need = true;
    while ( need ) {
      usableId = Math.floor(Math.random() * things.length);
      // if x is not in usedGoods, set need to false and set as used
      if ( usedGoods.indexOf(usableId) === -1 ) {
        usedGoods.push(usableId)
        need = false;
      }
    }
    return usableId;
  };

  /*** let's generate some friggin art ***/
  // for each section
  var sectionList = Array.prototype.slice.call(sections);
  sectionList.forEach(function(elem, i){
    // generate random window and label to use
    var windowId = generateRandomThing();
    var labelId;
    
    // if random correct window, label and window IDs are the same
    if ( i === randomCorrectWindowId ) {
      labelId = windowId;
    }
    else {
      labelId = generateRandomThing();
    }
    
    // embed iframe of corresponding module
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', '/assets/'+ things[windowId].module+'.html');
    iframe.setAttribute('scrolling', 'no');

    var window = elem.getElementsByClassName('window')[0];
    window.appendChild(iframe);
    var label = elem.getElementsByClassName('label')[0];
    label.innerHTML = things[labelId].label;
  });
}());