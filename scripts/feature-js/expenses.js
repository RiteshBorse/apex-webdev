export function expenses(){
    let money = 0;
    document.querySelector('.js-features')
    .innerHTML = `
        <div class="expenses">
                    <button class="back-button hidden">Back</button>
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
                            <p>Maintenace for January</p>
                            <p>1/1/24 - 1/2/24</p>
                            <p>Status : Not Paid</p>
                            <button class="pay-button">Pay</button>
                        </div>
                    </div>
                    
                </div>
                `;
    const back = document.querySelector('.back-button');
    const walletBalance = document.querySelector('.wallet-balance');
    const maintenaceBtn = document.querySelector('.maintenance');
    const viewExpenses = document.querySelector('.view-expenses');
    const moneyInput = document.querySelector('.money-input');
    const AddMoney = document.querySelector('.js-add-money-btn');
    const wallet = document.querySelector('.wallet');
    const maintenaceList = document.querySelector('.maintenace-list');
    

    maintenaceBtn.addEventListener(('click') , ()=> {
        maintenaceBtn.classList.toggle('hidden');
        viewExpenses.classList.toggle('hidden');
        wallet.classList.toggle('hidden');
        back.classList.toggle('hidden');
        maintenaceList.classList.toggle('hidden');

    });
    back.addEventListener(('click'), ()=>{
        maintenaceBtn.classList.toggle('hidden');
        viewExpenses.classList.toggle('hidden');
        wallet.classList.toggle('hidden');
        back.classList.toggle('hidden');
        maintenaceList.classList.toggle('hidden');
    });

    
}