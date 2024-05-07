import { addMaintenaceAmt, addsocietyFund, apexWallet, checkMonthsAdded, readApexWallet, readMaintenanceAmount, readMonths, readSocietyFund, updateMonthStatus} from "../firebase.js";

export async function expenses(){
    let data = JSON.parse(sessionStorage.getItem('loggeduserdata'));
    let getWalletData = await readApexWallet();
    let money = getWalletData.amount || 0;
    let getSocietyFund = await readSocietyFund();
    let societyFund = getSocietyFund.amount || 0;
    checkMonthsAdded();

    document.querySelector('.js-features')
    .innerHTML = `
        <div class="expenses">
                <div class="processing hidden"> 
                    <div>Processing Payment</div>
                </div>
                    <button class="back-button hidden">&#8617</button>
                    <h2 class="wallet-balance">Apex Wallet Balance :  Rs ${money}</h2>
                    <div class="expense-buttons">
                        <button class="maintenance">Maintenance</button>
                        <button class="view-expenses">View Expenses</button>
                    </div>   
                    <div class="wallet hidden">
                        <p>Wallet</p>
                        <input class="money-input" type="number" placeholder="Add money to wallet">
                        <button class="add-money-button js-add-money-btn">Add Money</button>
                    </div>
                    <div class="maintenace-list hidden">
                        <div class="pay-maintenance">
                        <div class="loader"></div>
                        </div>
                    </div>
                    <div class="set-maintenance-amt hidden">
                        <input class="input-amt" placeholder="Set Maintenance amount" type="number">
                        <button class="set-amt">Set</button>
                    </div>
                    <div class="society-fund hidden"> Society Fund <br> <span> Rs ${societyFund}</span> </div>
                </div>
                `;
    //Function to check if the user is chairman
    function checkPost()
    {
        if(data.post == 'Chairman')
        {
            document.querySelector('.set-maintenance-amt').classList.toggle('hidden');
        }
    }
    //link all elements
    const back = document.querySelector('.back-button');
    const walletBalance = document.querySelector('.wallet-balance');
    const maintenaceBtn = document.querySelector('.maintenance');
    const viewExpenses = document.querySelector('.view-expenses');
    const moneyInput = document.querySelector('.money-input');
    const addMoney = document.querySelector('.js-add-money-btn');
    const wallet = document.querySelector('.wallet');
    const maintenaceList = document.querySelector('.maintenace-list');
    const maintenanceAmt = document.querySelector('.input-amt');
    const setMaintenanceAmt = document.querySelector('.set-amt');
    //first page maintenance button
    maintenaceBtn.addEventListener(('click') , ()=> {
        maintenaceBtn.classList.toggle('hidden');
        viewExpenses.classList.toggle('hidden');
        wallet.classList.toggle('hidden');
        back.classList.toggle('hidden');
        maintenaceList.classList.toggle('hidden');
        checkPost();
    });
    //back button on click
    back.addEventListener(('click'), ()=>{
        maintenaceBtn.classList.toggle('hidden');
        viewExpenses.classList.toggle('hidden');
        wallet.classList.toggle('hidden');
        back.classList.toggle('hidden');
        maintenaceList.classList.toggle('hidden');
        checkPost();
    });
    //Add money to the wallet on click
    addMoney.addEventListener(('click') , async ()=>{
        let add = Number(moneyInput.value);
        if(add > 0 && add < 100000) {
            money += add;
            moneyInput.value = '';
            apexWallet(money);
            walletBalance.innerText = `Apex Wallet Balance :  Rs ${money}`;
        }
        else{
            alert('Enter correct amount');
            moneyInput.value = '';
        }       
    });
    //Function to set the new Maintenance Amount
    setMaintenanceAmt.addEventListener(('click') , ()=> {
        if(maintenanceAmt.value > 0)
        {
            addMaintenaceAmt(maintenanceAmt.value);
            maintenanceAmt.value = '';
            walletBalance.innerText = `Apex Wallet Balance :  Rs ${money}`;
            loadMonths();
        }
        else {
            alert('Enter a amount');
        }
    });
    //Button to view-expense
    viewExpenses.addEventListener(('click') , ()=>{
        document.querySelector('.society-fund').classList.toggle('hidden');
        maintenaceBtn.classList.toggle('hidden');
        viewExpenses.classList.toggle('hidden');
    });
    //Function to load all the months
    const getMaintenanceAmt = await readMaintenanceAmount();
    async function loadMonths()
    {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const getMaintenanceAmt = await readMaintenanceAmount();
        


        let listMonth = '';
        for(let i = 0; i < 12 ; i++) {
            let getMonths= await readMonths(i);
            if(getMonths.status == "Paid") {
                listMonth += `
                <div class="pay-maintenance">
                    <p>Maintenace for ${months[i]} </p>
                    <p class="pm-amt"> Amount : ${getMaintenanceAmt.amount} </p>
                    <p>1/${i + 1}/24 - 1/${(i + 2)%12}/24</p>
                    <p>Status : Paid</p>
                    <button class="pay-button hidden" data-id="${i}">Pay</button>
                </div>
                `;
            }
            else{
                listMonth += `
                <div class="pay-maintenance">
                    <p>Maintenace for ${months[i]} </p>
                    <p class="pm-amt"> Amount : ${getMaintenanceAmt.amount} </p>
                    <p>1/${i + 1}/24 - 1/${(i + 2)%12}/24</p>
                    <p>Status : Not Paid</p>
                    <button class="pay-button" data-id="${i}">Pay</button>
                </div>`;
            }
        }
        document.querySelector('.maintenace-list').innerHTML = listMonth;
        document.querySelectorAll('.pay-button')
            .forEach(button => {
                button.addEventListener(('click') , async ()=>{
                    const element = button.dataset.id;
                    if( updateSocietyFund(Number(getMaintenanceAmt.amount)))
                        {
                            const temp = document.querySelector('.processing');
                            temp.classList.remove('hidden');
                            updateMonthStatus(element);   
                            await loadMonths();
                            temp.classList.add('hidden');
                        }
                   
                   
                })
                
            });
    }
    loadMonths();
   

    //Function to update the society fund
    function updateSocietyFund(fund)
    {
        
        if(money < fund) {
            alert('You have insufficent balance to pay !');
            return false;
        }
        money -= fund;
        apexWallet(money);
        walletBalance.innerText = `Apex Wallet Balance :  Rs ${money}`;
        societyFund += fund;
        addsocietyFund(societyFund);
        document.querySelector('.society-fund').innerText = `
        Society Fund : Rs ${societyFund}
        `;
        return true;  
    }

}