module.exports = function toReadable (number) {
  string = number.toString();
  let first = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let second = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let result;

  if (number == 0)
    return 'zero';

  else if (number < 20){
    result = first[number];
    return result;
  }

  else if (number % 10 == 0 && number < 100){
    result = second[parseInt(string[0])];
    return result;
  }

  else if(number >= 100){
    result = first[parseInt(string[0])] + " hundred";
    if (number - (parseInt(string[0]))*100 == 0){
      return result;
    }
    else if (number - (parseInt(string[0]))*100 < 20){
      result = result + " " + first[parseInt(string[1] + string[2])];
    }
    else {
      result = result + " " + second[parseInt(string[1])] + " " + first[parseInt(string[2])];
    }
    return result;
  }

  else{
    result = second[parseInt(string[0])] + " " + first[parseInt(string[1])];
    return result;
  }
}
