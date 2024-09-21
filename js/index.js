


const calculate = document.getElementById('calculate');
const historyListDiv = document.getElementById('history-list');
const historySectionDiv = document.getElementById('history-section');
const expenseForm = document.getElementById('expense-form');


let serial = 0;




// Calculate Button Work Here
calculate.addEventListener('click', function TotalEarning(){

    const income = parseFloat(GetInputValueById('income')) ||0;
    const software = parseFloat(GetInputValueById('software')) ||0;
    const courses = parseFloat(GetInputValueById('courses')) ||0;
    const internet = parseFloat(GetInputValueById('internet')) ||0;
    
    if(income<0 ){
        document.getElementById("income-error").classList.remove('hidden');
        return;
    }
    else if(software<0){
        document.getElementById("software-error").classList.remove('hidden');
        return;
    }
    else if(courses<0){
        document.getElementById("courses-error").classList.remove('hidden');
        return;
    }
    else if(internet<0){
        document.getElementById("internet-error").classList.remove('hidden');
        return;
    }
    document.getElementById("income-error").classList.add('hidden');
    document.getElementById("software-error").classList.add('hidden');
    document.getElementById("courses-error").classList.add('hidden');
    document.getElementById("internet-error").classList.add('hidden');

    const TotalExpences =  software+courses+internet;
    const totalEarn = income - TotalExpences;


    if (income<TotalExpences) {
        document.getElementById('logic-error').classList.remove('hidden');
        return
    }
    document.getElementById('logic-error').classList.add('hidden');


    document.getElementById('total-expenses').innerText = TotalExpences;
    document.getElementById('balance').innerText = totalEarn;


    document.getElementById('results').classList.remove('hidden');


    const historyDiv = document.createElement('div');
    historyDiv.classList.add("bg-white", "p-3", "rounded-md", "border-l-2", "border-indigo-500");
    const date = new Date();
    const localDate = date.toLocaleDateString();
    serial++;

    historyDiv.innerHTML = `
        <p class="text-xs text-gray-500">Serial : ${serial} </p>
        <p class="text-xs text-gray-500" >${localDate}</p>
        <p class="text-xs text-gray-500" > Income : ৳${income}</p>
        <p class="text-xs text-gray-500" > Expenses : ৳${TotalExpences}</p>
        <p class="text-xs text-gray-500" > Balance : ৳${totalEarn}</p>
        
    `;

    historyListDiv.appendChild(historyDiv);


    

})



const savingsBtn = document.getElementById('calculate-savings');

savingsBtn.addEventListener('click', function(){

    const income = parseFloat(GetInputValueById('income')) ||0;
    const software = parseFloat(GetInputValueById('software')) ||0;
    const courses = parseFloat(GetInputValueById('courses')) ||0;
    const internet = parseFloat(GetInputValueById('internet')) ||0;
    

    const totalEarn = income - (software+courses+internet)
    const savings = parseFloat(GetInputValueById('savings'));
    const TotalSavings = totalEarn*savings/100;
    const remainingBalace = totalEarn - TotalSavings;


    document.getElementById('savings-amount').innerText = TotalSavings;
    document.getElementById('remaining-balance').innerText = remainingBalace;



    //  clear form 
    document.getElementById('income').value = '';
    document.getElementById('software').value = '';
    document.getElementById('courses').value = '';
    document.getElementById('internet').value = '';
    document.getElementById('savings').value = '';
    
})



const historyTab = document.getElementById('history-tab');
const assistantTtab = document.getElementById('assistant-tab');


// Button Work for History Tab
historyTab.addEventListener('click', function (){
    historyTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    assistantTtab.classList.remove(
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600",
        "text-white"
    )


    expenseForm.classList.add("hidden");
    historySectionDiv.classList.remove("hidden");
    document.getElementById('results').classList.add('hidden');
    document.getElementById('logic-error').classList.add('hidden');

});


// Assistant Button Work here

document.getElementById('assistant-tab').addEventListener('click', function(){


    historyTab.classList.remove(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    )
    assistantTtab.classList.add(
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600",
        "text-white"
    )

    expenseForm.classList.remove("hidden");
    historySectionDiv.classList.add("hidden");
})