export function residentDetails() {
    document.querySelector('.js-features')
        .innerHTML = `

        <section class="table__body">
        <table>
            <thead>
                <tr>
                    
                    <th>ID</th>
                    <th>Resident</th>
                    <th>Apartment</th>
                    <th>Contact info</th>
                    <th>Aadhaar</th>
                    <th>Ownership</th>  
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> 1 </td>
                    <td> <img src="images/Zinzu Chan Lee.jpg" alt="">Zinzu Chan Lee</td>
                    <td> B-401 </td>
                    <td> +91 8457596325 </td>
                    <td>xxxx xxxx 8745</td>
                    <td>
                        <p class="status owner">Owner</p>
                    </td>
                </tr>
                <tr>
                    <td> 2 </td>
                    <td><img src="images/Jeet Saru.jpg" alt=""> Jeet Saru </td>
                    <td> A-302 </td>
                    <td> +91 8459687425 </td>
                    <td>xxxx xxxx 3458</td>
                    <td>
                        <p class="status rent">Rent</p>
                    </td>
                </tr>
                <tr>
                    <td> 3</td>
                    <td><img src="images/Sonal Gharti.jpg" alt=""> Sonal Gharti </td>
                    <td> C-802 </td>
                    <td> +91 9876413784</td>
                    <td>xxxx xxxx 8456</td>
                    <td>
                        <p class="status owner">Owner</p>
                    </td>
                </tr>
               
              
            </tbody>
        </table>
    </section>
        `
}