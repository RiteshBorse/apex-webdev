export function documentWallet()
{
    document.querySelector('.js-features')
        .innerHTML = `
        <div class="document">
        <div class="docWallet-title">Document Wallet.</div>
        <div class="document-list">
            <div class="document-1">
                <div class="wallet-input">
                    <div class="document-title">Selldeed</div>
                    <input name="document1" type="file" accept="image/jpeg,image/gif,image/png,application/pdf">
                 </div>
                <button class="submit">Submit</button>
            </div>
            <div class="document-2">
                <div class="wallet-input">
                    <div class="document-title">Property Tax</div>
                    <input name="document2" type="file" accept="image/jpeg,image/gif,image/png,application/pdf">
                </div>
                <button class="submit">Submit</button>
            </div>
            <div class="document-3">
                <div class="wallet-input">
                    <div class="document-title">Possession Letter</div>
                    <input name="document3" type="file" accept="image/jpeg,image/gif,image/png,application/pdf">
                </div>
                <button class="submit">Submit</button>
            </div>
            <div class="document-4">
                <div class="wallet-input">
                    <div class="document-title">Gas Connection</div>
                    <input name="document4" type="file" accept="image/jpeg,image/gif,image/png,application/pdf">
                </div>
                <button class="submit">Submit</button>
            </div>
        </div>
    </div>

        
        `;
}