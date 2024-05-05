export function residentDetails() {
    document.querySelector('.js-features')
        .innerHTML = `

        <div class="resdetailscm-title">Resident Details</div>
                 <table>
                    <thead>
                        <tr>
                            <th> Flat Num</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Aadhaar</th>
                            <th>Ownership</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>B-401</td>
                            <td>Mrs. Vineeta Singh</td>
                            <td>+91-8745698764</td>
                            <td>xxxx xxxx 5898</td>
                            <td>Owner</td>
                        </tr>
                        <tr>
                            <td>B-401</td>
                            <td>Mrs. Vineeta Singh</td>
                            <td>+91-8745698764</td>
                            <td>xxxx xxxx 5898</td>
                            <td>Owner</td>
                        </tr>
                        <tr>
                            <td>A-101</td>
                            <td>Mr. Ashneer Grover</td>
                            <td>+91-9568745258</td>
                            <td>xxxx xxxx 5896</td>
                            <td>Rental</td>
                        </tr>
                        <tr>
                            <td>C-601</td>
                            <td>Mrs.Ghazal Alagh</td>
                            <td>+91-9875642485</td>
                            <td>xxxx xxxx 5875</td>
                            <td>Rental</td>
                        </tr>
                        <tr>
                            <td>D-234</td>
                            <td>Mr.Piyush Bansal</td>
                            <td>+91-9745896547</td>
                            <td>xxxx xxxx 2567</td>
                            <td>Owner</td>
                        </tr>
                    </tbody>

                </table>

        `
}