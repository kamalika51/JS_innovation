function analyzeText(){
    let input =document.getElementById("paragraphInput").value;
    let charcount =input.length
    let wordCount=input.split(" ").length
    let noSpace = charcount - (wordCount - 1)
    let sentence=input.match
    let sentenceCount=input.match(/[.!?\n]/g)
    let uniqueWords=[...new Set(input.split(" "))].length
    let freq ={}
   input.split(" ").map((word) => {
    freq[word] =(freq[word] || 0 ) +1
   })
   
   for(let x in freq){
    console.log(x+" : "+freq[x])
   }
}
