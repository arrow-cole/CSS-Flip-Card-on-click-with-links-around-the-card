const emailList = [
    { name: "Aaroncole.dev", email: "Aaron@aaroncole.dev" },
    { name: "Coderedrobotics.com", email: "Aaron@coderedrobotics.com" },
    { name: "Fakeitcompany.xyz", email: "Aaron@fakeitcompany.xyz" },
    { name: "Acoledesign.xyz", email: "Info@acoledesign.xyz" },
    { name: "Acolegames.dev ", email: "Info@acolegames.dev" },
];

function displayEmails() {
    const emailListDiv = document.getElementById('emailList');
    emailListDiv.innerHTML = '';

    emailList.forEach(entry => {
        const emailItem = document.createElement('div');
        emailItem.classList.add('email-item');

        emailItem.innerHTML = `
            <span>${entry.name} - ${entry.email}</span>
        `;

        emailListDiv.appendChild(emailItem);
    });
}

displayEmails();