'use strict'
let h1 = document.createElement('h2');
const BTNS = document.querySelectorAll('.container button')
const startBTN = document.querySelector('#start');
const nameInput = document.querySelector('#namer');
const finalResult = document.querySelector('.final-result');
const resulter  = document.querySelector('#resulter');
const sizeDisplay = document.querySelectorAll('#sizer');


let namer;
nameInput.addEventListener('keyup',()=>{
    namer = nameInput.value;
    startBTN.disabled = false;
    question.get(1).set(4,String(namer));
    question.get(1).set("correct",String(namer));
})
// ----------------------------- Question Map
let rndm = [];
function hjl (num){
    for (let i = 2; i < num; i++){
        rndm.push(i)
    }
    return rndm;
}
// Last question index + 3 is the num parameter for hjl || question.size +1
let rnd = [1,2,3,4]
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffleArray(hjl(44))
console.log(rndm);
shuffleArray(rnd)
//  ---------------------- Questions
const question = new Map([
    [1,new Map([
        ["qu","What's Your Name?"],
        [1,"عبدالصمد القرشي"],
        [2,"سلمان الفرج"],
        [3,"اخوكم من العراق"],
    ])],
    [rndm[0],new Map([
        ["qu","How many are gland types?"],
        [rnd[0],"1"],
        [rnd[1],"2"],
        [rnd[2],"22"],
        [rnd[3],"4"],
        ["correct","2"]
    ])],
    [rndm[1],new Map([
        ["qu","Endocrine glands include..."],
        [1,"Eyes"],
        [2,"Mouth"],
        [3,"Hair"],
        [4,"None of the above"],
        ["correct","None of the above"]
    ])],
    [rndm[2],new Map([
        ["qu","Refers to secretion outside the body..."],
        [rnd[0],"Exocrine"],
        [rnd[1],"Hormone"],
        [rnd[2],"Endocrine"],
        [rnd[3],"Receptors"],
        ["correct","Exocrine"]
    ])],
    [rndm[3],new Map([
        ["qu","Hormones that act on cells that produced them..."],
        [rnd[1],"Autocrine"],
        [rnd[2],"Paracrine"],
        [rnd[3],"Receptors"],
        [rnd[0],"None"],
        ["correct","Autocrine"]
    ])],
    [rndm[4],new Map([
        ["qu","Hormones that act locally on cells that did NOT produce them..."],
        [rnd[1],"Autocrine"],
        [rnd[2],"Paracrine"],
        [rnd[3],"Receptors"],
        [rnd[0],"Exocrine"],
        ["correct","Paracrine"]
    ])],
    [rndm[5],new Map([
        ["qu","Receptors main function..."],
        [rnd[1],"Release hormones into blood vessels"],
        [rnd[2],"Transmit the hormone binding information into a cellular specific action."],
        [rnd[3],"transmit the neuron signal information into a hormone"],
        [rnd[0],":)"],
        ["correct","Transmit the hormone binding information into a cellular specific action."]
    ])],
    [rndm[6],new Map([
        ["qu","Types of Hormones"],
        [rnd[1],"Alpha, Beta, Gama"],
        [rnd[2],"Steroid, Protein"],
        [rnd[3],"Endocrine, Exocrine"],
        [rnd[0],"Neuron, Protein"],
        ["correct","Steroid, Protein"]
    ])],
    [rndm[7],new Map([
        ["qu","Hormones derived from cholesterol..."],
        [rnd[1],"Steroid Hormones"],
        [rnd[2],"Protein Hormones"],
        [rnd[3],"Receptors"],
        [rnd[0],"Neuron Hormones"],
        ["correct","Steroid Hormones"]
    ])],
    [rndm[8],new Map([
        ["qu","Hormones derived from amino acids..."],
        [rnd[1],"Steroid Hormones"],
        [rnd[2],"Paracrine"],
        [rnd[3],"Receptors"],
        [rnd[0],"Protein Hormones"],
        ["correct","Protein Hormones"]
    ])],
    [rndm[9],new Map([
        ["qu","Testosterone, estrogen, glucocorticoids are examples of..."],
        [rnd[1],"Steroid Hormones"],
        [rnd[2],"Protein Hormones"],
        [rnd[3],"Receptors"],
        [rnd[0],"Neuron Hormones"],
        ["correct","Steroid Hormones"]
    ])],
    [rndm[10],new Map([
        ["qu","Hypothalmus-signaling hormones are example of..."],
        [rnd[1],"Steroid Hormones"],
        [rnd[2],"Protein Hormones"],
        [rnd[3],"Receptors"],
        [rnd[0],"Neuron Hormones"],
        ["correct","Protein Hormones"]
    ])],
    [rndm[11],new Map([
        ["qu","Hormones can cross the plasma membrane..."],
        [rnd[1],"Autocrine"],
        [rnd[2],"Steroid Hormones"],
        [rnd[3],"Protein Hormones"],
        [rnd[0],"All hormones"],
        ["correct","Steroid Hormones"]
    ])],
    [rndm[12],new Map([
        ["qu","Amino acid derivatives are..."],
        [rnd[1],"both polar and nonpolar"],
        [rnd[2],"Lipid soluble"],
        [rnd[3],"Water soluble"],
        [rnd[0],"nonpolar"],
        ["correct","both polar and nonpolar"]
    ])],
    [rndm[13],new Map([
        ["qu","Steroids and fatty acids are..."],
        [rnd[1],"both polar and nonpolar"],
        [rnd[2],"Lipid soluble"],
        [rnd[3],"Water soluble"],
        [rnd[0],"polar"],
        ["correct","Lipid soluble"]
    ])],
    [rndm[14],new Map([
        ["qu","Proteins and polypeptides are..."],
        [rnd[1],"both polar and nonpolar"],
        [rnd[2],"Lipid soluble"],
        [rnd[3],"Water soluble"],
        [rnd[0],"polar"],
        ["correct","Water soluble"]
    ])],
    [rndm[15],new Map([
        ["qu","Growth hormone, oxytocin, insulin are examples of..."],
        [rnd[1],"both polar and nonpolar"],
        [rnd[2],"Lipid soluble"],
        [rnd[3],"Water soluble"],
        [rnd[0],"polar"],
        ["correct","Water soluble"]
    ])],
    [rndm[16],new Map([
        ["qu","Progesterone, testosterone, thyroid hormones are examples of..."],
        [rnd[1],"both polar and nonpolar"],
        [rnd[2],"Lipid soluble"],
        [rnd[3],"Water soluble"],
        [rnd[0],"polar"],
        ["correct","Lipid soluble"]
    ])],
    [rndm[17],new Map([
        ["qu","ذاكرت الصورة الي في سلايدات 14-16؟"],
        [rnd[1],"ايه"],
        [rnd[2],"لا"],
        [rnd[3],"شوي"],
        [rnd[0],":)"],
        ["correct","ايه"]
    ])],
    [rndm[18],new Map([
        ["qu","Which does NOT synthesize hormones?"],
        [rnd[1],"Posterior pituitary"],
        [rnd[2],"Anterior pituitary"],
        [rnd[3],"Pancreas"],
        [rnd[0],"Hypothalamus"],
        ["correct","Posterior pituitary"]
    ])],
    [rndm[19],new Map([
        ["qu","Oxytocin and Vasopressin RELEASED by..."],
        [rnd[1],"Posterior pituitary"],
        [rnd[2],"Anterior pituitary"],
        [rnd[3],"Receptors"],
        [rnd[0],"Hypothalamus"],
        ["correct","Posterior pituitary"]
    ])],
    [rndm[20],new Map([
        ["qu","Oxytocin function?"],
        [1,"During and after delivery of baby affects uterus and breasts"],
        [2,"Decreases water lost through sweating and urine"],
        [3,"Stimulates milk ejection"],
        [4,"1 and 3"],
        ["correct","1 and 3"]
    ])],
    [rndm[21],new Map([
        ["qu","Vasopressin (ADH) function?"],
        [1,"Stimulates ovulation or testosterone"],
        [2,"Stimulates milk ejection"],
        [3,"Decreases urine production by causing the kindeys to return more water to the blood"],
        [4,"None of the above"],
        ["correct","Decreases urine production by causing the kindeys to return more water to the blood"]
    ])],
    [rndm[22],new Map([
        ["qu","Growth hormone function?"],
        [1,"Stimulates secretion of insulin-like growth factors"],
        [2,"Protein synthesis"],
        [3,"Stimulates ovulation or testosterone"],
        [4,"1 and 2"],
        ["correct","1 and 2"]
    ])],
    [rndm[23],new Map([
        ["qu","Thyrotropin (TSH) function?"],
        [1,"Synthesis and secretion of thyroid hormones by thyroid"],
        [2,"Protein synthesis"],
        [3,"Stimulates ovulation or testosterone"],
        [4,"All of the above"],
        ["correct","Synthesis and secretion of thyroid hormones by thyroid"]
    ])],
    [rndm[24],new Map([
        ["qu","Follicle-stimulating hormon (FSH) function?"],
        [rnd[1],"Development of oocytes or testosterone production"],
        [rnd[2],"Synthesis and secretion of thyroid hormones by thyroid"],
        [rnd[3],"Protein synthesis"],
        [rnd[0],"Hypothalamus synthesise"],
        ["correct","Development of oocytes or testosterone production"]
    ])],
    [rndm[25],new Map([
        ["qu","Luteinizing hormone (LH) function?"],
        [rnd[1],"Protein synthesis"],
        [rnd[2],"Stimulates ovulation or testosterone"],
        [rnd[3],"Development of oocytes or testosterone production"],
        [rnd[0],"Hypothalamus synthesise"],
        ["correct","Stimulates ovulation or testosterone"]
    ])],
    [rndm[26],new Map([
        ["qu","Prolactin (PRL) function?"],
        [rnd[1],"Promotes milk secretion by mammary glands"],
        [rnd[2],"Stimulates ovulation or testosterone"],
        [rnd[3],"Stimulates ovulation or testosterone"],
        [rnd[0],"Protein synthesis"],
        ["correct","Promotes milk secretion by mammary glands"]
    ])],
    [rndm[27],new Map([
        ["qu","Which hormone have unkown role?"],
        [rnd[1],"Prolactin (PRL)"],
        [rnd[2],"Melanocyte-stimulating Hormone (MSH)"],
        [rnd[3],"Follicle-stimulating hormone (FSH)"],
        [rnd[0],"Every hormone functoin is known by humans"],
        ["correct","Melanocyte-stimulating Hormone (MSH)"]
    ])],
    [rndm[28],new Map([
        ["qu","Testes and ovaries hormones..."],
        [rnd[1],"FSH, PRL"],
        [rnd[2],"FSH, LH"],
        [rnd[3],"TSH, LH"],
        [rnd[0],"ACTH, PRL"],
        ["correct","FSH, LH"]
    ])],
    [rndm[29],new Map([
        ["qu","MSH targets..."],
        [rnd[1],"Melanocytes"],
        [rnd[2],"Anterior pituitary"],
        [rnd[3],"Receptors"],
        [rnd[0],"Liver"],
        ["correct","Melanocytes"]
    ])],
    [rndm[30],new Map([
        ["qu","ACTH targets..."],
        [rnd[1],"Posterior pituitary"],
        [rnd[2],"Adrenal cortex"],
        [rnd[3],"Receptors"],
        [rnd[0],"Hypothalamus"],
        ["correct","Adrenal cortex"]
    ])],
    [rndm[31],new Map([
        ["qu","Which gland located behind sternum between the lungs?"],
        [rnd[1],"Thymus gland"],
        [rnd[2],"Pineal gland"],
        [rnd[3],"Pitutary gland"],
        [rnd[0],"Thyroid gland"],
        ["correct","Thymus gland"]
    ])],
    [rndm[32],new Map([
        ["qu","Gland involved in T cell maturation..."],
        [rnd[1],"Thyroid gland"],
        [rnd[2],"Adrenal cortex"],
        [rnd[3],"Pitutary gland"],
        [rnd[0],"Thymus gland"],
        ["correct","Thymus gland"]
    ])],
    [rndm[33],new Map([
        ["qu","Simple goiter is cause by lack of..."],
        [rnd[1],"Prolaction"],
        [rnd[2],"iodin"],
        [rnd[3],"Receptors"],
        [rnd[0],"Oxytocin"],
        ["correct","iodin"]
    ])],
    [rndm[34],new Map([
        ["qu","Thyroxin insufficiency condition..."],
        [rnd[1],"Melanocytes"],
        [rnd[2],"Simple goiter"],
        [rnd[3],"Cretinism"],
        [rnd[0],"Liver"],
        ["correct","Cretinism"]
    ])],
    [rndm[35],new Map([
        ["qu","Thyroid insufficiency cause..."],
        [rnd[1],"Myxedema"],
        [rnd[2],"Simple goiter"],
        [rnd[3],"Cretinism"],
        [rnd[0],"Liver"],
        ["correct","Myxedema"]
    ])],
    [rndm[36],new Map([
        ["qu","Exopthalamic goiter occur when..."],
        [rnd[1],"Thyroid gland enlarge"],
        [rnd[2],"Anterior pituitary enlarge"],
        [rnd[3],"Pituitary gland enlarge"],
        [rnd[0],"Parathyroid glands enlarge"],
        ["correct","Thyroid gland enlarge"]
    ])],
    [rndm[37],new Map([
        ["qu","What is ISLET OF LANGERHANS?"],
        [rnd[1],"Pancreas"],
        [rnd[2],"Functions in pancreas"],
        [rnd[3],"Area contains cells producing hormones in pancreas"],
        [rnd[0],"Area contains cells producing hormones in liver"],
        ["correct","Area contains cells producing hormones in pancreas"]
    ])],
    [rndm[38],new Map([
        ["qu","Diabetes symptoms"],
        [1,"Frequent urination"],
        [2,"Increased hunger"],
        [3,"Weight gain"],
        [4,"1 and 2"],
        ["correct","1 and 2"]
    ])],
    [rndm[39],new Map([
        ["qu","Which diabetes caused by lifestyle?"],
        [rnd[1],"Type 1"],
        [rnd[2],"Type 2"],
        [rnd[3],";-)"],
        [rnd[0],"'I'"],
        ["correct","Type 2"]
    ])],
    [rndm[40],new Map([
        ["qu","Source of circulating epinephrine is..."],
        [rnd[1],"Melanocytes"],
        [rnd[2],"Anterior pituitary"],
        [rnd[3],"Hypothalamus"],
        [rnd[0],"Adrenal medulla"],
        ["correct","Adrenal medulla"]
    ])],
    [rndm[41],new Map([
        ["qu","Catecholamines and Adrenal medulla is derived from..."],
        [rnd[1],"Melanocytes"],
        [rnd[2],"Anterior pituitary"],
        [rnd[3],"Nervous tissues"],
        [rnd[0],"Liver"],
        ["correct","Nervous tissues"]
    ])]
]);
console.log(question.size);
let mm = 1;
for (const dis of sizeDisplay) {dis.textContent = question.size;}
//----------------------------  Score 
let score = 1;
let correctScore =0;
const scoreDisplay = document.querySelector('#score');
let displayResult = document.createElement('button');
displayResult.textContent = `Results`

let fails = [];
let corrections = [];
// --------------------------- Answers Section
for (const btn of BTNS){
btn.addEventListener('click',(e)=>{

    if(e.target.textContent === question.get(mm).get("correct")){
        if(mm == question.size){
            displayResult.disabled = false;
        }
        correctScore++;
        for (const bt of BTNS) {
            bt.style.backgroundColor = `gray`
            bt.disabled = true;
        }
        e.target.style.backgroundColor = `green`
        e.target.style.color = `white`
        nextBTN.disabled = false;
        prevBTN.disabled = true;
    } 
    else {
        if(mm == question.size){
            displayResult.disabled = false;
        }
        scoreDisplay.textContent = score;
        nextBTN.disabled = false;
        fails.push(question.get(mm).get("qu"))
        corrections.push(question.get(mm).get("correct"))
        for (const bt of BTNS) {
            bt.disabled = true;
            bt.style.backgroundColor = `gray`
        }
        BTNS.disabled = true;
        e.target.style.backgroundColor = `firebrick`
        prevBTN.disabled = true;
    }
})
}

// ------------------------------ Next And Previous
let nextBTN =document.querySelector('#next')
let prevBTN =document.querySelector('#prev')
// Next Reloader --------------------------------
nextBTN.addEventListener("click",()=>{
    
    nextBTN.disabled = true;
    prevBTN.disabled = false;
    
    for (const btn of BTNS){
        btn.style.backgroundColor = `#222222`
        btn.style.color = `#EB6440`
        btn.disabled = false;
    }
    mm++;
    score++;
    scoreDisplay.textContent = score;
    arr = []
    let [ans1,ans2,ans3,ans4] = ([question.get(mm).get(1),question.get(mm).get(2),question.get(mm).get(3),question.get(mm).get(4)]);
    arr.push(ans1,ans2,ans3,ans4)
    for (let i =0;i<BTNS.length;i++){
        BTNS[i].textContent = arr[i]   
    }
    h1.textContent = question.get(mm).get("qu")
    document.querySelector(".quiz-app").prepend(h1)
    if (mm == question.size){
        displayResult.disabled =true;
        document.querySelector(".quiz-app").append(displayResult)
        nextBTN.classList.add("hide")
        prevBTN.classList.add("hide")
    }
    // console.log(arr)
})
// console.log(mm)

// Prevouis Loader -----------------------
prevBTN.addEventListener('click',()=>{
    nextBTN.disabled = false;
    prevBTN.disabled = true;
    // Color Reset ---------
    score--;
    scoreDisplay.textContent = score;
    for (const btn of BTNS){
        btn.style.backgroundColor = "gray"
        btn.style.color = `#EB6440`
        btn.disabled = true;
    }
    mm--;
    arr = []
    let [ans1,ans2,ans3,ans4] = ([question.get(mm).get(1),question.get(mm).get(2),question.get(mm).get(3),question.get(mm).get(4)]);
    arr.push(ans1,ans2,ans3,ans4)
    for (let i =0;i<BTNS.length;i++){
        BTNS[i].textContent = arr[i]   
    }
    h1.textContent = question.get(mm).get("qu")
    document.querySelector(".quiz-app").prepend(h1)
})

// start -----------------------------
startBTN.addEventListener("click",()=>{
    if (nameInput.value === ''){
        alert("حط اسم")
    } else {
        // startBTN.disabled =
        document.querySelector("#top").classList.remove('hide')
        document.querySelector('.big-container').classList.remove("hide")
        document.querySelector('.start').classList.add("hide")
        maker(1)
    }
})
let arr=[];
function maker(num){
    let [ans1,ans2,ans3,ans4] = ([question.get(num).get(1),question.get(num).get(2),question.get(num).get(3),question.get(num).get(4)]);
    arr.push(ans1,ans2,ans3,ans4)
    h1.textContent = question.get(num).get("qu")
    document.querySelector(".quiz-app").prepend(h1)
    nextBTN.disabled = true;
    prevBTN.disabled = true;
    for (let i =0;i<BTNS.length;i++){
        BTNS[i].textContent = arr[i]   
    }
}



// ---------------------- Results
const resultsDiv = document.querySelector(".show-result");
displayResult.addEventListener("click",()=>{
    document.querySelector("#top").classList.add('hide')
    document.querySelector('.big-container').classList.add("hide")
    finalResult.classList.remove("hide");
    document.querySelector('#restart').classList.remove('hide')
    // resulter.textContent = correctScore;
    if (question.size/3 > correctScore){
        resulter.textContent = "هطف";
    } else {
        resultsDiv.classList.remove('hide')
        resulter.textContent = correctScore;
        for (let i = 0; i < fails.length; i++){
            const failDisplay = document.createElement("div");
            failDisplay.setAttribute("class","fails");
            failDisplay.innerHTML = `
            <p><span id="colored">Question:</span> ${fails[i]}</p>
            <p><span id="colored">✅Answer:</span> ${corrections[i]}</p>
            `  
            resultsDiv.append(failDisplay);    
        }
    }
})

// ----- Restart 
document.querySelector('#restart').addEventListener('click',()=>{
    location.reload()
})
