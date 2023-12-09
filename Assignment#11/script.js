function calculateTotalMarks() {
    var m = parseFloat(prompt("What are your Marks in Maths"));
    var s = parseFloat(prompt("What are your Marks in Science"));
    var e = parseFloat(prompt("What are your Marks in English"));
    var p = parseFloat(prompt("What are your Marks in Physics"));
    var c = parseFloat(prompt("What are your Marks in Chemistry"));

    // Check if the input is a valid number
    if (isNaN(m) || isNaN(s) || isNaN(e) || isNaN(p) || isNaN(c)) {
      alert("Please enter valid numerical values for all subjects.");
    } else {
      var totalMarks = m + s + e + p + c;
      alert("Total Marks: " + totalMarks);
    }
  }
  function calculatePercentage() {
    var m = parseFloat(prompt("What are your Marks in Maths"));
    var s = parseFloat(prompt("What are your Marks in Science"));
    var e = parseFloat(prompt("What are your Marks in English"));
    var p = parseFloat(prompt("What are your Marks in Physics"));
    var c = parseFloat(prompt("What are your Marks in Chemistry"));

    // Check if the input is a valid number
    if (isNaN(m) || isNaN(s) || isNaN(e) || isNaN(p) || isNaN(c)) {
      alert("Please enter valid numerical values for all subjects.");
    } else {
      var totalMarks = m + s + e + p + c ;
      alert("Total Percentage: " + (totalMarks / (5*100))*100);
    }
  }
  function calculateTotalMarksAndPercentage() {
    var m = parseFloat(prompt("What are your Marks in Maths"));
    var s = parseFloat(prompt("What are your Marks in Science"));
    var e = parseFloat(prompt("What are your Marks in English"));
    var p = parseFloat(prompt("What are your Marks in Physics"));
    var c = parseFloat(prompt("What are your Marks in Chemistry"));

    if (isNaN(m) || isNaN(s) || isNaN(e) || isNaN(p) || isNaN(c)) {
      alert("Please enter valid numerical values for all subjects.");
    } else {
      var totalMarks = m + s + e + p + c;
      var percentage = (totalMarks / (5 * 100)) * 100;

      alert("Total Marks: " + totalMarks + "\nPercentage: " + percentage.toFixed(2) + "%");
    }
  }