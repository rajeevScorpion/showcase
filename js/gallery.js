document.addEventListener('DOMContentLoaded', function() {
    fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRRVr4WfMIQKKv4fFfyZjRpQheE75bwgiCqJloZ0ejeG0blNoa82BQWAbTwbN2MBBXCys0IHthgdiN0/pub?output=csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            rows.forEach((row, index) => {
                if (index === 0) return; // Skip header row
                const columns = row.split(',');

                const work = {
                    timestamp: columns[0], // Timestamp
                    studentName: columns[1], // Name
                    title: columns[2], // Title of the Poster
                    category: columns[3], // Category
                    description: columns[4], // Short Description
                    processDocLink: columns[5], // Link to Process documentation
                    imageUrl: columns[6] // Upload your poster (image link)
                };

                const container = document.getElementById('gallery');
                container.appendChild(createCard(work));
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    const gallery = document.getElementById('gallery');

    gallery.addEventListener('click', function(event) {
        // Check if the clicked element is an image inside a card
        if (event.target.tagName === 'IMG' && event.target.closest('.card')) {
            const imageUrl = event.target.src;
            openModal(imageUrl);
        }
    });
});


function createCard(work) {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-3';
    const formattedLink = formatLink(work.processDocLink);

    card.innerHTML = `
        <div class="card h-100">
            <img src="${work.imageUrl}" class="card-img-top cardimg" alt="${work.title}">
            <div class="card-body">
                <h5 class="card-title">${work.title} - by ${work.studentName}</h5>
                <p class="card-text">${work.description}</p>
                <a href="${formattedLink}" class="btn btn-primary" target="_blank">View Process Document</a>
            </div>
        </div>
    `;
    return card;
}
