//BACKEND BITNESS
//Entry object = returns number of words in journal entry
//method(s) to return the number of vowels and/or consonants in each journal Entry
//call these methods from front-end file to display return values
//add getTeaser() method to return first sentence of the entry (if over 8 words, display first 8 words only); call this method from front-end file to display these return values too, whenever a new journal entry is created

function Entry(title, content, vowels, consonants){
  this.title = title;
  this.content = content;
  this.vowels = vowels;
  this.consonants = consonants;
}

Entry.prototype.analyzeCharacters = function(array){
  var splitArray = array.split("");
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  debugger;
  for (var i = 0; i < splitArray.length; i++) {
    for (var vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++){
      if (splitArray[i] === vowels[vowelsIndex]) {
        howManyVowels++;
        this.vowels = howManyVowels;
      }else{
        howManyConsonants++;
        this.consonants = howManyConsonants;
      }
    }
  };
};


var howManyVowels = 0;
var howManyConsonants = 0;


//FRONTEND BITNESS
$(document).ready(function(){
  $('#journal-entries').submit(function(event){
    event.preventDefault();


    var title = $('input#title').val();
    var content = $('input#content').val();
    var entry = new Entry(title, content);

    var vowelCount = entry.analyzeCharacters(content);

    $('.answer-word').text('placeholder');
    $('.answer-vowel').text(entry.vowels);
    $('.answer-consonants').text(entry.consonants);
  });
});
