document.addEventListener('DOMContentLoaded', function() {
    fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRRVr4WfMIQKKv4fFfyZjRpQheE75bwgiCqJloZ0ejeG0blNoa82BQWAbTwbN2MBBXCys0IHthgdiN0/pub?output=csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            rows.forEach((row, index) => {
                if (index === 0) return; // Skip header row
                const columns = row.split(',');

                const work = {
                    studentName: columns[1],
                    title: columns[2],
                    category: columns[3],
                    description: columns[4],
                    processDocLink: columns[5],
                    imageUrl: columns[6]
                };

                galleryItems.push(work); // Store data for navigation

                const container = document.getElementById('gallery');
                container.appendChild(createCard(work));
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    const gallery = document.getElementById('gallery');

    gallery.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG' && event.target.closest('.card')) {
            const index = galleryItems.findIndex(item => item.imageUrl === event.target.src);
            openModal(index);
        }
    });
});

/*
function createCard(work) {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-3';

    card.innerHTML = `
        <div class="card h-100">
            <img src="${work.imageUrl}" class="card-img-top cardimg" alt="${work.title}">
            <div class="card-body">
                <h5 class="card-title">${work.title} - by ${work.studentName}</h5>
                <p class="card-text">${work.description}</p>
                <a href="${work.processDocLink}" class="btn btn-primary" target="_blank">View Process Document</a>
            </div>
        </div>
    `;
    return card;
}
*/

function createCard(work, index) {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-3';

    card.innerHTML = `
        <div class="card h-100">
            <img src="${work.imageUrl}" class="card-img-top" alt="${work.title}"
                 data-index="${index}" onclick="openModal(${index})">
            <div class="card-body">
                <h5 class="card-title">${work.title} - by ${work.studentName}</h5>
                <p class="card-text">${work.description}</p>
                <a href="${work.processDocLink}" class="btn btn-primary" target="_blank">View Process Document</a>
            </div>
        </div>
    `;
    return card;
}

